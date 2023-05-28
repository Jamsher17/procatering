"use client";

import ItemCard from "../components/ui/ItemCard";
import image1 from "../../assets/images/azu-gov.jpg";
import image2 from "../../assets/images/azu-iz-kur.jpg";
import image3 from "../../assets/images/baklajani-farshirovanniye.jpg";
import image4 from "../../assets/images/befstroganof-iz-gov.jpg";
import { useEffect, useState } from "react";
import { IWebApp, ITelegramUser } from "../components/webApp/types";

const Menu = () => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    // (window as any).Telegram?.WebApp?.ready();
    // (window as any).Telegram?.WebApp?.MainButton.show();

    if (app) {
      app.ready();
      setWebApp(app);
    }
  }, []);
  return (
    <div className="flex p-4 flex-col items-center">
      <div
        className="
        p-4
        flex
        flex-1
        justify-center
        w-
        border-2
        rounded-lg
        border-red-900
        bg-yellow-400
        my-2
        "
      >
        <h1 className="text-2xl font-serif font-bold text-red-900">
          МЕНЮ НА СЕГОДНЯ
        </h1>
      </div>
      <div className="flex flex-col items-center justify-evenly my-4">
        <ItemCard
          image={image1}
          onClick={() => {
            console.log("clicked");
            webApp?.MainButton.show();
          }}
          tgObject={webApp}
        />
        <ItemCard image={image2} />
        <ItemCard image={image1} />
        <ItemCard image={image2} />
        <ItemCard image={image3} />
      </div>
    </div>
  );
};

export default Menu;
