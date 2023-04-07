import {
  BusinessHero,
  FMButton,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  KpiList,
  BenefitsSection,
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
      <BenefitsSection
        benefits={[
          {
            title: 'Automate your workflows',
            text: 'Focus on automating your marketing lifecycle from pre-release to post release, touring, fan contact capture and communications to be more efficient and reduce your manual workload.',
          },
          {
            title: 'Improve your conversions',
            text: 'Feature.fm landing pages are optimized for conversions with Pre-Saves that convert in each local time-zone, the fastest page load speeds in the industry, geo-aware behaviors and language localization.',
          },
          {
            title: 'Monetize with Affiliate Partners',
            text: 'Generate additional revenue from every campaign with affiliate marketing integrations like Apple, Amazon and Spotify.',
          },
        ]}
      />
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
