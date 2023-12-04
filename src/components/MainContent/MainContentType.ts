import React from "react";
export type carType = {
  id: number;
  Name: string;
  Miles_per_Gallon: number;
  Cylinders: number;
  Displacement: number;
  Horsepower: number;
  Weight_in_lbs: number;
  Acceleration: number;
  Year: string;
  Origin: string;
};

export type CarsType = {
  cars: Array<carType>;
  onCardDelete: (id: number) => void; // funkcijos apra6ymas
  component: React.FC;
};
