import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CloseButton from "./close-button.component";

storiesOf("Close Button", module).add("Basic", () => (
  <CloseButton onClick={action("click")} />
));
