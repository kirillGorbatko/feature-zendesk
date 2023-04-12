import {
  CareerHero,
  JoinSection,
  QualitiesSection,
} from '@featurefm/design-system';

export function Careers() {
  return (
    <>
      <CareerHero
        title={{
          desktop: 'Join Our team today and get your own pet bear',
          mobile:
            'Want to get your own pet bear and learn to shoot lazers from your eyeballs?',
        }}
        description={{
          desktop:
            'Of course you do! Who wouldn’t?.. <br/> All that and more for those who got what it takes!',
        }}
        picture={{
          img: '/images/careers/hero.png',
          alt: 'Our team',
        }}
      />

      <QualitiesSection
        title={{ desktop: 'We are looking for…' }}
        qualities={[
          {
            title: 'Hard workers',
            description:
              'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
          },
          {
            title: 'Risk takers',
            description:
              'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
          },
          {
            title: 'Mind readers',
            description:
              'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
          },
          {
            title: 'Grave diggers',
            description:
              'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
          },
          {
            title: 'Mother f***ers',
            description:
              'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
          },
        ]}
      />

      <JoinSection
        title="Ready to join us?"
        description="We are always open to connecting with people who believe in our mission and eager to join the team."
        ctaButton={{
          link: 'careers@feature.fm',
          text: 'Reach out to us at',
        }}
      />
    </>
  );
}

export default Careers;
