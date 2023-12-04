import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import { cars } from "./cars";
import { carType } from "@/components/MainContent/MainContentType";

const Index = () => {
  const [allCars, setAllCars] = useState<Array<carType>>(cars);

  const onCardDelete = (id: number) => {
    const filteredCars = allCars.filter((car) => {
      return car.id !== id;
    });

    setAllCars(filteredCars);
  };

  useEffect(() => {
    console.log(allCars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header logo="Type17" isUserActive={true} />
      <MainContent
        cars={allCars}
        onCardDelete={onCardDelete}
        component={() => <div> ALL CARS</div>} //komponentas yra funkcija, kuri returnina HTML kod1
      />
      <Footer copyRight="Type17" />
    </>
  );
};

export default Index;
