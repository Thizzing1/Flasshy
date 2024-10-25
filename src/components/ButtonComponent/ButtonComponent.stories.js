import { ButtonComponent } from ".";

export default {
  title: "Components/ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "  Connect",
    variant: "two",
    hover: true,
    className: {},
  },
};
