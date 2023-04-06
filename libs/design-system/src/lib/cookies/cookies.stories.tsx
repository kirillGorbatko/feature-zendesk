import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMButton } from '../fm-button/fm-button';
import { Cookies } from './cookies';
import cookieImage from './assets/cookie.png';
import cookieMobImage from './assets/cookie-mob.png';

const Story: ComponentMeta<typeof Cookies> = {
  title: 'Website-redesign/Cookies',
  component: Cookies,
  argTypes: {
    imageSrc: {
      defaultValue: cookieImage,
    },
    imageMobileSrc: {
      defaultValue: cookieMobImage,
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Cookies> = (args) => (
  <Cookies {...args}>
    <Cookies.Content>
      Like everyone else, we use cookies. You can read about thier use in our{' '}
      <a href="#">Privacy Policy</a>
    </Cookies.Content>
    <Cookies.ActionBar>
      <Cookies.ActionItem>
        <FMButton width="full" size="xl" variant="quaternary">
          Essential only
        </FMButton>
      </Cookies.ActionItem>
      <Cookies.ActionItem>
        <FMButton width="full" size="xl" variant="secondary">
          Essential only
        </FMButton>
      </Cookies.ActionItem>
    </Cookies.ActionBar>
  </Cookies>
);

export const Default = Template.bind({});
Default.args = {};
