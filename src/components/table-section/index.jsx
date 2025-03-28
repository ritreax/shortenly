import React from "react";
import { Table } from "@Components";
import { columns } from "./columns.jsx"; // Kolonları import ettik

const data = [
  {
    url: "https://example.com",
    period: "Monthly",
    type: "Premium",
    createdAt: "2024-03-28",
    expireAt: "2025-03-28",
    status: "active",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
  {
    url: "https://test.com",
    period: "Yearly",
    type: "Basic",
    createdAt: "2023-05-12",
    expireAt: "2024-05-12",
    status: "inactive",
  },
];

function TableSection() {
  return <Table data={data} columns={columns} />;
}

export { TableSection };
