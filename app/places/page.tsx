import { Button } from "@/components/ui/button";
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

type Props = {};
const places = [
  {
    id: 1,
    name: "Ice Cream Shop",
    href: "#",

    products: "8 products",
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/99/e0/fe/132-w-1st-street-in-gulf.jpg?w=600&h=400&s=1",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Snacks bar",
    href: "#",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    products: "20 proucts",
    imageSrc:
      "https://c8.alamy.com/comp/EPYNE2/snack-bar-on-the-beach-in-summer-EPYNE2.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

const Places = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="mb-10 flex w-full justify-between ">
        <h2 className="text-2xl">Places</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Place</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Place</DialogTitle>
              <DialogDescription>
                Add Place here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  type="text"
                  id="text"
                  defaultValue=""
                  placeholder="name"
                  className="col-span-3"
                />{" "}
                <Input
                  type="text"
                  id="text"
                  defaultValue=""
                  placeholder="location"
                  className="col-span-3"
                />{" "}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  type="file"
                  id="text"
                  defaultValue=""
                  className="col-span-3"
                />{" "}
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {places.map((place) => (
            <div
              key={place.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={place.imageSrc}
                  alt={place.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={place.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {place.name}
                  </a>
                </h3>
                {/* <p className="text-sm text-gray-500">{product.description}</p> */}
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {place.products}
                  </p>
                  {/* <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
