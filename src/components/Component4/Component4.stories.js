import { Component4 } from ".";

export default {
  title: "Components/Component4",
  component: Component4,
  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Learn More",
    variant: "two",
    hover: true,
    className: {},
    horizontalDividerClassName: {},
  },
};
