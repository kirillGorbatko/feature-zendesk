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
export interface SolutionLinksProps {
  featuresSection: {
    features: SolutionsSectionsProps[];
  };
  getStartedCTASection: FmGetStartedCtaProps;
}

export function SolutionLinks({
  getStartedCTASection,
  featuresSection,
}: SolutionLinksProps) {
  return (
    <>
      <HeroSolutions
        title="Your music. Your fans. Your data."
        descr="Become a better music marketer by understanding fan behaviors and preferences across all of your marketing activities. Measure fan interactions, from visits to conversions, and break out data for deeper analysis."
      />

      <div className="solutions_title">
        <Container>
          <div className="solutions_title__in">
            <FmTitle variant="h5">
              What insights can you gain with Feature.Fm?
            </FmTitle>
          </div>
        </Container>
      </div>
      {featuresSection?.features?.map((solutionsSection, index) => {
        return (
          <SolutionsSection
            {...solutionsSection}
            key={index}
            version="v2"
            inverseLayout={Boolean(index % 2)}
          />
        );
      })}

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
  const pageData: SolutionLinksProps = await getPageData<SolutionLinksProps>(
    'solutions-links-pages',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default SolutionLinks;
