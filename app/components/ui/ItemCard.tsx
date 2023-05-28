"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

interface ItemCardProps {
  image: any;
  onClick?: () => void;
  tgObject?: any;
}

const ItemCard: FC<ItemCardProps> = ({
  image,
  onClick,
  tgObject,
  ...props
}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-1 my-4 gap-3 ">
      <h1>{tgObject.colorScheme}</h1>
      <Image
        src={image}
        alt="1"
        height={250}
        width={250}
        className="rounded-md md:shadow-md"
      />
      <div className="flex flex-col justify-between">
        <Button
          title="-"
          color="red"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        />
        <div className="flex flex-1 items-center justify-center border-2 border-black rounded-md my-2 font-sans text-2xl font-semibold bg-slate-200">
          {count}
        </div>
        <Button
          title="+"
          color="green"
          onClick={() => {
            setCount(count + 1);
            onClick?.();
          }}
        />
      </div>
    </div>
  );
};

export default ItemCard;
