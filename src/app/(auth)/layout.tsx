export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left: Branding panel (hidden on mobile) */}
      <div className="hidden bg-gradient-to-br from-primary-600 to-primary-900 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        {/* AuthBrandingPanel */}
      </div>
      {/* Right: Auth form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">{children}</div>
    </div>
  );
}
