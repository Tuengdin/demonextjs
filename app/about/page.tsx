import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is about page of demo Next.js",
};

export default function About() {
  // throw new Error("Not today!");
  return (
    <div>
      <div>This is an About page</div>
    </div>
  );
}
