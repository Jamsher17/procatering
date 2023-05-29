"use client";

//components
import Image from "next/image";
import ItemCard from "../components/ui/menu/ItemCard";

//hooks
import { useTelegram } from "../components/webApp/TelegramProvider";
import { useState } from "react";

//templates
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//assets
import image1 from "../../assets/images/azu-gov.jpg";
import image2 from "../../assets/images/azu-iz-kur.jpg";
import image3 from "../../assets/images/baklajani-farshirovanniye.jpg";
import logo from "../../assets/images/logo.png";

const Menu = () => {
  const { webApp, user } = useTelegram();
  const [tab, setTab] = useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const closeHandler = () => {
    webApp?.MainButton.setText("WORKING");
    webApp?.MainButton.show();
  };

  return (
    <div className="flex flex-col">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tab}>
          <div className="flex flex-col w-[100%] items-center bg-white sticky top-0 z-1">
            {/* <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            > */}
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
            </div>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
              centered
              sx={{}}
            >
              <Tab className="font-serif font-thin" label="БЛЮДА" value="1" />
              <Tab className="font-serif font-thin" label="НАПИТКИ" value="2" />
            </TabList>
          </div>
          <TabPanel value="1">
            <div className="flex flex-col items-center justify-evenly ">
              <ItemCard image={image1} />
              <ItemCard image={image2} />
              <ItemCard image={image3} />
              <ItemCard image={image2} />
              <ItemCard image={image1} />
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>НАПИТКИ</div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Menu;
