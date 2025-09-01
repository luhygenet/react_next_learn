"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import React from "react";

const Rootlayout = ({
  children,
  auth,
  friends,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
  friends: React.ReactNode;
}) => {
  const authSegment = useSelectedLayoutSegment("auth");
  const friendsSegment = useSelectedLayoutSegment("friends");
  return (
    <html>
      <body>
        <header className="border-b p-4 flex gap-6">
          <h1 className="font-bold">My App</h1>

          <nav className="flex gap-2">
            <span className="font-semibold">Auth:</span>
            <Link href="/login"> Login </Link>
            <Link href="/register"> Register </Link>
          </nav>

          <nav className="flex gap-2">
            <span className="font-semibold">Auth:</span>
            <Link href="/friends/login"> Login </Link>
            <Link href="/friends/register"> Register </Link>
          </nav>
        </header>

        <main className="grid grid-cols-3 gap-4 p-4">
          <section className="border p-4">
            <h2>Auth Slot</h2>
            <p>Active: {authSegment ?? "none"}</p>
            {auth}
          </section>
          <section className="border p-4">
            <h2>Friends</h2>
            <p>Active: {friendsSegment ?? "none"}</p>
            {friends}
          </section>
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
