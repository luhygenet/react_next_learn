export default function DashboardLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid black", padding: "1rem" }}>
      <h1>Dashboard Layout</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ border: "1px solid blue", padding: "1rem" }}>
          <h2>Team Slot</h2>
          {team}
        </div>
        <div style={{ border: "1px solid green", padding: "1rem" }}>
          <h2>Analytics Slot</h2>
          {analytics}
        </div>
      </div>
      <div
        style={{ marginTop: "1rem", border: "1px solid gray", padding: "1rem" }}
      >
        <h2>Children Slot</h2>
        {children}
      </div>
    </div>
  );
}
