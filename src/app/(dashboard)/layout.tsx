export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div tw="flex">
        <div>Sidebar</div>
        <div>{children}</div>
      </div>
    );
  }