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
          description="Connect your work together in a music-focused Link-in-Bio. "
          icon={{
            img: '/images/link-icons/artist_bio_link_icon.svg',
            imgMob: '/images/link-icons/artist_bio_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Pre-Release Links"
          description="Build momentum ahead of your release."
          icon={{
            img: '/images/link-icons/pre_release_link_icon.svg',
            imgMob: '/images/link-icons/pre_release_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Release Links"
          description="Get more streams with a link to your music in all services."
          icon={{
            img: '/images/link-icons/released_link_icon.svg',
            imgMob: '/images/link-icons/released_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Contest & Unlock Pages"
          description="Reward your fans with prizes for taking actions you want."
          icon={{
            img: '/images/link-icons/contest_link_icon.svg',
            imgMob: '/images/link-icons/contest_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Tour and Event Links"
          description="Sell more tickets to shows with a link to all of your tour dates."
          icon={{
            img: '/images/link-icons/tour_link_icon.svg',
            imgMob: '/images/link-icons/tour_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Podcast Links"
          description="Grow listeners on your Podcast with a link to all audio platforms."
          icon={{
            img: '/images/link-icons/podcast_link_icon.svg',
            imgMob: '/images/link-icons/podcast_link_icon-mobile.svg',
          }}
        />
      </ContentLinks.Item>
      <ContentLinks.Item>
        <LinksCard
          title="Short Links"
          description="Shorten and track any URL you share online to any destination."
          icon={{
            img: '/images/link-icons/short_link_icon.svg',
            imgMob: '/images/link-icons/short_link_icon-mobile.svg',
          }}
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
