import {
  Hero,
  Container,
  FmTitle,
  TitleAnim,
  FMButton,
  InfoRow,
  ContentLinks,
  LinksCard,
  ForEverythingYouDo,
  ForEverythingYouDoMobile,
  YourFans,
  YourFansMobile,
  KnowWhatWorks,
  KnowWhatWorksMobile,
  Professionals,
  PartnersLogos,
  // PartnersLogosItemProps,
  ArtistCarousel,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  ProfessionalsProps,
} from '@featurefm/design-system';

import { getPageData } from '../api';
export interface IndexProps {
  heroSection: {
    title: string;
    button?: {
      title: string;
    };
  };
  getStartedSection: FmGetStartedCtaProps;
  professionalsSection: ProfessionalsProps & {
    button?: {
      title: string;
    };
    logos?: any[];
  };
}

import { ARTIST_CAROUSEL_DATA } from '@featurefm/shared/data';

export function Index({
  heroSection,
  getStartedSection,
  professionalsSection,
}: IndexProps) {
  return (
    <>
      <div>Home page</div>
      {heroSection && (
        <Hero>
          <Container>
            {heroSection.title && (
              <Hero.Title>
                <FmTitle variant="h1" color="white">
                  {heroSection.title}
                </FmTitle>
              </Hero.Title>
            )}
            {heroSection.button && (
              <Hero.Button>
                <FMButton variant="tertiary" size="xxl" mobileWidth="full">
                  {heroSection.button?.title}
                </FMButton>
              </Hero.Button>
            )}
          </Container>
        </Hero>
      )}

      <ArtistCarousel slides={ARTIST_CAROUSEL_DATA} />

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
            platforms, and communicate, you’ll build stronger than ever
            superfans."
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
            text=" Track fan behaviors across all of your links in real-time and send
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

      {professionalsSection && (
        <Professionals>
          <Professionals.Inner>
            <Professionals.Column
              label={professionalsSection.label}
              title={professionalsSection.title}
              descr={professionalsSection.descr}
            >
              {professionalsSection.button && (
                <Professionals.Button mobileHidden>
                  <FMButton size="md" width="full" variant="primary">
                    {professionalsSection.button?.title}
                  </FMButton>
                </Professionals.Button>
              )}
            </Professionals.Column>
            <Professionals.Column>
              {professionalsSection.button && (
                <Professionals.Button desktopHidden>
                  <FMButton size="md" width="full" variant="primary">
                    {professionalsSection.button?.title}
                  </FMButton>
                </Professionals.Button>
              )}
            </Professionals.Column>
          </Professionals.Inner>
          {professionalsSection.logos && (
            <PartnersLogos data={professionalsSection.logos} />
          )}
        </Professionals>
      )}
      {getStartedSection && <FmGetStartedCta {...getStartedSection} />}
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  const pageData: IndexProps = await getPageData<IndexProps>(
    'home-pages',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default Index;
