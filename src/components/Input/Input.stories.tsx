import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./Input";

const defaultProps = {
  value: "Type here",
  placeholder: "",
  onChange: () => null,
};

storiesOf("Input", module).add("default", () => <Input {...defaultProps} />);
