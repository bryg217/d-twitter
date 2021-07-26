import React, { useState } from 'react';

import NavigationBar from './NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar
};

const Template = (args) => {
  const [loggedIn, setLoggedIn] = useState(args.loggedIn);

  return (
    <NavigationBar
      handleClickOnConnect={() => setLoggedIn(true)}
      handleClickOnHome={args.handleClickOnHome}
      loggedIn={loggedIn}
    />
  );
}

export const NavigationBarStory = Template.bind({});
NavigationBarStory.args = {
  handleClickOnHome: undefined,
  loggedIn: false
};