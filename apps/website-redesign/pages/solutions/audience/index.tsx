import {
  HeroSolutions,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  CheckIt,
  MoreSolutionCard,
  SolutionsSection,
  SolutionsSectionsProps,
} from '@featurefm/design-system';
import { getPageData } from '../../../api';
export interface SolutionAudienceProps {
  getStartedCTASection: FmGetStartedCtaProps;
  featuresSection: {
    features: SolutionsSectionsProps[];
  };
}

export function SolutionAudience({
  getStartedCTASection,
  featuresSection,
}: SolutionAudienceProps) {
  return (
    <>
      <HeroSolutions
        title="Keep your fans within reach."
        descr="Create links and landing pages that direct fans to listen to your music in the right service, save your music, pre-save, follow, subscribe, buy tickets, enter a contest or connect it all together in your Artist Bio Link."
      />

      {featuresSection?.features.map((solutionsSection, index) => {
        return (
          <SolutionsSection
            {...solutionsSection}
            key={index}
            version="v4"
            inverseLayout={!(index % 2)}
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
  const pageData: SolutionAudienceProps =
    await getPageData<SolutionAudienceProps>(
      'solutions-audience-pages',
      query || {},
      req,
      res,
      72,
      'en'
    );

  return { props: pageData };
}

export default SolutionAudience;
