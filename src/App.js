```javascript
// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// --- ہماری بنائی ہوئی سروس اور کمپوننٹس کو امپورٹ کریں ---
import { connectWallet, disconnectWallet, userSession, getUserAddress } from './services/stacks-service';
import Welcome from "./screens/Welcome";
import CreateWallet from "./screens/CreateWallet";
import ImportWallet from "./screens/ImportWallet";
import Home from "./screens/Home";
import "./App.css"; // اسٹائل کے لیے

function App() {
  // --- اسٹیٹ (State) بنانا ---
  // userData میں ہم صارف کی معلومات رکھیں گے
  const [userData, setUserData] = useState(null);
  // address میں ہم صارف کا STX ایڈریس رکھیں گے
  const [address, setAddress] = useState(null);

  // --- useEffect کا استعمال ---
  // یہ کوڈ ایپ کے لوڈ ہوتے ہی ایک بار چلتا ہے
  useEffect(() => {
    // اگر صارف نے پاپ اپ بند کر دیا تھا تو اسے ہینڈل کریں
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
        setAddress(getUserAddress());
      });
    } else if (userSession.isUserSignedIn()) {
      // اگر صارف پہلے سے سائن ان ہے تو اس کا ڈیٹا لوڈ کریں
      setUserData(userSession.loadUserData());
      setAddress(getUserAddress());
    }
  }, []);

  // --- والیٹ کنیکٹ کرنے کا فنکشن ---
  const handleConnect = async () => {
    connectWallet(() => {
      // کنیکٹ ہونے کے بعد صارف کا ڈیٹا اور ایڈریس سیٹ کریں
      setUserData(userSession.loadUserData());
      setAddress(getUserAddress());
    });
  };

  // --- والیٹ ڈس کنیکٹ کرنے کا فنکشن ---
  const handleDisconnect = async () => {
    disconnectWallet();
    setUserData(null);
    setAddress(null);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* --- ہیڈر (Header) --- */}
        <header className="app-header">
          <h1>Stack Skill Bridge</h1>
          {/* اگر صارف کنیکٹ ہے تو اس کا ایڈریس اور ڈس کنیکٹ بٹن دکھائیں */}
          {address ? (
            <div className="wallet-info">
              <p>Connected: {address.substring(0, 6)}...{address.substring(address.length - 4)}</p>
              <button className="header-button" onClick={handleDisconnect}>Disconnect</button>
            </div>
          ) : (
            // اگر صارف کنیکٹ نہیں ہے تو کنیکٹ بٹن دکھائیں
            <button className="header-button" onClick={handleConnect}>Connect Wallet</button>
          )}
        </header>

        {/* --- راؤٹس (Routes) --- */}
        {/* یہاں ہم آپ کے پرانے راؤٹس کو ویسے ہی رکھیں گے */}
        <main className="app-main">
          <Routes>
            {/* اگر صارف کنیکٹ ہے تو اسے ہوم پیج دکھائیں، ورنہ ویلکم پیج */}
            <Route path="/" element={address ? <Home /> : <Welcome />} />
            <Route path="/create-wallet" element={<CreateWallet />} />
            <Route path="/import-wallet" element={<ImportWallet />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```
