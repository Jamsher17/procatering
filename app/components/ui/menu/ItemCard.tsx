"use client";

import { FC, useState } from "react";

//components
import Image from "next/image";
import Button from "../Button";

//redux
import { useDispatch } from "react-redux";
import { add, subtract } from "../../../../redux/billCounterSlice";

interface ItemCardProps {
  image: any;
}

const ItemCard: FC<ItemCardProps> = ({ image, ...props }) => {
  const dispatch = useDispatch();
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
                dispatch(subtract(24000));
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
              dispatch(add(24000));
            }}
          />
        </div>
      </div>
      <h1 className="flex font-serif text-green-900">24.000 сум</h1>
    </div>
  );
};

export default ItemCard;
