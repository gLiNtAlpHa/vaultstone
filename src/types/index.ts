// ============================================================
// Core domain types for the CryptoInvest platform
// ============================================================

export interface User {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  walletAddress: string | null;
  emailVerified: Date | null;
  status: UserStatus;
  twoFactorEnabled: boolean;
  kycStatus: KycStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type UserStatus = "pending_verification" | "active" | "suspended";
export type KycStatus = "none" | "pending" | "verified" | "rejected";

export interface Investment {
  id: string;
  userId: string;
  propertyId: string;
  amount: number;
  currency: CryptoCurrency;
  status: InvestmentStatus;
  returns: number;
  startDate: Date;
  maturityDate: Date;
}

export type CryptoCurrency = "BTC" | "ETH" | "USDT";
export type InvestmentStatus = "pending" | "active" | "completed" | "withdrawn";

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  targetAmount: number;
  fundedAmount: number;
  expectedRoi: number;
  investmentPeriod: number; // months
  minInvestment: number;
  status: PropertyStatus;
  closingDate: Date;
}

export type PropertyStatus = "open" | "funding" | "funded" | "completed";

export interface Notification {
  id: string;
  type: NotificationType;
  user: {
    name: string;
    avatar?: string;
  };
  amount: number;
  currency: string;
  property?: string;
  timestamp: Date;
}

export type NotificationType = "withdrawal" | "deposit" | "investment" | "return";

// API response wrapper
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};
