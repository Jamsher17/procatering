//components
import Image from "next/image";
import ItemCard from "./ItemCard";

//utils
// import { cva, VariantProps } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";

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
import { twMerge } from "tailwind-merge";

const MenuMealsOnly = () => {
  const totalBill = useSelector((state: RootState) => state.billCounter.bill);
  const { webApp } = useTelegram();

  const [header_bg, setHeader_bg] = useState<"bg-sky-800" | "bg-amber-50">(
    webApp?.colorScheme === "dark" ? "bg-sky-800" : "bg-amber-50"
  );

  const themeChangeHandler = () => {
    webApp?.colorScheme === "dark"
      ? setHeader_bg("bg-sky-800")
      : setHeader_bg("bg-amber-50");
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
    <div className="flex flex-col bg-[var(--tg-theme-bg-color)] ">
      <div
        className={twMerge(
          "flex flex-col w-[100%] items-center sticky top-0 z-1",
          header_bg
        )}
      >
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={100}
          className="drop-shadow-lg"
        />
        <div className="flex flex-col w-[100%] items-center justify-center border-b pb-2 shadow-[0_2px_2px_-2px_#333]">
          <h1 className="text-2xl font-serif text-red-900 md:text-3xl">
            МЕНЮ НА СЕГОДНЯ
          </h1>
          <h1 className="text-xs md:text-sm italic text-green-900">
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
