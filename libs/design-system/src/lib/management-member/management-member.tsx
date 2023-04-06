import Image from 'next/image';
import styles from './management-member.module.scss';
import { VariantProps, cva } from 'class-variance-authority';

const memberStyles = cva(styles['management_member'], {
  variants: {
    variant: {
      secondary: styles['management_member--secondary'],
      tertiary: styles['management_member--tertiary'],
    },
    order: {
      reversed: styles['management_member--reversed'],
    },
  },
});

export type ManagementMemberProps = VariantProps<typeof memberStyles> & {
  title: string;
  text: string;
  avatarUrl: string;
  name: string;
  position: string;
};

// FIXME: Here we need to use their Image component for 2x format, etc.

export function ManagementMember({
  title,
  text,
  name,
  avatarUrl,
  position,
  variant,
  order,
}: ManagementMemberProps) {
  return (
    <div className={memberStyles({ variant, order })}>
      <div className={styles['management_member__image_w']}>
        <Image
          className={styles['management_member__image']}
          width="800"
          height="800"
          src={avatarUrl}
          alt={`${name} profile image`}
        />
      </div>
      <div className={styles['management_member__content']}>
        <div className={styles['management_member__title']}>{title}</div>
        <div className={styles['management_member__text']}>{text}</div>
        <div className={styles['management_member__info']}>
          <b className={styles['management_member__name']}>{name}</b>
          {position}
        </div>
        <div className={styles['management_member__decor']}>
          <svg
            id="a"
            data-name="Шар 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 226.8 180"
          >
            <path
              id="b"
              data-name="Shape"
              d="M0,116.03C0,156.79,26.35,180,55.85,180c26.98,0,49.57-22.58,49.57-49.55s-18.82-45.16-42.67-45.16c-5.02,0-10.67,.63-12.55,1.88,5.65-22.58,28.86-48.92,48.94-59.58L64.63,0C25.73,26.97,0,68.99,0,116.03Zm122.01,0c0,40.77,25.73,63.97,55.22,63.97,27.61,0,49.57-22.58,49.57-49.55s-18.82-45.16-42.04-45.16c-5.02,0-10.67,.63-12.55,1.88,5.02-22.58,28.86-48.92,48.94-59.58L186.01,0c-38.9,26.97-64,68.99-64,116.03Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ManagementMember;
