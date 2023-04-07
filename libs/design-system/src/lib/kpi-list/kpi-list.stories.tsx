import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { KpiList } from './kpi-list';

const Story: ComponentMeta<typeof KpiList> = {
  title: 'Website-redesign/KpiList',
  component: KpiList,
};
export default Story;

const Template: ComponentStory<typeof KpiList> = () => (
  <KpiList
    items={[
      {
        kpi: '+300K',
        title: 'Artists',
      },
      {
        kpi: '10%',
        title: 'of recorded music',
      },
      {
        kpi: '+200M',
        title: 'Fans collected',
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {};
