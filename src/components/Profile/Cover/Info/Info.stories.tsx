import { Info } from "./Info";
import { Story } from "@storybook/react";
export default {
  title: "Profile/Info",
  component: Info,
};
const Template: Story<any> = (args) => <Info />;
export const Sample = Template.bind({});
