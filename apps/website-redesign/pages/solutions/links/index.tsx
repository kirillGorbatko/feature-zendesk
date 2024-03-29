import {
  HeroSolutions,
  FmGetStartedCta,
  FmGetStartedCtaProps,
  FmSolutionsBenefitSection,
  FmSolutionsBenefit,
  FmSolutionsBenefitProps,
  IconsSection,
  CheckIt,
  SolutionsSection,
  SolutionsSectionsProps,
  MoreSolutionCard,
  FmSolutionsBenefitSectionProps,
} from '@featurefm/design-system';
import { getPageData } from '../../../api';

export interface SolutionLinksProps {
  allLinksComeWithMore: FmSolutionsBenefitSectionProps & {
    features: FmSolutionsBenefitProps[];
  };
  landingPagesSection: {
    features: SolutionsSectionsProps[];
  };
  getStartedCTASection: FmGetStartedCtaProps;
}

export function SolutionLinks({
  allLinksComeWithMore,
  getStartedCTASection,
  landingPagesSection,
}: SolutionLinksProps) {
  return (
    <>
      <HeroSolutions
        title="Bring fans into your world."
        descr="Create links and landing pages that direct fans to listen to your music in the right service, save your music, pre-save, follow, subscribe, buy tickets, enter a contest or connect it all together in your Artist Bio Link."
      />

      <IconsSection label="Integrated with hundreds of digital music services" />

      {landingPagesSection?.features?.map((solutionsSection, index) => (
        <SolutionsSection
          {...solutionsSection}
          key={index}
          inverseLayout={solutionsSection.isInverse}
        />
      ))}

      {allLinksComeWithMore && (
        <FmSolutionsBenefitSection title={allLinksComeWithMore.title}>
          {allLinksComeWithMore.features?.length > 0 && (
            <FmSolutionsBenefitSection.List>
              {allLinksComeWithMore.features.map(
                ({ title, description }, index) => {
                  let variant: FmSolutionsBenefitProps['variant'] = 'red';

                  switch (index % 3) {
                    case 0:
                      variant = 'red';
                      break;
                    case 1:
                      variant = 'turquoise';
                      break;
                    case 2:
                      variant = 'purple';
                      break;
                    default:
                      break;
                  }

                  return (
                    <FmSolutionsBenefitSection.Item key={index}>
                      <FmSolutionsBenefit
                        title={title}
                        description={description}
                        variant={variant}
                      />
                    </FmSolutionsBenefitSection.Item>
                  );
                }
              )}
            </FmSolutionsBenefitSection.List>
          )}
        </FmSolutionsBenefitSection>
      )}
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
