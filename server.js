
// server.js

import express from 'express';
import numbro from 'numbro';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();
const SIM_API_KEY = process.env.SIM_API_KEY;

// Check if the API key is set
if (!SIM_API_KEY) {
    console.error("FATAL ERROR: SIM_API_KEY is not set in your environment variables. - server.js:16");
    process.exit(1); // Exit the process if no API key is found
}

// Set up __dirname for ES modules (needed to resolve file paths)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express
const app = express();

// Configure Express settings
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Set the directory for EJS templates
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Define the main route for the wallet page
app.get('/', async (req, res) => {
    // Get wallet address and active tab from the URL query parameters
    const { 
        walletAddress = '',
        tab = 'tokens' // Default to 'tokens' tab if no tab is specified
    } = req.query;

    // Initialize variables to hold data
    let tokens = [];
    let totalWalletUSDValue = 0;
    let activities = []; // Placeholder for future activity data
    let collectibles = []; // Placeholder for future NFT data

    // --- LOGIC FOR FETCHING TOKEN BALANCES ---
    // Only fetch data if a wallet address is provided
    if (walletAddress) {
        try {
            console.log(`Fetching balances for wallet: ${walletAddress} - server.js:50`);
            // Construct the API URL for the Balances API
            const balancesApiUrl = `https://api.sim.xyz/v1/wallets/${walletAddress}/balances?chainId=1`; // chainId=1 for Ethereum Mainnet
            
            // Make the API request using fetch
            const balancesResponse = await fetch(balancesApiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${SIM_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            // Check if the request was successful
            if (!balancesResponse.ok) {
                // If the response is not OK, throw an error with the status text
                const errorBody = await balancesResponse.text(); // Get more error details if available
                throw new Error(`Balances API request failed with status ${balancesResponse.status}: ${balancesResponse.statusText}. Details: ${errorBody}`);
            }

            const balancesData = await balancesResponse.json();
            console.log("Balances API Response received successfully. - server.js:71");
            
            // The API response structure might be { results: [...] } or just an array
            // We'll check for that and assign the tokens array accordingly
            tokens = balancesData.results || balancesData || [];
            
            // Calculate the total USD value of the wallet
            let totalValue = 0;
            tokens.forEach(token => {
                // Ensure value_usd is a number before adding
                if (typeof token.value_usd === 'number') {
                    totalValue += token.value_usd;
                }
            });
            totalWalletUSDValue = numbro(totalValue).formatCurrency('$0,0.00');

            // Format the token amounts and USD values for better display
            tokens = tokens.map(token => {
                // Format amount to a readable number, avoiding scientific notation for very small numbers
                const amount = parseFloat(token.amount);
                let amountFormatted;
                if (isNaN(amount)) {
                    amountFormatted = 'N/A';
                } else if (amount < 0.0001 && amount > 0) {
                    amountFormatted = '< 0.0001'; // For very small amounts
                } else {
                    amountFormatted = numbro(amount).format('0,0.0000');
                }
                
                return {
                    ...token,
                    amountFormatted: amountFormatted,
                    valueUSDFormatted: numbro(token.value_usd).formatCurrency('$0,0.00')
                };
            });
        } catch (error) {
            console.error("Failed to fetch token balances: - server.js:107", error.message);
            // In case of an error, we'll keep tokens empty and show an error message on the frontend
            totalWalletUSDValue = 'Error';
        }
    }
    // --- END OF TOKEN BALANCES LOGIC ---


    // --- LOGIC FOR FETCHING ACTIVITIES ---
    // Only fetch data if wallet address is provided and tab is 'activity'
    if (walletAddress && tab === 'activity') {
        try {
            console.log(`Fetching activities for wallet: ${walletAddress} - server.js:119`);
            // Construct the API URL for the Activity API
            const activityApiUrl = `https://api.sim.xyz/v1/wallets/${walletAddress}/activity?chainId=1`;

            // Make the API request
            const activityResponse = await fetch(activityApiUrl, {
                headers: { 'Authorization': `Bearer ${SIM_API_KEY}` }
            });

            if (!activityResponse.ok) {
                throw new Error(`Activity API failed: ${activityResponse.statusText}`);
            }

            const activityData = await activityResponse.json();
            console.log("Activity API Response received successfully. - server.js:133");

            // The API response is usually an array of activities
            activities = activityData.results || activityData || [];

            // Format activities for better display
            activities = activities.map(activity => {
                // Convert timestamp to a readable date
                const date = new Date(activity.timestamp * 1000); // Timestamp is usually in seconds
                const formattedDate = date.toLocaleDateString();
                const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                // Determine a simple icon or label based on activity type
                let activityLabel = 'Unknown';
                if (activity.method === 'transfer' && activity.direction === 'in') {
                    activityLabel = 'Received';
                } else if (activity.method === 'transfer' && activity.direction === 'out') {
                    activityLabel = 'Sent';
                } else if (activity.method === 'swap') {
                    activityLabel = 'Swap';
                } else if (activity.method === 'approval') {
                    activityLabel = 'Approval';
                }

                return {
                    ...activity,
                    formattedDate,
                    formattedTime,
                    activityLabel
                };
            });

        } catch (error) {
            console.error("Failed to fetch activity data: - server.js:166", error.message);
            // In case of error, activities array will remain empty
        }
    }
    // --- END OF ACTIVITY LOGIC ---


    // --- LOGIC FOR FETCHING COLLECTIBLES (NFTs) ---
    // Only fetch data if wallet address is provided and tab is 'collectibles'
    if (walletAddress && tab === 'collectibles') {
        try {
            console.log(`Fetching collectibles for wallet: ${walletAddress} - server.js:177`);
            // Construct the API URL for the Collectibles API
            const collectiblesApiUrl = `https://api.sim.xyz/v1/wallets/${walletAddress}/collectibles?chainId=1`;

            // Make the API request
            const collectiblesResponse = await fetch(collectiblesApiUrl, {
                headers: { 'Authorization': `Bearer ${SIM_API_KEY}` }
            });

            if (!collectiblesResponse.ok) {
                throw new Error(`Collectibles API failed: ${collectiblesResponse.statusText}`);
            }

            const collectiblesData = await collectiblesResponse.json();
            console.log("Collectibles API Response received successfully. - server.js:191");

            // The API response is usually an array of collectibles
            collectibles = collectiblesData.results || collectiblesData || [];

            // Format collectibles for better display
            collectibles = collectibles.map(collectible => {
                // Extract image URL from metadata
                let imageUrl = '';
                if (collectible.metadata && collectible.metadata.image) {
                    imageUrl = collectible.metadata.image;
                    // Sometimes image URLs are IPFS, we can use a public gateway for them
                    if (imageUrl.startsWith('ipfs://')) {
                        imageUrl = imageUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
                    }
                }

                // Extract name from metadata
                const name = (collectible.metadata && collectible.metadata.name) ? collectible.metadata.name : `NFT #${collectible.token_id}`;

                return {
                    ...collectible,
                    formattedName: name,
                    imageUrl: imageUrl
                };
            });

        } catch (error) {
            console.error("Failed to fetch collectibles data: - server.js:219", error.message);
            // In case of error, collectibles array will remain empty
        }
    }
    // --- END OF COLLECTIBLES LOGIC ---


    // Render the 'wallet.ejs' template and pass the data to it
    res.render('wallet', {
        walletAddress: walletAddress,
        currentTab: tab,
        totalWalletUSDValue: totalWalletUSDValue,
        tokens: tokens,
        activities: activities,
        collectibles: collectibles
    });
});

// Start the server on port 3001
app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001 - server.js:239`);
});
