import React from "react";
import styles from "./mainContent.module.css";
import { carType, CarsType } from "./MainContentType";

const MainContent: React.FC<CarsType> = ({
  cars,
  onCardDelete,
  component: Component,
}) => {
  return (
    <>
      <div className={styles.title}>
        <Component />
      </div>

      <div className={styles.wrapper}>
        {cars.map((car) => {
          return (
            <div
              onClick={() => onCardDelete(car.id)}
              key={car.id}
              className={styles.car}
            >
              <div>{car.Name}</div>
              <div>{car.Displacement}</div>
              <div>{car.Year}</div>
              <div>{car.Origin}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainContent;
