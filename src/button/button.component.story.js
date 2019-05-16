import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button.component";

storiesOf("Button", module).add("with Text", () => (
  <Button onClick={action("clicked")} disabled={false}>
    Basic
  </Button>
));
storiesOf("Button", module).add("with Icon", () => (
  <Button onClick={action("clicked")} disabled={false}>
    <span role="img" aria-label="Button Icon">
      😀
    </span>
  </Button>
));
storiesOf("Button", module).add("Active", () => (
  <Button onClick={action("clicked")} disabled={false} active={true}>
    Active
  </Button>
));
storiesOf("Button", module).add("Disabled", () => (
  <Button onClick={action("clicked")} disabled={true}>
    Disabled
  </Button>
));
storiesOf("Button", module).add("with Type", () => (
  <Button onClick={action("clicked")} disabled={false} type="round">
    <span role="img" aria-label="Button Icon">
      😀
    </span>
  </Button>
));
// storiesOf("Button", module).add("with Overridden Styling", () => (
//   <Button onClick={action("clicked")} className={"round"}>
//     😀
//   </Button>
// ));
