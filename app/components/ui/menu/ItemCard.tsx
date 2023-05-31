"use client";

import { FC, useState } from "react";

//utils
import { cva, VariantProps } from "class-variance-authority";

//components
import Image from "next/image";
import Button from "../Button";

//redux
import { useDispatch } from "react-redux";
import { add, subtract } from "../../../../redux/billCounterSlice";

const itemCardVariants = cva("my-4", {
  variants: {
    border: {
      true: "border-b border-gray-300 pb-3",
      false: "",
    },
  },
  defaultVariants: {
    border: true,
  },
});

interface ItemCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemCardVariants> {
  image: any;
  className?: string;
  border?: boolean;
}

const ItemCard: FC<ItemCardProps> = ({
  image,
  className,
  border,
  ...props
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <div className={itemCardVariants({ border, className })} {...props}>
      <div className="flex flex-1 gap-3 ">
        <Image
          src={image}
          alt="1"
          height={200}
          width={200}
          className="rounded-md md:shadow-md"
        />

        <div className="flex flex-col justify-between">
          <Button
            title="-"
            color="red"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
                dispatch(subtract(32000));
              }
            }}
          />
          <div className="flex flex-1 items-center justify-center border-2 border-white rounded-md my-2 font-serif text-2xl bg-slate-200">
            {count}
          </div>
          <Button
            title="+"
            color="green"
            onClick={() => {
              setCount(count + 1);
              dispatch(add(32000));
            }}
          />
        </div>
      </div>
      <h1 className="flex font-serif text-green-900">32.000 сум</h1>
    </div>
  );
};

export default ItemCard;
