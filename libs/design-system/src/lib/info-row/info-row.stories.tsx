import type { ComponentMeta } from '@storybook/react';
import { InfoRow } from './info-row';
import { FmTitle } from '../fm-title/fm-title';
import { FMButton } from '../fm-button/fm-button';
import { ContentLinks } from '../content-links/content-links';
import { ForEverythingYouDo } from '../animations/for-everything-you-do/for-everything-you-do';
import { ForEverythingYouDoMobile } from '../animations/for-everything-you-do-mobile/for-everything-you-do-mobile';
import { YourFans } from '../animations/your-fans/your-fans';
import { YourFansMobile } from '../animations/your-fans-mobile/your-fans-mobile';
import { KnowWhatWorks } from '../animations/know-what-works/know-what-works';
import { KnowWhatWorksMobile } from '../animations/know-what-works-mobile/know-what-works-mobile';
import { TitleAnim } from '../animations/title-anim/title-anim';
import { LinksCard } from '../links-card/links-card';

const Story: ComponentMeta<typeof InfoRow> = {
  title: 'Website-redesign/InfoRow',
  component: InfoRow,
};
export default Story;

export const ForEverything = () => (
  <InfoRow variant="links">
    <InfoRow.Column>
      <InfoRow.Head>
        <InfoRow.Title>
          <FmTitle variant="h2" color={'inherit'}>
            For <br /> every <br /> thing <br /> you do
          </FmTitle>
        </InfoRow.Title>
        <InfoRow.Label>Marketing, built for music.</InfoRow.Label>
      </InfoRow.Head>
      <InfoRow.AnimationBlock desktopHidden>
        <ForEverythingYouDoMobile />
      </InfoRow.AnimationBlock>
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
    </InfoRow.Column>
    <InfoRow.Column>
      <InfoRow.AnimationBlock mobileHidden>
        <ForEverythingYouDo />
      </InfoRow.AnimationBlock>
    </InfoRow.Column>
  </InfoRow>
);

export const Fans = () => (
  <InfoRow variant="fans">
    <InfoRow.Column>
      <InfoRow.Head>
        <InfoRow.Title>
          <FmTitle variant="h2" color="red">
            <TitleAnim
              title={['Your fans are your most valuable', 'asset']}
              color="#FF5262"
              animationType="onview"
            />
          </FmTitle>
        </InfoRow.Title>
      </InfoRow.Head>
      <InfoRow.AnimationBlock desktopHidden>
        <YourFansMobile />
      </InfoRow.AnimationBlock>
      <InfoRow.Article
        theme="Fan Base Management"
        text="With dozens of ways to collect fan contact info, sync it with other
          platforms, and communicate, you’ll build stronger than ever superfans."
      >
        <FMButton size="xxl" mobileWidth="full">
          Learn more
        </FMButton>
      </InfoRow.Article>
    </InfoRow.Column>
    <InfoRow.Column>
      <InfoRow.AnimationBlock mobileHidden>
        <YourFans />
      </InfoRow.AnimationBlock>
    </InfoRow.Column>
  </InfoRow>
);

export const Know = () => (
  <InfoRow variant="know">
    <InfoRow.Column>
      <InfoRow.Head>
        <InfoRow.Title>
          <FmTitle variant="h2" color="purple">
            <TitleAnim
              title={['Know what works and', 'use it to grow']}
              animationType="onview"
              color="#9B62FF"
            />
          </FmTitle>
        </InfoRow.Title>
      </InfoRow.Head>
      <InfoRow.AnimationBlock desktopHidden>
        <KnowWhatWorksMobile />
      </InfoRow.AnimationBlock>
      <InfoRow.Article
        theme="Analytics and Insights"
        text="Track fan behaviors across all of your links in real-time and send
				your data to ad retargeting platforms like TikTok or Facebook Ads."
      >
        <FMButton size="xxl" variant="tertiary" mobileWidth="full">
          Learn more
        </FMButton>
      </InfoRow.Article>
    </InfoRow.Column>
    <InfoRow.Column>
      <InfoRow.AnimationBlock mobileHidden>
        <KnowWhatWorks />
      </InfoRow.AnimationBlock>
    </InfoRow.Column>
  </InfoRow>
);
