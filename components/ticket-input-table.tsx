import { useState } from "react";
import { Input } from "./ui/input";
import { Row } from "@tanstack/react-table";
import { TicketDetilas } from "./ui/table/columns";

type Props = {
  row: Row<TicketDetilas>;
};

function QuantityInput({ row }: Props) {
  const [totalPrice, setTotalPrice] = useState(() => {
    const quantity = parseFloat(row.original.quantity as any) || 1;
    const price =
      typeof row.original.price === "number" ? row.original.price : 0;
    return (price * quantity).toFixed(2);
  });

  console.log(row.original.quantity);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10) || 1;
    const price =
      typeof row.original.price === "number" ? row.original.price : 0;
    setTotalPrice((price * quantity).toFixed(2));
  };

  return (
    <div className="flex justify-start items-center">
      <Input
        type="number"
        placeholder="Quantity"
        className="w-20 mx-3"
        onChange={handleQuantityChange}
        id={`quantity-${row.id}`}
        defaultValue={1}
      />
      <span>{totalPrice ? totalPrice : 0}</span>
    </div>
  );
}

export default QuantityInput;
