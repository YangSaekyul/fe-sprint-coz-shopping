import Nav from "./Nav";

export default {
  title: "Components/Header/Nav",
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
};
