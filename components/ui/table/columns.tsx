"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import QuantityInput from "@/components/ticket-input-table";

export type Tourist = {
  id: string;
  name: string;
  email: string;
  status: "existing" | "not existing";
  chargeAmount: number;
  currency: string;
};

export type Tourguide = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  amountOfTourists: number;
  cruise: string;
  companyName: string;
  profitPercentage: number;
};

export type Cruises = {
  id: string;
  name: string;
  status: "active" | "inactive";
  captain: string;
  image: string;
};

export type ListedTickets = {
  id: string;
  name: string;
  ticketCategory: string;
  price: number;
  taxes: number;
  currency: string;
};

export type TicketCategory = {
  id: string;
  name: string;
  ticketsNumber: number;
  activeInDays: string[];
};

export type TicketDetilas = {
  availableTickets?: string;
  id?: string;
  name?: string;
  ticketCategory?: string;
  price?: number;
  taxes?: number;
  nationality?: string;
  tourGuide?: string;
  cruise?: string;
  quantity?: number;
};

let quantity: number;

export const touristsColumns: ColumnDef<Tourist>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "chargeAmount",
    header: "Charge Amount",
    cell: ({ row }) => {
      const chargeAmount = parseFloat(row.getValue("chargeAmount"));
      const currency = row.original.currency;
      // const formattedChargeAmount = chargeAmount.toLocaleString("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // });
      return (
        <div className=" text-left font-medium">{`${chargeAmount} ${currency}`}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy user email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const tourGidesColumns: ColumnDef<Tourguide>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "profitPercentage",
    header: "Profit Percentage",
    cell: ({ row }) => {
      const data = row.getValue("profitPercentage");
      console.log(data);
      return <div className=" text-left font-medium">{`${data}%`}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy user email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Tour Giude</DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const cruisesColumns: ColumnDef<Cruises>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "captain",
    header: "Captain",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      console.log(row.original.image, "data");
      return (
        <img
          className="h-20 w-20 rounded"
          src={row.original.image}
          alt={row.original.name}
        />
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy user email
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>View Crouse</DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const listedTickets: ColumnDef<ListedTickets>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ticketCategory",
    header: "Ticket Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const currency = row.original.currency;
      return (
        <div className=" text-left font-medium">{`${price} ${currency}`}</div>
      );
    },
  },
  {
    accessorKey: "taxes",
    header: "Taxes",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("taxes"));
      const currency = row.original.currency;
      return (
        <div className=" text-left font-medium">{`${price} ${currency}`}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy user email
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>View Ticket</DropdownMenuItem>
            <DropdownMenuItem>Delete Ticket</DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const ticketsCategories: ColumnDef<TicketCategory>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ticketsNumber",
    header: "Tickets Number",
  },
  
  {
    accessorKey: "activeInDays",
    header: "Active In Days",
    cell: ({ row }) => {
      const days: string[] = row.getValue("activeInDays");
      console.log(days, "days");
      return (
        <div className="flex flex-wrap w-40 ">
          {days.map((day: string) => (
            <Badge
              className="m-1"
              key={day}
              variant="outline"
            >{`${day}`}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy user email
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>View Ticket Category</DropdownMenuItem>
            <DropdownMenuItem>Delete Ticket Category</DropdownMenuItem>
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const ticketDetilasColumns: ColumnDef<TicketDetilas>[] = [
  {
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "tourGuide",
    header: "Tour Guide",
  },
  {
    accessorKey: "cruise",
    header: "Cruise",
  },
  {
    accessorKey: "ticket",
    header: "Ticket",
    cell: ({ row, getValue }) => {
      const ticket = row.original.availableTickets;
      console.log(ticket, "ttttttt");

      return <div className="flex flex-wrap w-40 ">{ticket}</div>;
    },
  },

  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => <QuantityInput row={row} />,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const ticket = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(ticket.name)}
  //           >
  //             Copy user name
  //           </DropdownMenuItem>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(ticket.email)}
  //           >
  //             Copy user email
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
