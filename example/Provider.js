import React from "react";
import Protection from "../index";
import { useDeck } from "mdx-deck";

export default props => {
  const state = useDeck();

  // password is : dev.to

  return (
    <Protection paassword="rec3T73O3WNZk3IZj" deckState={state}>
      {props.children}
    </Protection>
  );
};
