import Logo from "./Logo";

export default {
  title: "Components/Header/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
};
