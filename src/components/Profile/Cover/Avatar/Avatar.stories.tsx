import Avatar from "./Avatar";
import { Story } from "@storybook/react";
export default {
  title: "Profile/Avatar",
  component: Avatar,
};
const Template: Story<any> = (args) => <Avatar />;
export const Sample = Template.bind({});
