import {
  FmJoinTeamCta,
  FmJoinTeamCtaProps,
  FmTitle,
  HeroAbout,
  KpiItem,
  OurPartnersSection,
  OurPartnersSectionProps,
} from '@featurefm/design-system';
import { getPageData } from '../../api';
import { ManagementMemberSection } from '../../src/components/section/management-members-section';

type AboutUsProps = {
  joinTheTeamSection: FmJoinTeamCtaProps;
  ourPartnersSection: OurPartnersSectionProps;
};

export function AboutUs({
  joinTheTeamSection,
  ourPartnersSection,
}: AboutUsProps) {
  return (
    <>
      <HeroAbout>
        <HeroAbout.Title>
          <FmTitle variant="h3" color="secondary_purple">
            First let’s drop a few numbers
          </FmTitle>
        </HeroAbout.Title>
        <HeroAbout.List>
          <KpiItem
            number="140+"
            title="Important KPI"
            text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
          />
          <KpiItem
            number="250k"
            title="Important KPI"
            text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
            decor="v1"
          />
          <KpiItem
            number="30"
            title="Important KPI"
            text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
            decor="v2"
          />
          <KpiItem
            number="70%"
            title="Important KPI"
            text="Alii autem, quibus ego cum a natura incorrupte atque integre iudicante itaque earum."
            decor="v3"
          />
        </HeroAbout.List>
      </HeroAbout>
      <ManagementMemberSection />
      <OurPartnersSection
        title="Our partners"
        partners={ourPartnersSection?.partners}
      />
      <FmJoinTeamCta {...joinTheTeamSection} />
    </>
  );
}

export default AboutUs;

export async function getServerSideProps({ req, query, res }) {
  const pageData: AboutUsProps = await getPageData<AboutUsProps>(
    'global-about-us',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}
