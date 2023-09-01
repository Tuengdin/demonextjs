import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import { SortOrder, User } from "@/types";

type Props = {
  sortOrder: SortOrder;
};

export const metadata: Metadata = {
  title: "Users",
};

export default async function List({ sortOrder }: Props) {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  const sortedUser = users.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name > b.name ? 1 : -1;
    }
    return a.name < b.name ? 1 : -1;
  });
  // console.log(sortedUser);
  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {sortedUser.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
