import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = ({ data, columns }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 11; // Sayfa başına kaç veri gösterilecek

  const memoizedColumns = useMemo(() => columns, [columns]);

  // TanStack Table instance oluşturuyoruz
  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Sayfalama için datayı bölüyoruz
  const pageData = data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-gray-100">
            {headerGroup.headers.map((column) => (
              <th
                key={column.id}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {flexRender(
                  column.column.columnDef.header,
                  column.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {pageData.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {table.getAllColumns().map((column, colIndex) => (
              <td key={colIndex} className="border border-gray-300 px-4 py-2">
                {flexRender(column.columnDef.cell, {
                  getValue: () => row[column.id],
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      <tfooter className="flex justify-between mt-4">
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
          className="px-4 py-2 border"
        >
          Önceki
        </button>
        <span>
          Sayfa {pageIndex + 1} / {totalPages}
        </span>
        <button
          onClick={() =>
            setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={pageIndex === totalPages - 1}
          className="px-4 py-2 border"
        >
          Sonraki
        </button>
      </tfooter>
    </table>
  );
};

export { Table };
