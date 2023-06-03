//components
import Image from "next/image";
import ItemCard from "./ItemCard";

//utils
// import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

//assets
import logo from "@images/logo.png";
import image1 from "@images/azu-gov.jpg";
import image2 from "@images/azu-iz-kur.jpg";
import image3 from "@images/baklajani-farshirovanniye.jpg";

//hooks
import { useTelegram } from "../../../../hooks/webApp/TelegramProvider";
import { useEffect, useState } from "react";

//redux
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

const MenuMealsOnly = () => {
  const totalBill = useSelector((state: RootState) => state.billCounter.bill);
  const { webApp } = useTelegram();

  const [mode, setMode] = useState(webApp?.colorScheme);

  const themeChangeHandler = () => {
    setMode(webApp?.colorScheme);
  };

  webApp?.onEvent("themeChanged", themeChangeHandler);

  useEffect(() => {
    if (totalBill > 0) {
      webApp?.MainButton.show();
    } else {
      webApp?.MainButton.hide();
    }
    webApp?.MainButton.setText(`ОПЛАТИТЬ: ${totalBill} сум`);
  }, [totalBill]);

  return (
    <div className="flex flex-col ">
      <div
        className={twMerge(
          "flex flex-col w-[100%] items-center sticky top-0 z-50",
          mode === "dark" ? "bg-dmain" : "bg-lmain"
        )}
      >
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={100}
          className="drop-shadow-[0px_5px_5px_rgba(0,0,0,0.4)]"
        />
        <div className="flex flex-col w-[100%] items-center justify-center border-b pb-2 shadow-[0_2px_2px_-2px_#333]">
          <h1 className={twMerge(["text-2xl font-serif md:text-3xl"])}>
            МЕНЮ НА СЕГОДНЯ
          </h1>
          <h1>{mode}</h1>
          <h1 className="text-xs md:text-sm italic text-black">
            *в ваш заказ включаются порция хлеба и напиток
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly ">
        <ItemCard image={image1} />
        <ItemCard image={image2} />
        <ItemCard image={image3} />
        <ItemCard image={image2} />
        <ItemCard image={image1} />
      </div>
    </div>
  );
};

export default MenuMealsOnly;
