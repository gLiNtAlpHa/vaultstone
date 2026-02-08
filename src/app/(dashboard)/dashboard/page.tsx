import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {/* BalanceCard */}
      {/* OverviewChart */}
      {/* WalletPanel */}
      {/* MarketCap */}
      {/* TransactionHistory */}
    </div>
  );
}
