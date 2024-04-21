"use client";

import { Button } from "@/components/ui/button";
import {
  TicketCategory,
  ticketsCategories,
} from "@/components/ui/table/columns";
import { DataTable } from "@/components/ui/table/data-table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const data: TicketCategory[] = [
  {
    id: "1",
    name: "General Admission",
    ticketsNumber: 100,
    activeInDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  {
    id: "2",
    name: "VIP Experience",
    ticketsNumber: 50,
    activeInDays: ["Saturday", "Sunday"],
  },
  {
    id: "3",
    name: "Family Pack",
    ticketsNumber: 20,
    activeInDays: ["Saturday", "Sunday"],
  },
];
type Props = {};

const Page = (props: Props) => {
  const [days, setDays] = useState<string[]>([]);

  const addDays = (day: string) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };
  useEffect(() => {
    console.log(days);
  }, [days]);
  console.log(days);

  return (
    <div>
      {" "}
      <div className="container mx-auto py-10">
        <div className="mb-10 flex w-full justify-between ">
          <h2 className="text-2xl">Ticket Categories</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Ticket Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Ticket Categor</DialogTitle>
                <DialogDescription>
                  Add Ticket Categor here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="name"
                    defaultValue=""
                    placeholder="name"
                    className="col-span-3"
                  />
                </div>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General-Admission">
                      General Admission
                    </SelectItem>
                    <SelectItem value="Premium-Experience">
                      Premium Experience
                    </SelectItem>
                    <SelectItem value="Group-Discount">
                      Group Discount
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={(day) => addDays(day)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tueeday">Tueeday </SelectItem>
                    <SelectItem value="Wednesday">Wednesday </SelectItem>
                    <SelectItem value="Thursday">Thursday </SelectItem>
                    <SelectItem value="Fridaye">Friday </SelectItem>
                    <SelectItem value="Satureday">Satureday </SelectItem>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap w-40 ">
                  {days?.map((day: string) => (
                    <Badge
                      className="m-1"
                      key={day}
                      variant="outline"
                    >{`${day}`}</Badge>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Save
                  </Button>
                </DialogClose>{" "}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <DataTable columns={ticketsCategories} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Page;
