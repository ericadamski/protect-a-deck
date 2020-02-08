import React from "react";
import Protection from "../dist/index";
import { useDeck } from "mdx-deck";

export default props => {
  const state = useDeck();

  return (
    <Protection paassword="rec3T73O3WNZk3IZj" deckState={state}>
      {props.children}
    </Protection>
  );
};
