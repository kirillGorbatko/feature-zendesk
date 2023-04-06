import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMButton } from '../fm-button/fm-button';
import { ContentLinks } from './content-links';
import { LinksCard } from '../links-card/links-card';

const Story: ComponentMeta<typeof ContentLinks> = {
  title: 'Website-redesign/ContentLinks',
  component: ContentLinks,
};
export default Story;

const Template: ComponentStory<typeof ContentLinks> = () => (
  <ContentLinks>
    <ContentLinks.List>
      <ContentLinks.Item>
        <LinksCard
          title="Artist Bio Links"
          text="Connect your work together in a music-focused Link-in-Bio. "
          iconName="artist"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Pre-Release Links"
          text="Build momentum ahead of your release."
          iconName="calendar"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Release Links"
          text="Link to your music across all streaming platforms and services."
          iconName="release"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Contest & Unlock Pages"
          text="Grow your followers by rewarding them for their engagement."
          iconName="contest"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Tour and Event Links"
          text="Automated links that maintains all of your tour dates."
          iconName="tour"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Podcast Links"
          text="Routes fans to listen to your podcast in their favorite platform."
          iconName="podcast"
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Short Links"
          text="Shorten and track urls to send traffic directly to any destination."
          iconName="link"
        />
      </ContentLinks.Item>
      <ContentLinks.Item mobileHidden>
        <FMButton size="xxl" width="full" variant="tertiary">
          More about Links
        </FMButton>
      </ContentLinks.Item>
    </ContentLinks.List>

    <ContentLinks.MobileContent>
      <FMButton size="xxl" width="full" variant="tertiary">
        More about Links
      </FMButton>
    </ContentLinks.MobileContent>
  </ContentLinks>
);

export const Default = Template.bind({});
Default.args = {};
