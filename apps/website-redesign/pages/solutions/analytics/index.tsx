import {
  HeroSolutions,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  CheckIt,
  MoreSolutionCard,
  SolutionsSectionsProps,
  SolutionsSection,
  FmTitle,
  Container,
} from '@featurefm/design-system';
import { getPageData } from '../../../api';

export interface SolutionAnalyticsProps {
  featuresSection: {
    features: SolutionsSectionsProps[];
  };
  getStartedCTASection: FmGetStartedCtaProps;
}

export function SolutionAnalytics({
  getStartedCTASection,
  featuresSection,
}: SolutionAnalyticsProps) {
  return (
    <>
      <HeroSolutions
        title="Your music. Your fans. Your data."
        descr="Become a better music marketer by understanding fan behaviors and preferences across all of your marketing activities. Measure fan interactions, from visits to conversions, and break out data for deeper analysis."
      />
      <div className="solutions_wrap">
        <div className="solutions_title">
          <Container>
            <div className="solutions_title__in">
              <FmTitle variant="h5">
                What insights can you gain with Feature.Fm?
              </FmTitle>
            </div>
          </Container>
        </div>
        {featuresSection?.features
          ?.slice(0, -2)
          .map((solutionsSection, index) => {
            return (
              <SolutionsSection
                {...solutionsSection}
                key={index}
                version="v2"
                inverseLayout={Boolean(index % 2)}
              />
            );
          })}
      </div>

      <div className="solutions_wrap solutions_wrap--bg_mod solutions_wrap--offset_mod">
        {featuresSection?.features?.slice(-2).map((solutionsSection, index) => {
          return (
            <SolutionsSection
              {...solutionsSection}
              key={index}
              version="v3"
              inverseLayout={!(index % 2)}
            />
          );
        })}
      </div>

      <CheckIt title="Two more things you should check out">
        <MoreSolutionCard
          icon="/images/solutions/analytics.png"
          title="Performance Analytics & Insights"
          text="Target your ads to highly segmented audiences based on fans who have engaged with your music and get guaranteed airplay to your target audience with Feature.fm’s exclusive, Sponsored Songs ad unit for music."
          link="Learn more"
        />
        <MoreSolutionCard
          icon="/images/solutions/audience.png"
          title="Audience Relationship Management"
          text="Manage your relationships with your fans like never before, collect fan contact info, get real-time insights and keep your fans notified about your latest drops."
          link="Learn more"
          variant="secondary"
        />
      </CheckIt>
      {getStartedCTASection && <FmGetStartedCta {...getStartedCTASection} />}
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  const pageData: SolutionAnalyticsProps =
    await getPageData<SolutionAnalyticsProps>(
      'solutions-analytics-pages',
      query || {},
      req,
      res,
      72,
      'en'
    );

  return { props: pageData };
}

export default SolutionAnalytics;
