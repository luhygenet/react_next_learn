"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    //two ways of closing modal, one using router.back()(actually manipulating state)
    // two using link and making sure it navigates to a page that renders null
    //way one
    //way two
    <>
    
      {/* <button
        onClick={() => {
          router.back();
        }}
      >
        Close modal
      </button>
      <div>{children}</div> */}

      <Link href="/">Close modal</Link>
      <div>{children}</div>
    </>
  );
}
