import {
  HeroSolutions,
  FmGetStartedCta,
  CheckIt,
  MoreSolutionCard,
} from '@featurefm/design-system';

const getStartedSection = {
  title: 'Get started for free',
  descr:
    '<p>You can use Feature.fm for free or subscribe to one of our paid plans.</p><p>All paid plans come with a free trial of our Pro plan</p>',
  button: {
    title: 'Start now',
  },
};

export function SolutionLinks() {
  return (
    <>
      <HeroSolutions
        title="Your music. Your fans. Your data."
        descr="Become a better music marketer by understanding fan behaviors and preferences across all of your marketing activities. Measure fan interactions, from visits to conversions, and break out data for deeper analysis."
      />

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
      {getStartedSection && <FmGetStartedCta {...getStartedSection} />}
    </>
  );
}

export default SolutionLinks;
