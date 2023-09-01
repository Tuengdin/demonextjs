import { SearchParams } from "@/types";
import getSortOrderFromSearchParams from "@/lib/getSortOrderFromSearchParams";
import ListControlesButtons from "@/app/components/ListControlesButtons";
import List from "@/app/components/list";

type Props = {
  searchParams: SearchParams;
};

export default function Users({ searchParams }: Props) {
  const sortOrder = getSortOrderFromSearchParams(searchParams);
  return (
    <>
      <ListControlesButtons />
      <List sortOrder={sortOrder} />
    </>
  );
}
