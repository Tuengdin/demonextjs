import { SearchParams, SortOrder } from "@/types";
import validateSortOrder from "./validateSortOrder";

export default function getSortOrderFromSearchParams(
  searchParams: SearchParams
): SortOrder {
  const sortOrderParam = searchParams.sortOrder;
  let sortOrder: SortOrder = "asc";
  if ("sortOrder" in searchParams && sortOrderParam) {
    if (validateSortOrder(sortOrderParam)) {
      sortOrder = sortOrderParam;
    }
  }
  return sortOrder;
}
