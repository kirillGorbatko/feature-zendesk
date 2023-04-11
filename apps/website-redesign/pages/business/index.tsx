import {
  BusinessHero,
  FMButton,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  Distributors,
  KpiList,
  ContentLinks,
  LinksCard,
  BusinessLinks,
  BannerSection,
  DataSection,
  FEATURES_MOCK,
  BenefitsSection,
  ContentBlock,
  NeedSection,
  PartnersSection,
  Typography,
} from '@featurefm/design-system';
import { getPageData } from '../../api';

export interface BusinessProps {
  bottomCTASection: FmGetStartedCtaProps;
}

export function Business({ bottomCTASection }: BusinessProps) {
  return (
    <>
      <BusinessHero
        title="Scalable Marketing for your catalog."
        descr="Grow your business with our unified marketing stack, built for any scale and trusted by top music companies."
      >
        <FMButton variant="tertiary" size="xxl" mobileWidth="full">
          Try free for 14-days
        </FMButton>
      </BusinessHero>

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

      <Distributors text="Trusted by the industry’s top labels, managers and distributors" />

      <BusinessLinks>
        <ContentLinks variant="business">
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
      </BusinessLinks>

      <ContentBlock
        title="Designed to make your life easier."
        text="We’ve spent nearly a decade understanding the needs of music marketers to create the most advanced music marketing software."
      />

      <BenefitsSection
        size="lg"
        variant="reverse"
        benefits={[
          {
            title: 'Easily manage multiple artists',
            description:
              'Organize all of your marketing efforts in artist folders, invite artist teams to their folders and access deep insights at the artist level.',
          },
          {
            title: 'Collaborate with all of your team members',
            description:
              'Built for companies with team members and collaborators around the world. Invite your company team members at the account level and invite artist teams to their artist folders.',
          },
        ]}
        picture={{
          img: 'images/benefits/1.png',
          imgMob: 'images/benefits/1-mobile.png',
        }}
      />

      <BenefitsSection
        benefits={[
          {
            title: 'Automate your workflows',
            description:
              'Focus on automating your marketing lifecycle from pre-release to post release, touring, fan contact capture and communications to be more efficient and reduce your manual workload.',
          },
          {
            title: 'Improve your conversions',
            description:
              'Feature.fm landing pages are optimized for conversions with Pre-Saves that convert in each local time-zone, the fastest page load speeds in the industry, geo-aware behaviors and language localization.',
          },
          {
            title: 'Monetize with Affiliate Partners',
            description:
              'Generate additional revenue from every campaign with affiliate marketing integrations like Apple, Amazon and Spotify.',
          },
        ]}
        picture={{
          img: 'images/benefits/2.png',
          imgMob: 'images/benefits/2-mobile.png',
        }}
      />

      <DataSection
        title="Powerfully actionable data and insights that work for you."
        features={FEATURES_MOCK}
      >
        <FMButton size="xxl" variant="tertiary" mobileWidth="full">
          Learn more about Analytics
        </FMButton>
      </DataSection>

      <BannerSection
        title="Fans are the lifeblood of your business."
        description="Building relationships with fans is the most important asset to grow an artist’s career."
        image={{
          img: '/images/business-fans/fans.png',
          imgMob: '/images/business-fans/fans-mobile.png',
        }}
      >
        <FMButton mobileWidth="full" size="xxl" variant="tertiary">
          <Typography
            desktop="Fan Base Relationship Management"
            mobile="Fan Base Management "
          />
        </FMButton>
      </BannerSection>

      <ContentBlock
        title="Need something that really scales? "
        text="Nearly half of the world’s largest music distribution companies have integrated Feature.fm’s enterprise solutions to power their marketing tech stack."
      />

      <NeedSection
        label="Want to learn more about Enterprise solutions?"
        features={[
          {
            title: 'API + Automation',
            description:
              'Automatically create all of your marketing assets at scale using our advanced API.',
          },
          {
            title: 'White Label Solutions',
            description:
              'Provide an out of the box marketing suite directly to your artist and label customers, connected to your platform.',
          },
          {
            title: 'Custom Solution Architecture',
            description:
              'No enterprise solutions are alike. We will work with you to customize a dedicated solution that meets your goals and leverages our powerful enterprise level technology.',
          },
        ]}
      >
        <FMButton mobileWidth="full" size="xxl">
          Book a demo
        </FMButton>
      </NeedSection>

      <PartnersSection
        title="We are <br/> your partners"
        subtitle="<p>We take pride in our unmatched, professional service, support and guidance.</p><p>Leverage our team of industry and product experts to get set up on Feature.fm and be successful with our technology.</p>"
        services={[
          {
            title: 'Dedicated Account Management',
            icon: {
              img: '/images/business-partners/dedicated-account-manager.png',
            },
          },
          {
            title: 'Private training sessions',
            icon: {
              img: '/images/business-partners/private-training-sessions.png',
              imgMob:
                '/images/business-partners/private-training-sessions-mobile.png',
            },
          },
          {
            title: 'Direct support channels',
            icon: {
              img: '/images/business-partners/direct-support-channels.png',
            },
          },
          {
            title: 'Marketing advice and guidance',
            icon: {
              img: '/images/business-partners/marketing-advice-and-guidance.png',
            },
          },
          {
            title: 'Personalized onboarding sessions',
            icon: {
              img: '/images/business-partners/personalized-onboarding-sessions-mobile.png',
            },
          },
          {
            title: 'Custom reporting and development available',
            icon: {
              img: '/images/business-partners/custom-reporting-and-dev.png',
            },
          },
        ]}
      />

      {bottomCTASection && (
        <FmGetStartedCta {...bottomCTASection} variant="v2" />
      )}
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  const pageData: BusinessProps = await getPageData<BusinessProps>(
    'professionals-pages',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default Business;
