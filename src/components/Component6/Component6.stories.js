import { Component6 } from ".";

export default {
  title: "Components/Component6",
  component: Component6,
  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Learn More",
    variant: "one",
    hover: true,
    className: {},
  },
};
