import React from "react";
import Link from "next/link";

export default function Navbar() {
  const BaseUrl = "http://localhost:3000";
  return (
    <div className="bg-sky-800 text-white">
      <Link href={`/`} className="px-2">
        Home
      </Link>
      <Link href={`/about`} className="px-2">
        About
      </Link>
      <Link href={`/users`} className="px-2">
        Users
      </Link>
    </div>
  );
}
