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

export function SolutionAudience() {
  return (
    <>
      <HeroSolutions
        title="Keep your fans within reach."
        descr="Create links and landing pages that direct fans to listen to your music in the right service, save your music, pre-save, follow, subscribe, buy tickets, enter a contest or connect it all together in your Artist Bio Link."
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

export default SolutionAudience;
