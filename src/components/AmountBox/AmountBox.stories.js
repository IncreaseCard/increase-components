import React from "react";

import { storiesOf } from "@storybook/react";

import AmountBox from "./AmountBox";

storiesOf("AmountBox", module).add("Green", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox amount={100} description="Total del día" color="green" />
    </div>
  );
});

storiesOf("AmountBox", module).add("Blue", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox amount={100} description="Total del día" color="blue" />
    </div>
  );
});

storiesOf("AmountBox", module).add("Red", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox amount={100} description="Total del día" color="red" />
    </div>
  );
});

storiesOf("AmountBox", module).add("With big number", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox
        amount={9999000000}
        description="Total del día"
        color="green"
      />
    </div>
  );
});

storiesOf("AmountBox", module).add("With long text", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox
        amount={100}
        description="Total del día miércoles 20/12/2017"
        color="green"
      />
    </div>
  );
});

storiesOf("AmountBox", module).add("With no description", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox amount={100} color="green" />
    </div>
  );
});

storiesOf("AmountBox", module).add("With empty amount", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox description="Total del día" color="green" />
    </div>
  );
});

storiesOf("AmountBox", module).add("With empty description", () => {
  return (
    <div style={{ width: "400px" }}>
      <AmountBox amount={10} description="" color="green" />
    </div>
  );
});

storiesOf("AmountBox", module).add("With big container", () => {
  return (
    <AmountBox amount={10} description="Total de transacciones" color="blue" />
  );
});
