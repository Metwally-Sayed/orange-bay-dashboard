"use client";

import { TicketTransaction } from "@/components/ticket-transaction";
import { Button } from "@/components/ui/button";
import {
  TicketCategory,
  TicketDetilas,
  ticketDetilasColumns,
  ticketsCategories,
} from "@/components/ui/table/columns";
import { DataTable } from "@/components/ui/table/data-table";

import { useState } from "react";

export default function Home() {
  const [ticketsDetails, setTicketsDetails] = useState<TicketDetilas[]>([]);
  const [click, setClick] = useState(false);

  const ticketsData = (data: TicketDetilas) => {
    setTicketsDetails([{ ...data, price: 100 }, ...ticketsDetails]);
    console.log(data);
    return data;
  };

  console.log(ticketsDetails);

  return (
    <>
      <div className="lg:flex">
        <TicketTransaction ticketsData={ticketsData} />
        <div className="container mx-auto py-10">
          <div className="mb-10 flex w-full justify-between ">
            {/* <h2 className="text-2xl">Ticket Categories</h2> */}
          </div>
          <div>
            <DataTable columns={ticketDetilasColumns} data={ticketsDetails} />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 w-full flex justify-end">
        <Button onClick={() => setClick(!click)}> Pay Now </Button>
      </div>
      {click && (
        <div className="container mx-auto my-10 w-full flex justify-center">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/WELCOME_QR_code.svg/1024px-WELCOME_QR_code.svg.png"
            alt=""
          />
        </div>
      )}
    </>
  );
}
