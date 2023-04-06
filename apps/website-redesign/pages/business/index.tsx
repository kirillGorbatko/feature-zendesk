import {
  BusinessHero,
  FMButton,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  Distributors,
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
      <Distributors label="Trusted by the industry’s top labels, managers and distributors" />
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
