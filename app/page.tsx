import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Next.js",
  description: "This is Demo app of Next.js",
};

export default function Home() {
  // throw new Error("Not today!");
  const BaseUrl = "http://localhost:3000";
  return (
    <div>
      <div>Hello Demo Next.JS</div>
    </div>
  );
}
