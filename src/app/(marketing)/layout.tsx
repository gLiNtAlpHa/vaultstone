import { MarketingNavbar } from "@/components/shared/MarketingNavbar";
import { Footer } from "@/components/shared/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarketingNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
