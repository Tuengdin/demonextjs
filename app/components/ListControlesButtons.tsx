"use client";

import useSort from "@/app/hooks/useSort";

export default function ListControlesButtons() {
  const { sortOrder, handleSort } = useSort();
  return (
    <div>
      <div>sort order: {sortOrder === "asc" ? "ascending" : "descending"}</div>
      <button
        onClick={() => handleSort("asc")}
        className="mr-2 bg-green-300 p-2 rounded-md"
      >
        sort ascending
      </button>
      <button
        onClick={() => handleSort("desc")}
        className="bg-pink-200 p-2 rounded-md"
      >
        sort descending
      </button>
    </div>
  );
}
