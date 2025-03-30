import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = ({ data, columns }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 11;

  const memoizedColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const pageData = data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="mt-6 overflow-hidden border border-custom-gray rounded-2xl">
      <table className="w-full h-full">
        <thead className="bg-background border-b border-b-custom-gray">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  className="px-4 py-3.5 text-left border-r border-r-custom-gray last:border-r-0 font-semibold text-gunmetal"
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
            <tr
              key={rowIndex}
              className="hover:bg-background border-b border-b-custom-gray last:border-b-0"
            >
              {table.getAllColumns().map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="border-r border-custom-gray px-4 py-2 last:border-r-0 font-medium text-gunmetal"
                >
                  {flexRender(column.columnDef.cell, {
                    getValue: () => row[column.id],
                  })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <tfoot className="flex items-center justify-between h-12 px-4 border-t border-t-custom-gray">
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
          className="px-1 py-0.5 border"
        >
          Önceki
        </button>
        <span className="font-medium text-sm text-ash-gray">
          Sayfa {pageIndex + 1} / {totalPages}
        </span>
        <button
          onClick={() =>
            setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))
          }
          disabled={pageIndex === totalPages - 1}
          className="px-1 py-0.5 border"
        >
          Sonraki
        </button>
      </tfoot>
    </div>
  );
};

export { Table };
