import {
  BusinessHero,
  FMButton,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  Distributors,
  KpiList,
  BannerSection,
  DataSection,
  FEATURES_MOCK,
  BenefitsSection,
  ContentBlock,
} from '@featurefm/design-system';
import { getPageData } from '../../api';

export interface BusinessProps {
  getStartedSection: FmGetStartedCtaProps;
}

export function Business({ getStartedSection }: BusinessProps) {
  return (
    <>
      <BusinessHero
        title="Scalable Marketing for your catalog."
        descr="Grow your business with our unified marketing stack, built for any scale and trusted by top music companies."
      >
        <FMButton variant="tertiary" size="lg" mobileWidth="full">
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

      <ContentBlock
        title="Need something that really scales? "
        text="Nearly half of the world’s largest music distribution companies have integrated Feature.fm’s enterprise solutions to power their marketing tech stack."
      />

      <BannerSection
        title="Fans are the lifeblood of your business."
        description="Building relationships with fans is the most important asset to grow an artist’s career."
        image={{
          img: '/images/business-fans/fans.png',
          imgMob: '/images/business-fans/fans-mobile.png',
        }}
      >
        <FMButton mobileWidth="full" size="xxl" variant="tertiary">
          Fan Base Relationship Management
        </FMButton>
      </BannerSection>

      {getStartedSection && (
        <FmGetStartedCta {...getStartedSection} variant="v2" />
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
