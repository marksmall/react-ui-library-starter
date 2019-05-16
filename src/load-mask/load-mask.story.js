import React from "react";

import { storiesOf } from "@storybook/react";
// import { withKnobs, text } from '@storybook/addon-knobs';

import LoadMask from "./load-mask.component";

storiesOf("LoadMask", module).add("Basic", () => <LoadMask />);
