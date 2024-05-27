import React from "react";
import "../../styles/index.css";
import { CardPeople } from "../component/cardPeople";
import { CardPlanet } from "../component/cardPlanets";
import { CardVehicles } from "../component/cardVehicles";

export const Home = () => {
  return (
    <div className="text-center mt-5 mainContainer">
      <CardPeople></CardPeople>
      <CardVehicles></CardVehicles>
      <CardPlanet></CardPlanet>
    </div>
  );
};