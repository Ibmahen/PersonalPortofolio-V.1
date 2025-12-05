import Link from "next/link";

export default function Navbar() {
  return (
    <header className="top-0 left-0 w-full z-50 bg-[#FFD700] border-b-4 border-black">
      <div className="p-4">
        <Link href="/" className="font-black text-xl border-2 border-black bg-[#40E0D0] px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" > 
          HEN
        </Link>
      </div>
    </header>
  );
}