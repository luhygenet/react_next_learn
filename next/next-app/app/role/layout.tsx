import { getRole } from "@/lib/auth";
import React from "react";

const RoleLayout = ({
  children,
  admin,
  user,
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) => {
  const role = getRole(); // "admin" or false
  const renderSlot = (slot: React.ReactNode) => {
    // If slot is an array, map with keys; else just return it
    return Array.isArray(slot)
      ? slot.map((child, i) => <React.Fragment key={i}>{child}</React.Fragment>)
      : slot;
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>Profile</span>
          <button className="bg-gray-600 px-3 py-1 rounded">Logout</button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 border-r">
          <ul className="space-y-2">
            <li>Home</li>
            <li>Analytics</li>
            <li>Settngs</li>
          </ul>
        </aside>

        {/* Main Content - Conditional */}
        <main className="flex-1 p-6">{renderSlot(role === "admin" ? admin : user)}</main>
      </div>
    </div>
  );
};

export default RoleLayout;
