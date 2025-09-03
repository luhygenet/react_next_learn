import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/role/admin-one">AdminPageOne</Link>
        <br />
        <Link href="/role/admin-two">AdminPageTwo</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
