import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroAbout } from './hero-about';

import { FmTitle } from '../fm-title/fm-title';
import HeroAboutItem from '../kpi-item/kpi-item';

const Story: ComponentMeta<typeof HeroAbout> = {
  title: 'Website-redesign/HeroAbout',
  component: HeroAbout,
};
export default Story;

const Template: ComponentStory<typeof HeroAbout> = (args) => (
  <HeroAbout>
    <HeroAbout.Title>
      <FmTitle variant="h5" color="purple">
        First let’s drop a few numbers
      </FmTitle>
    </HeroAbout.Title>
    <HeroAbout.List>
      <HeroAboutItem
        number="140+"
        title="Important KPI"
        text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
      />
      <HeroAboutItem
        number="250k"
        title="Important KPI"
        text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
        decor="v1"
      />
      <HeroAboutItem
        number="30"
        title="Important KPI"
        text="We’ve spent nearly a decade understanding the needs of artists to create the most advanced music marketing technology."
        decor="v2"
      />
      <HeroAboutItem
        number="70%"
        title="Important KPI"
        text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
        decor="v3"
      />
    </HeroAbout.List>
  </HeroAbout>
);

export const Default = Template.bind({});
Default.args = {};
