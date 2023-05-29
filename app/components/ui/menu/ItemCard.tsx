"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";

interface ItemCardProps {
  image: any;
  onClick?: () => void;
}

const ItemCard: FC<ItemCardProps> = ({ image, onClick, ...props }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4">
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
              }
            }}
          />
          <div className="flex flex-1 items-center justify-center border-2 border-white rounded-md my-2 font-sans text-2xl font-semibold bg-slate-200">
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
      <h1 className="flex font-serif text-green-900">24.000 сум</h1>
    </div>
  );
};

export default ItemCard;
