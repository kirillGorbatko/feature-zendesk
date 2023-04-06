import React from 'react';

import styles from './management-members-section.module.scss';

import {
  Container,
  FmH2,
  ManagementMember,
  MembersList,
} from '@featurefm/design-system';

export function ManagementMemberSection() {
  return (
    <section className="section">
      <Container>
        <div className={styles.title}>
          <FmH2>From the horse’s mouth</FmH2>
        </div>
        <MembersList>
          <MembersList.Item>
            <ManagementMember
              variant="secondary"
              name="Lior Aharoni"
              position="Founder & CEO"
              title="Designed to help artists build careers"
              text="We founded Feaure.fm with a mission to provide any artist, no matter how early in their career, professional music marketing tools along with guidance and education to help more artists be able to make a living doing what they love."
              avatarUrl="https://res.cloudinary.com/feature-fm/image/fetch/f_auto/https://featurefm-payload-store.s3.us-west-2.amazonaws.com/liora@2x.png"
            />
          </MembersList.Item>
          <MembersList.Item>
            <ManagementMember
              name="Dan Sander"
              position="COO"
              title="We arew in the age of the artist"
              text="Today, there are more opportunities than ever before for artists to build a fanbase and generate revenue. With 60,000 tracks uploaded to Spotify every day, we are in the “age of the artist” and the role of technology is critical to scale with this explosion of music creators."
              avatarUrl="https://res.cloudinary.com/feature-fm/image/fetch/f_auto/https://featurefm-payload-store.s3.us-west-2.amazonaws.com/zohar@2x.png"
              order="reversed"
            />
          </MembersList.Item>
          <MembersList.Item>
            <ManagementMember
              name="Lior Aharoni"
              position="Founder & CEO"
              title="Artists are at the forefront of everything we do"
              text="We founded Feaure.fm with a mission to provide any artist, no matter how early in their career, professional music marketing tools along with guidance and education to help more artists be able to make a living doing what they love."
              avatarUrl="https://res.cloudinary.com/feature-fm/image/fetch/f_auto/https://featurefm-payload-store.s3.us-west-2.amazonaws.com/shapsa@2x.png"
              variant="tertiary"
            />
          </MembersList.Item>
        </MembersList>
      </Container>
    </section>
  );
}
