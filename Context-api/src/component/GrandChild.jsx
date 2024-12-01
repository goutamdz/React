import { useContext } from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {

  return (
    <div>
      <p>This is GrandChild</p>
      <GreatGrandChild/>
    </div>
  );
}
