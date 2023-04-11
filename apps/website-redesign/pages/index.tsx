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
  Quote,
  Professionals,
  PartnersLogos,
  PartnersLogosItemProps,
  ArtistCarousel,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  ProfessionalsProps,
  QuoteProps,
  Typography,
  TypographyProps,
} from '@featurefm/design-system';

import { getPageData } from '../api';
export interface IndexProps {
  heroSection: {
    heroTitle: TypographyProps;
    ctaButton?: {
      text: string;
      link: string;
    };
  };
  getStartedCTASection: FmGetStartedCtaProps;
  quoteSection: QuoteProps;
  forProfessionalsCTASection: ProfessionalsProps & {
    button?: {
      text: string;
      link?: string;
    };
    logos?: PartnersLogosItemProps[];
  };
}

import { ARTIST_CAROUSEL_DATA } from '@featurefm/shared/data';

export function Index({
  heroSection,
  getStartedCTASection,
  quoteSection,
  forProfessionalsCTASection,
}: IndexProps) {
  return (
    <>
      <div>Home page</div>
      {heroSection && (
        <Hero>
          <Container>
            {heroSection.heroTitle && (
              <Hero.Title>
                <FmTitle variant="h1" color="white">
                  <Typography {...heroSection.heroTitle} disableEscaping />
                </FmTitle>
              </Hero.Title>
            )}
            {heroSection.ctaButton && (
              <Hero.Button>
                <FMButton
                  variant="tertiary"
                  size="xxl"
                  minWidth="md"
                  mobileWidth="full"
                  href={heroSection.ctaButton.link}
                >
                  {heroSection.ctaButton?.text}
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
                  description="Connect your work together in a music-focused Link-in-Bio. "
                  icon={{
                    img: '/images/link-icons/artist_bio_link_icon.svg',
                    imgMob:
                      '/images/link-icons/artist_bio_link_icon-mobile.svg',
                  }}
                />
              </ContentLinks.Item>
              <ContentLinks.Item>
                <LinksCard
                  title="Pre-Release Links"
                  description="Build momentum ahead of your release."
                  icon={{
                    img: '/images/link-icons/pre_release_link_icon.svg',
                    imgMob:
                      '/images/link-icons/pre_release_link_icon-mobile.svg',
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
      {quoteSection && (
        <Quote title={quoteSection.title} data={quoteSection.data} />
      )}
      {forProfessionalsCTASection && (
        <Professionals>
          <Professionals.Inner>
            <Professionals.Column
              sectionTag={forProfessionalsCTASection.sectionTag}
              title={forProfessionalsCTASection.title}
              description={forProfessionalsCTASection.description}
            >
              {forProfessionalsCTASection.ctaButton && (
                <Professionals.Button mobileHidden>
                  <FMButton
                    size="md"
                    width="full"
                    variant="primary"
                    href={forProfessionalsCTASection.ctaButton?.link}
                  >
                    {forProfessionalsCTASection.ctaButton?.text}
                  </FMButton>
                </Professionals.Button>
              )}
            </Professionals.Column>
            <Professionals.Column>
              {forProfessionalsCTASection?.testimonials?.length > 0 && (
                <Professionals.Tabs
                  testimonials={forProfessionalsCTASection?.testimonials}
                />
              )}
              {forProfessionalsCTASection.ctaButton && (
                <Professionals.Button desktopHidden>
                  <FMButton size="md" width="full" variant="primary">
                    {forProfessionalsCTASection.ctaButton?.text}
                  </FMButton>
                </Professionals.Button>
              )}
            </Professionals.Column>
          </Professionals.Inner>
          {forProfessionalsCTASection.logos && (
            <PartnersLogos data={forProfessionalsCTASection.logos} />
          )}
        </Professionals>
      )}
      {getStartedCTASection && <FmGetStartedCta {...getStartedCTASection} />}
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
