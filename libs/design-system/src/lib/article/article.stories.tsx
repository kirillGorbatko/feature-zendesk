import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './article';

const Story: ComponentMeta<typeof Article> = {
  title: 'Glivera/Article',
  component: Article,
};
export default Story;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Default = Template.bind({});
Default.args = {
  body: `
	<h1>H1 Title</h1>
	<p>But I must explain to <a href="#">this is a link</a> you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
	<h2>H2 Title</h2>
	<p>But I must explain to <a href="#">this is a link</a> you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
	<h3>H3-H5 Titles</h3>
	<p>But I must explain to <a href="#">this is a link</a> you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
	`,
};
