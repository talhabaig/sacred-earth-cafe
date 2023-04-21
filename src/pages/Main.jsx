import React from "react";
import CurrentItem from "../components/CurrentItem";
import SelectedCard from "../components/Main/SelectedCard";
import SelectedCardNoImg from "../components/Main/SelectedCardNoImg";
import Menu from "../components/Menu";
const Main = () => {
  return (
    <main>
      <CurrentItem content="Acai bowls" />
      <div className="flex flex-wrap">
        <SelectedCard id={5} />
        <SelectedCardNoImg id={6} />
        <SelectedCard id={7} />
        <SelectedCardNoImg id={8} />
        <SelectedCard id={9} />
        <SelectedCardNoImg id={10} />
      </div>
      <Menu />
    </main>
  );
};
export default Main;
