import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import BalanceCard from '../components/BalanceCard';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.text};
`;

const TransactionsSection = styled.div`
  margin-top: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

function HomePage() {
  const { balance } = useSelector(state => state.wallet);

  return (
    <HomeContainer>
      <WelcomeSection>
        <LogoContainer>
          <LogoImage src={Logo} alt="Wallet UI Logo" />
        </LogoContainer>
        <WelcomeTitle>Welcome to Wallet UI</WelcomeTitle>
        <WelcomeSubtitle>Manage your digital assets with ease</WelcomeSubtitle>
      </WelcomeSection>

      <BalanceCard balance={balance} />

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>Secure</FeatureTitle>
          <FeatureDescription>Your assets are protected with bank-level security</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Fast</FeatureTitle>
          <FeatureDescription>Lightning-fast transactions anytime, anywhere</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Analytics</FeatureTitle>
          <FeatureDescription>Detailed insights into your spending habits</FeatureDescription>
        </FeatureCard>
      </FeaturesSection>

      <TransactionsSection>
        <SectionTitle>Transactions</SectionTitle>
        <TransactionForm />
        <TransactionList />
      </TransactionsSection>
    </HomeContainer>
  );
}

export default HomePage;