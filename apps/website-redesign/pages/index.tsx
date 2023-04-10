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
  TabsPagination,
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
  quoteSection: QuoteProps;
  forProfessionalsCTASection: ProfessionalsProps & {
    button?: {
      title: string;
      link?: string;
    };
    logos?: PartnersLogosItemProps[];
  };
}

import { useEffect } from 'react';

const getStartedSection = {
  title: 'Get started for free',
  descr:
    '<p>You can use Feature.fm for free or subscribe to one of our paid plans.</p><p>All paid plans come with a free trial of our Pro plan</p>',
  button: {
    title: 'Start now',
  },
};
const forProfessionalsCTASection = {
  sectionTag: 'For business',
  title: {
    desktop: 'Learn how Feature.fm can help scale your business.',
    overrideMobile: false,
    overrideTablet: false,
  },
  description: {
    desktop:
      'Join thousands of labels, managers, marketers and distributors who manage their marketing efforts across artist rosters and utilize aggregated data at scale.',
    overrideMobile: false,
    overrideTablet: false,
  },
  ctaButton: {
    text: 'Feature.fm for business',
    link: '/business',
    type: 'secondary',
  },
  testimonials: [
    {
      quote:
        'Feature.fm allowed us to turn the creation and virality into a marketing campaign, capturing the data and the Pre-Saves.',
      quoter: 'Nils Gums',
      quoterTitle: 'Founder, The Complex Group',
      name: 'Read success story',
      url: 'https://ffm.to/staceyryan_zai1k_casestudy.OWE/',
      id: '63ebdc8941eadd2d12fc4c24',
    },
    {
      quote:
        'The biggest problem was solved in that we were able to capitalize on the TikTok traffic our artists were gaining, converting fans of the track via the pre-save and resulting in 125MM streams within 4 months.',
      quoter: 'Sam Lockhart',
      quoterTitle: 'Manager, Disruptor',
      name: 'Read success story',
      url: 'https://ffm.to/emmymelicasestudy.OWE/',
      id: '63ebdc8941eadd2d12fc4c25',
    },
    {
      quote:
        'We love using Feature.fm! we’ve tried many different platforms, and this one is by far our favourite. Also, the customer service is excellent!',
      quoter: 'Tom Davies',
      quoterTitle: 'Marketing Director, Secretly Group',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c26',
    },
    {
      quote:
        "Feature.fm has allowed us to upgrade our Pre-Save campaigns to increase both Spotify and Apple Music conversions on release. We've collected thousands of Spotify followers and the data collected empowers and informs our teams.",
      quoter: 'Aaron Bogucki',
      quoterTitle: 'Global Head of Audience Development, AWAL',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c27',
    },
    {
      quote:
        'Feature.fm provides us with the most dynamic tool we have ever used to accomplish our mission of engaging new fans at a global scale.',
      quoter: 'Hank Stockard',
      quoterTitle: 'Marketing Director, Red Eye Distribution',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c28',
    },
    {
      quote:
        "Feature.fm really listens to the digital marketing community and build things they need. They're so open minded to hearing feedback and actually putting action to it.",
      quoter: "Josh D'Amore",
      quoterTitle: 'Head of Digital, 300 Entertainment',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c29',
    },
  ],
  logos: [
    {
      src: '/images/professionals-logos/1.png',
      alt: 'security group logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/2.png',
      alt: 'awal logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/3.png',
      alt: '300 entertaiment logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/4.png',
      alt: 'disraptor records logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/5.png',
      alt: 'redeye worldwide logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/6.png',
      alt: 'complex logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/5.png',
      alt: 'redeye worldwide logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/6.png',
      alt: 'complex logo',
      loading: 'lazy',
    },
  ],
};
const ARTIST_CAROUSEL_DATA = [
  {
    artist: 'Rina Sawayama',
    imageUrl: '/images/artist-carousel/rina-sawayama.png',
    label: 'Dirty Hit',
    labelImageUrl: '/images/artist-carousel/labels/dirty-hit.png',
    linkUrl: 'https://rinasawayama.ffm.to/holdthegirl', // Is this the correct link???
  },
  {
    artist: 'mxmtoon',
    imageUrl: '/images/artist-carousel/mxmtoon.png',
    label: 'AWAL',
    labelImageUrl: '/images/artist-carousel/labels/awal.png',
    linkUrl: 'https://mxmtoon.ffm.to/comingofage',
  },
  {
    artist: 'Dirty Heads',
    imageUrl: '/images/artist-carousel/dirty-heads.png',
    label: 'Better Noise Music',
    labelImageUrl: '/images/artist-carousel/labels/bnm.png',
    linkUrl: 'http://dirtyheads.ffm.to/swimteam',
  },
  {
    artist: 'Toro y Moi',
    imageUrl: '/images/artist-carousel/toro-y-moi.png',
    label: 'Dead Oceans',
    labelImageUrl: '/images/artist-carousel/labels/dead-oceans.png',
    linkUrl: 'https://toroymoi.deadoc.co/deja-vu',
  },
  {
    artist: 'Foxes',
    imageUrl: '/images/artist-carousel/foxes.png',
    label: 'PIAS',
    labelImageUrl: '/images/artist-carousel/labels/pias.png',
    linkUrl: 'http://foxes.ffm.to/thekick',
  },
  {
    artist: 'Bon Iver',
    imageUrl: '/images/artist-carousel/bon-iver.png',
    label: 'Secretly Group',
    labelImageUrl: '/images/artist-carousel/labels/secretly-group.png',
    linkUrl: 'https://boniver.ffm.to/hmuml',
  },
  {
    artist: 'Marshmello',
    imageUrl: '/images/artist-carousel/marshmello.png',
    label: 'Shalizi',
    labelImageUrl: '/images/artist-carousel/labels/shalizi.png',
    linkUrl: 'https://marshmello.ffm.to/shockwavesingle',
  },
  {
    artist: 'Kelsea Ballerini',
    imageUrl: '/images/artist-carousel/kelsea-ballerini.png',
    label: 'Orchard',
    labelImageUrl: '/images/artist-carousel/labels/orchard.png',
    linkUrl: 'https://orcd.co/kbsubjecttochange',
  },
  {
    artist: 'Dayglow',
    imageUrl: '/images/artist-carousel/dayglow.png',
    label: 'AWAL',
    labelImageUrl: '/images/artist-carousel/labels/awal.png',
    linkUrl: 'https://dayglow.ffm.to/peopleinmotion',
  },
  {
    artist: 'Bad Bunny',
    imageUrl: '/images/artist-carousel/bad-bunny.png',
    label: 'Rimas Music',
    labelImageUrl: '/images/artist-carousel/labels/rimas.png',
    linkUrl: 'http://rimas.ffm.to/unveranosinti',
  },
  {
    artist: 'Tove Lo',
    imageUrl: '/images/artist-carousel/tove-lo.png',
    label: 'mtheory',
    labelImageUrl: '/images/artist-carousel/labels/mtheory.png',
    linkUrl: 'https://tovelo.ffm.to/dirtfemme',
  },
  {
    artist: 'The National',
    imageUrl: '/images/artist-carousel/the-national.png',
    label: 'Beggars Group',
    labelImageUrl: '/images/artist-carousel/labels/beggars.png',
    linkUrl: 'https://thenational.ffm.to/weirdgoodbyes',
  },
  {
    artist: 'Grace Gaustad',
    imageUrl: '/images/artist-carousel/grace-gaustad.png',
    label: 'Symphonic',
    labelImageUrl: '/images/artist-carousel/labels/symphonic.png',
    linkUrl: 'https://sym.ffm.to/blkbx',
  },
  {
    artist: 'Emmy Meli',
    imageUrl: '/images/artist-carousel/emmy-meli.png',
    label: 'Disruptor',
    labelImageUrl: '/images/artist-carousel/labels/disruptor.png',
    linkUrl: 'https://ffm.to/iamwoman',
  },
  {
    artist: 'Diplo',
    imageUrl: '/images/artist-carousel/diplo.png',
    label: 'Mad Decent',
    labelImageUrl: '/images/artist-carousel/labels/mad-decent.png',
    linkUrl: 'https://higherground.ffm.to/diplolp',
  },
  {
    artist: 'Megan Thee Stallion',
    imageUrl: '/images/artist-carousel/megan-thee-stallion.png',
    label: '300 Entertainment',
    labelImageUrl: '/images/artist-carousel/labels/300.png',
    linkUrl: 'https://megantheestallion.ffm.to/traumazine',
  },
  {
    artist: 'Lucius',
    imageUrl: '/images/artist-carousel/lucius.png',
    label: 'Good Harbor',
    labelImageUrl: '/images/artist-carousel/labels/good-harbor.png',
    linkUrl: 'https://lucius.ffm.to/secondnature',
  },
  {
    artist: 'SYML',
    imageUrl: '/images/artist-carousel/syml.png',
    label: 'Nettwerk',
    labelImageUrl: '/images/artist-carousel/labels/nettwerk.png',
    linkUrl: 'https://ffm.bio/syml',
  },
  {
    artist: 'Burna Boy',
    imageUrl: '/images/artist-carousel/burna-boy.png',
    label: 'Empire',
    labelImageUrl: '/images/artist-carousel/labels/empire.png',
    linkUrl: 'https://burnaboy.ffm.to/lovedamini',
  },
  {
    artist: 'Ze Felipe',
    imageUrl: '/images/artist-carousel/ze-felipe.png',
    label: 'Som Livre',
    labelImageUrl: '/images/artist-carousel/labels/som-livre.png',
    linkUrl: 'https://ffm.to/bandido_',
  },
  {
    artist: 'Kid Ink',
    imageUrl: '/images/artist-carousel/kid-ink.png',
    label: 'Foundation Media',
    labelImageUrl: '/images/artist-carousel/labels/foundation.png',
    linkUrl: 'https://foundation-media.ffm.to/alive',
  },
  {
    artist: 'Arctic Monkeys',
    imageUrl: '/images/artist-carousel/arctic-monkeys.png',
    label: 'Domino Records',
    labelImageUrl: '/images/artist-carousel/labels/domino.png',
    linkUrl: 'http://arcticmonkeys.ffm.to/thecar',
  },
];

export function Index({
  heroSection,
  getStartedSection,
  quoteSection,
  forProfessionalsCTASection,
}: IndexProps) {
  console.log(forProfessionalsCTASection); //!
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
