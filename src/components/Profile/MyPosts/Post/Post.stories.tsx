import Post, { PropsType } from "./Post";
import { Story } from "@storybook/react";
export default {
  title: "Profile/Post",
  component: Post,
};
const Template: Story<PropsType> = (args) => <Post {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  id: 3,
  post: "kuku",
  likesCount: 7,
};
