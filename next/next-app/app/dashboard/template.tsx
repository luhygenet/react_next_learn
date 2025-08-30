// Notice: template itself is a Server Component
// but it will remount children with a unique key on every nav
import Counter from "./counter";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-blue-400 p-4 rounded-xl">
      {/* This counter will reset every time you navigate */}
      <Counter />
      {children}
    </div>
  );
}
