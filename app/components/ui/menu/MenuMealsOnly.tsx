//components
import Image from "next/image";
import ItemCard from "./ItemCard";

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

  useEffect(() => {
    if (totalBill > 0) {
      webApp?.MainButton.show();
    } else {
      webApp?.MainButton.hide();
    }
    webApp?.MainButton.setText(`ОПЛАТИТЬ: ${totalBill} сум`);
  }, [totalBill]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-[100%] items-center bg-white sticky top-0 z-1">
        <Image
          src={logo}
          alt="logo"
          height={100}
          width={100}
          className="drop-shadow-lg"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-serif text-red-900 md:text-3xl">
            МЕНЮ НА СЕГОДНЯ
          </h1>
          <h1>{`Счет: ${totalBill} сум`}</h1>
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
