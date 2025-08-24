import React, { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
