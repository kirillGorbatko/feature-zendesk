import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMFooter } from './fm-footer';
import { FOOTER_NAVIGATION, PRIVACY_NAVIGATION } from '@featurefm/shared/data';

const Story: ComponentMeta<typeof FMFooter> = {
  title: 'Glivera/FMFooter',
  component: FMFooter,
};
export default Story;

const Template: ComponentStory<typeof FMFooter> = (args) => (
  <FMFooter
    mainNavigation={FOOTER_NAVIGATION}
    privacyNavigation={PRIVACY_NAVIGATION}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
