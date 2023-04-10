import styles from './partners-logos.module.scss';
import {
  PartnersLogosItem,
  PartnersLogosItemProps,
} from './ui/partners-logos-item';
import { PartnersLogosList } from './ui/partners-logos-list';

export type PartnersLogosProps = {
  data: PartnersLogosItemProps[];
};

export function PartnersLogos({ data, ...rest }: PartnersLogosProps) {
  if (!data || !data.length) return null;

  const styleAttr = { '--logos-count': data.length } as React.CSSProperties;

  return (
    <div className={styles['partners_logos']} style={styleAttr}>
      <div className={styles['partners_logos__track']} {...rest}>
        {Array.from(Array(4)).map((_, index, arr) => {
          return (
            <PartnersLogosList key={index}>
              {data.map(({ src, alt }, jndex) => (
                <PartnersLogosItem
                  src={src}
                  alt={alt}
                  loading="lazy"
                  offsetMod={jndex + 1 <= data.length / 2}
                  key={jndex + arr.length * (index + 1)}
                />
              ))}
            </PartnersLogosList>
          );
        })}
      </div>
    </div>
  );
}

export type { PartnersLogosItemProps };
