import React from "react";
import CurrentItem from "../components/CurrentItem";
import SelectedCard from "../components/Main/SelectedCard";
import SelectedCardNoImg from "../components/Main/SelectedCardNoImg";
import Menu from "../components/Menu";
const Main = () => {
  return (
    <main>
      <CurrentItem content="Acai bowls"/>
      <div className="flex flex-wrap">
      <SelectedCard/>
      <SelectedCardNoImg/>
      <SelectedCard/>
      <SelectedCardNoImg/>
      <SelectedCard/>
      <SelectedCardNoImg/>
      </div>
      <Menu/>
    </main>
  );
};
export default Main;
