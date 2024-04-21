import { Button } from "@/components/ui/button";
import { ListedTickets, listedTickets } from "@/components/ui/table/columns";
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

const data: ListedTickets[] = [
  {
    id: "1",
    name: "Standard Ticket",
    ticketCategory: "General Admission",
    price: 50,
    taxes: 5,
    currency: "USD",
  },
  {
    id: "2",
    name: "VIP Ticket",
    ticketCategory: "Premium Experience",
    price: 100,
    taxes: 10,
    currency: "EGP",
  },
  {
    id: "3",
    name: "Family Pack",
    ticketCategory: "Group Discount",
    price: 150,
    taxes: 15,
    currency: "EUR",
  },
];

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="container mx-auto py-10">
        <div className="mb-10 flex w-full justify-between ">
          <h2 className="text-2xl">Listed Ticket</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Ticket</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Ticket</DialogTitle>
                <DialogDescription>
                  Add Tour Ticket here. Click save when you&apos;re done.
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
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    placeholder="price"
                    type="number"
                    id="price"
                    defaultValue=""
                    className="col-span-1"
                  />
                  <Input
                    placeholder="taxes"
                    type="number"
                    id="taxes"
                    defaultValue=""
                    className="col-span-1"
                  />
                  <Input
                    placeholder="currency"
                    type="text"
                    id="currency"
                    defaultValue=""
                    className="col-span-1"
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
          <DataTable columns={listedTickets} data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
