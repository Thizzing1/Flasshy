import { VariantHoverTrueWrapper } from ".";

export default {
  title: "Components/VariantHoverTrueWrapper",
  component: VariantHoverTrueWrapper,
  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Get Started",
    variant: "one",
    className: {},
  },
};
