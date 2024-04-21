import { Button } from "@/components/ui/button";
import {
  Cruises,
  Tourist,
  cruisesColumns,
  touristsColumns,
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

const data: Cruises[] = [
  {
    id: "1",
    name: "Caribbean Adventure",
    status: "active",
    captain: "Captain Jack Sparrow",
    image:
      "https://royalcruisehurghada.com/umetsygl/2022/07/Royal-one-Boat-in-Hurghada-sea-1-1024x576.jpg",
  },
  {
    id: "2",
    name: "Mediterranean Magic",
    status: "active",
    captain: "Captain Hook",
    image:
      "https://royalcruisehurghada.com/umetsygl/2022/07/Royal-one-Boat-in-Hurghada-sea-1-1024x576.jpg",
  },
  {
    id: "3",
    name: "Pacific Paradise",
    status: "inactive",
    captain: "Captain Blackbeard",
    image:
      "https://royalcruisehurghada.com/umetsygl/2022/07/Royal-one-Boat-in-Hurghada-sea-1-1024x576.jpg",
  },
];

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 flex w-full justify-between ">
        <h2 className="text-2xl">Cruises</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Cruise</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Cruise</DialogTitle>
              <DialogDescription>
                Add Cruise here. Click save when you&apos;re done.
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
                  placeholder="captain"
                  type="text"
                  id="captain"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  placeholder="image"
                  type="file"
                  id="captain"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  placeholder="captain"
                  type="text"
                  id="captain"
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
        <DataTable columns={cruisesColumns} data={data} />
      </div>
    </div>
  );
};

export default page;
