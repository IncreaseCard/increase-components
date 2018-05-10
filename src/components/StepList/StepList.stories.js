import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import StepList from "./StepList";

storiesOf("StepList", module)
  .add(
    "normal",
    withInfo(`Shows a list of steps in a wizard.`)(() => (
      <StepList
        steps={[
          "Bienvenida",
          "Tu comercio",
          "Tus tarjetas",
          "Último paso y tour"
        ]}
        activeStep={2}
        hasIntroStep={true}
      />
    ))
  )
  .add(
    "in zero step",
    withInfo(`Shows a list of steps in a wizard.`)(() => (
      <StepList
        steps={[
          "Bienvenida",
          "Tu comercio",
          "Tus tarjetas",
          "Último paso y tour"
        ]}
        activeStep={0}
        hasIntroStep={true}
      />
    ))
  );
