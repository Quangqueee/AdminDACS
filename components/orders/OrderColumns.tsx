"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "Đơn hàng",
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-blue-500"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Người dùng",
  },
  {
    accessorKey: "products",
    header: "Số lượng",
  },
  {
    accessorKey: "totalAmount",
    header: "Thành tiền",
  },
  {
    accessorKey: "createdAt",
    header: "Ngày đặt",
  },
];
