const columns = [
  {
    id: "url", // ✅ Her sütunun kendine özel ID'si olmalı
    accessorKey: "url", // Veriden çekerken kullanılacak anahtar
    header: "URL", // Sütun başlığı
    cell: (info) => info.getValue(),
  },
  {
    id: "period",
    accessorKey: "period",
    header: "Period",
    cell: (info) => info.getValue(),
  },
  {
    id: "type",
    accessorKey: "type",
    header: "Type",
    cell: (info) => info.getValue(),
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: "Created Date Time",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(), // Tarih formatlama
  },
  {
    id: "expireAt",
    accessorKey: "expireAt",
    header: "Expire Date Time",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    cell: (info) => (
      <span
        className={`px-2 py-1 rounded ${
          info.getValue() === "active"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {info.getValue()}
      </span>
    ),
  },
];

export { columns };
