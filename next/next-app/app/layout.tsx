"use client";
// import Link from "next/link";
// import { useSelectedLayoutSegment } from "next/navigation";

// import React from "react";

// const Rootlayout = ({
//   children,
//   auth,
//   friends,
// }: {
//   children: React.ReactNode;
//   auth: React.ReactNode;
//   friends: React.ReactNode;
// }) => {
//   const authSegment = useSelectedLayoutSegment("auth");
//   const friendsSegment = useSelectedLayoutSegment("friends");
//   return (
//     <html>
//       <body>
//         <header className="border-b p-4 flex gap-6">
//           <h1 className="font-bold">My App</h1>

//           <nav className="flex gap-2">
//             <span className="font-semibold">Auth:</span>
//             <Link key="auth-login" href="/login">
//               {" "}
//               Login{" "}
//             </Link>
//             <Link key="auth-register" href="/register">
//               {" "}
//               Register{" "}
//             </Link>
//           </nav>

//           <nav className="flex gap-2">
//             <span className="font-semibold">Friends:</span>
//             <Link key="friends-login" href="/friends/login">
//               {" "}
//               Login{" "}
//             </Link>
//             <Link key="friends-register" href="/friends/register">
//               {" "}
//               Register{" "}
//             </Link>
//           </nav>
//         </header>

//         <main className="grid grid-cols-3 gap-4 p-4">
//           <section className="border p-4">
//             <h2>Auth Slot</h2>
//             <p>Active: {authSegment ?? "none"}</p>
//             {React.Children.map(auth, (child, index) =>
//               React.isValidElement(child)
//                 ? React.cloneElement(child, { key: `auth-${index}` })
//                 : child
//             )}
//           </section>

//           <section className="border p-4">
//             <h2>Friends Slot</h2>
//             <p>Active: {friendsSegment ?? "none"}</p>
//             {React.Children.map(friends, (child, index) =>
//               React.isValidElement(child)
//                 ? React.cloneElement(child, { key: `friends-${index}` })
//                 : child
//             )}
//           </section>
//         </main>
//       </body>
//     </html>
//   );
// };
import { useSelectedLayoutSegment } from "next/dist/client/components/navigation";
import React, { ReactNode } from "react";

function RootLayout({
  children,
  auth,
}: {
  children: ReactNode;
  auth: ReactNode;
}) {
  const loginSegment = useSelectedLayoutSegment("auth");
  return (
    <html>
      <body>
        {children}
        <p>{loginSegment}</p>
      </body>
    </html>
  );
}

export default RootLayout;
