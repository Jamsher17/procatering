"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Button from "./Button";

interface ItemCardProps {
  image: any;
  onClick?: () => void;
}

const ItemCard: FC<ItemCardProps> = ({ image, onClick, ...props }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex my-4">
      <Image
        src={image}
        alt="1"
        height={400}
        width={400}
        className="rounded-md md:shadow-md"
      />
      <div className="flex flex-col justify-between mx-2">
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
          }}
        />
      </div>
    </div>
  );
};

export default ItemCard;
