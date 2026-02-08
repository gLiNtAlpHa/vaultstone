export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder */}
      <aside className="hidden w-64 border-r border-primary-100 bg-white lg:block">
        {/* DashboardSidebar */}
      </aside>
      <div className="flex-1">
        {/* TopBar placeholder */}
        <header className="flex h-16 items-center border-b border-primary-100 bg-white px-6">
          {/* DashboardTopBar */}
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
