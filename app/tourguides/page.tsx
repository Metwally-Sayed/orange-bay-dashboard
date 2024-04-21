import { Button } from "@/components/ui/button";
import { Tourguide, tourGidesColumns } from "@/components/ui/table/columns";
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

const data: Tourguide[] = [
  {
    id: "1",
    name: "Alice Smith",
    email: "alice@example.com",
    status: "active",
    amountOfTourists: 8,
    cruise: "Cruise 1",
    companyName: "test 1",
    profitPercentage: 2,
  },
  {
    id: "2",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "active",
    amountOfTourists: 12,
    cruise: "Cruise 1",
    companyName: "test 1",
    profitPercentage: 5,
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "inactive",
    amountOfTourists: 0,
    cruise: "Cruise 2",
    companyName: "test 2",
    profitPercentage: 1,
  },
  {
    id: "4",
    name: "Diana Lee",
    email: "diana@example.com",
    status: "active",
    amountOfTourists: 5,
    cruise: "Cruise 2",
    companyName: "test 1",
    profitPercentage: 2,
  },
];

type Props = {};

const TourGuides = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="container mx-auto py-10">
        <div className="mb-10 flex w-full justify-between ">
          <h2 className="text-2xl">Tour Guides</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Tour Guide</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Tour Guide</DialogTitle>
                <DialogDescription>
                  Add Tour Guide here. Click save when you&apos;re done.
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
                    placeholder="email"
                    type="email"
                    id="email"
                    defaultValue=""
                    className="col-span-3"
                  />
                </div>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">active</SelectItem>
                    <SelectItem value="inactive">inactive</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    placeholder="phone"
                    type="text"
                    id="phone"
                    defaultValue=""
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    placeholder="profit percentage"
                    type="number"
                    id="profitPercentage"
                    defaultValue=""
                    className="col-span-3"
                  />
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
          <DataTable columns={tourGidesColumns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default TourGuides;
