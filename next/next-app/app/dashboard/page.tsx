"use client";

import Link from "next/link";

// import { useState } from "react";

// export default function DashboardPage() {
//   const [throwError, setThrowError] = useState(false);

//   if (throwError) {
//     throw new Error("This is a simulated error!");
//   }

// this is the dev mode one
// throw new Error("Render-time crash 🚨")

// return (
//   <div>
// <h1>Dashboard</h1>
{
  /* this is the build error test */
}
{
  /* <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setThrowError(true)}
      >
        Trigger Error
        
      </button> */
}
{
  /* this is the dev error test */
}

//     </div>
//   );
// }

export default function DashboardHome() {
  return (
    <>
      <h1>Dashboard Home</h1>
      <Link href="/dashboard/settings">Go to Settings</Link>
      <br />
    </>
  );
}
