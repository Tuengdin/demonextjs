import { SortOrder } from "@/types";

export default function validateSortOrder(value: string): value is SortOrder {
  const validOptions: [SortOrder[0], SortOrder[1]] = ["asc", "desc"];
  return validOptions.includes(value as SortOrder);
}
