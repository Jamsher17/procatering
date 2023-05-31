"use client";

//components
import MenuMealsOnly from "../components/ui/menu/MenuMealsOnly";

//hooks
import { useTelegram } from "../../hooks/webApp/TelegramProvider";

const Menu = () => {
  const { webApp, user } = useTelegram();

  const closeHandler = () => {
    webApp?.MainButton.setText("WORKING");
    webApp?.MainButton.show();
  };

  return <MenuMealsOnly />;
};

export default Menu;
