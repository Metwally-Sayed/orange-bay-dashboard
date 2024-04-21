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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const products = [
  {
    id: 1,
    name: "Ice Cream ",
    href: "#",

    products: "8 products",
    price: "$10",
    imageSrc:
      "https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Chips",
    href: "#",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    products: "20 proucts",
    price: "$10",

    imageSrc: "https://m.media-amazon.com/images/I/813axPlVxBL.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="mb-10 flex w-full justify-between ">
        <h2 className="text-2xl">Products</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>
                Add Product here. Click save when you&apos;re done.
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
                  placeholder="price"
                  className="col-span-3"
                />{" "}
                <br />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="select place" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="snacks-bar">Snacks bar</SelectItem>
                    <SelectItem value="ice-cream-shop">
                      Ice Cream Shop
                    </SelectItem>
                  </SelectContent>
                </Select>
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
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                {/* <p className="text-sm text-gray-500">{product.description}</p> */}
                <div className="flex flex-1 flex-col justify-end">
                  {/* <p className="text-sm italic text-gray-500">
                    {product.products}
                  </p> */}
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
