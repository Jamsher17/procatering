"use client";

import { FC, useState } from "react";

//hooks
import { useTelegram } from "../../../../hooks/webApp/TelegramProvider";

//utils
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

//components
import Image from "next/image";
import Button from "../Button";
import ReactCardFlip from "react-card-flip";

//assets
import desc_bg from "@images/desc_background.jpg";

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
    border: false,
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
  const [isFlipped, setIsFlipped] = useState(false);
  const { webApp } = useTelegram();

  const mode = webApp?.colorScheme ?? "light";

  return (
    <div className={itemCardVariants({ border, className })} {...props}>
      <div className="flex flex-1 gap-3 ">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
            style={{}}
            onClick={() => {
              setIsFlipped(true);
            }}
          >
            <Image
              src={image}
              alt="1"
              height={200}
              width={200}
              className="rounded-md md:shadow-md"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => {
              setIsFlipped(false);
            }}
          >
            <h1 className="absolute z-1 text-white font-forum">ОПИСАНИЕ</h1>
            <Image
              src={desc_bg}
              alt="1"
              height={200}
              width={200}
              className="rounded-md md:shadow-md"
            />
          </div>
        </ReactCardFlip>

        <div className="flex flex-col justify-between">
          <Button
            title="-"
            mode={mode}
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
                dispatch(subtract(32000));
              }
            }}
          />
          <div className="flex flex-1 items-center justify-center border-2 border-white rounded-xl my-2 font-serif text-2xl bg-slate-100">
            {count}
          </div>
          <Button
            title="+"
            mode={mode}
            onClick={() => {
              setCount(count + 1);
              dispatch(add(32000));
            }}
          />
        </div>
      </div>
      <div
        className={twMerge([
          "flex flex-1 rounded-md items-center justify-center h-7 w-[200px] mt-2 shadow-md",
          mode === "light" ? "bg-lbutton" : "bg-dbutton",
        ])}
      >
        <h1 className="flex font-serif text-white">32.000 сум</h1>
      </div>
    </div>
  );
};

export default ItemCard;
