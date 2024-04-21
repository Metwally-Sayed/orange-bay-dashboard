import { Button } from "@/components/ui/button";
import { Tourist, touristsColumns } from "@/components/ui/table/columns";
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

import { Input } from "@/components/ui/input";

const data: Tourist[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "existing",
    chargeAmount: 100,
    currency: "USD",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "existing",
    chargeAmount: 150,
    currency: "PLN",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "not existing",
    chargeAmount: 75,
    currency: "EGP",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob@example.com",
    status: "existing",
    chargeAmount: 200,
    currency: "EUR",
  },
];

type Props = {};

const Tourists = (props: Props) => {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 flex w-full justify-between ">
        <h2 className="text-2xl">Tourists</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Tourists</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Tourists</DialogTitle>
              <DialogDescription>
                Add tourists here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input id="name" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  type="email"
                  id="email"
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
        <DataTable columns={touristsColumns} data={data} />
      </div>
    </div>
  );
};

export default Tourists;
