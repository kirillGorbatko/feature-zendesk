/* eslint-disable-next-line */
import React from 'react';
import {
  Button,
  FooterTitle,
  FooterLink,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ViewPort,
} from '@featurefm/design-system';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <section className="dark:bg-foreground dark:text-background border-t border-line2 dark:border-t-0">
      <ViewPort>
        <div className="relative pt-[60px] tablet:pt-12 pb-[60px] tablet:pb-4">
          <div className="flex gap-y-12 m-auto flex-col desktop:flex-row desktop:gap-y-0">
            <div className="flex flex-col gap-y-6 desktop:w-4/12">
              <FooterTitle text="Solutions" />
              <div className="flex">
                <div className="flex flex-col gap-y-6 w-6/12">
                  <FooterLink
                    href="/solutions/links#type0"
                    text="Artist Bio Links"
                  />
                  <FooterLink
                    href="/solutions/links#type1"
                    text="Release Links"
                  />
                  <FooterLink
                    href="/solutions/links#type2"
                    text="Pre-Release Links"
                  />
                  <FooterLink href="#" text="Short Links" />
                </div>
                <div className="flex flex-col gap-y-6 w-6/12 desktop:w-5/12">
                  <FooterLink
                    href="/solutions/links#type3"
                    text="Tour & Event Links"
                  />
                  <FooterLink
                    href="/solutions/links#type5"
                    text="Contest & Unlock Pages"
                  />
                  <FooterLink
                    href="/solutions/links#type4"
                    text="Podcast Links"
                  />
                  <FooterLink
                    href="/solutions/audience"
                    text="Manage your fans"
                  />
                  <FooterLink
                    href="/solutions/analytics"
                    text="Analytics & Insights"
                  />
                </div>
              </div>
            </div>
            <div className="flex desktop:w-2/12">
              <div className="flex flex-col gap-y-6 w-6/12">
                <FooterTitle text="Company" />
                <FooterLink href="/about-us" text="About Us" />
                <FooterLink href="/careers" text="Careers" />
              </div>
              <div className="flex flex-col gap-y-6 w-6/12 tablet:hidden">
                <a href="/pricing/artist">
                  <FooterTitle text="Pricing" />
                </a>
                <a href="/business">
                  <FooterTitle text="Professionals1" />
                </a>
                <a href="https://ffm.to/helpcenter.owe">
                  <FooterTitle text="Help Center" />
                </a>
                <a href="https://blog.feature.fm/">
                  <FooterTitle text="Blog" />
                </a>
              </div>
            </div>
            <div className="hidden tablet:flex flex-col gap-y-6 desktop:w-2/12">
              <a href="/pricing/artist">
                <FooterTitle text="Pricing" />
              </a>
              <a href="/business">
                <FooterTitle text="Professionals" />
              </a>
              <a href="https://ffm.to/helpcenter.owe">
                <FooterTitle text="Help Center" />
              </a>
              <a href="https://blog.feature.fm/">
                <FooterTitle text="Blog" />
              </a>
            </div>
            <div className="flex flex-col tablet:gap-y-6 tablet:w-4/12 tablet:items-end">
              <div className="flex tablet:w-fit mt-10 tablet:mt-0 flex-col items-center">
                <a href="https://login.feature.fm/signup">
                  <Button
                    type="tertiary-inverted"
                    size="extra-large"
                    text="Get Started"
                    className=""
                  />
                </a>
                <div className="flex flex-row w-fit gap-x-5 mt-[60px] tablet:mt-10">
                  <a href="https://www.facebook.com/ffm.to/">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/feature.fm/">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/feature-fm">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="block">
              <div className="grid desktop:flex w-80 mx-auto desktop:w-full desktop:mx-0 text-center desktop:text-left grid-cols-2 gap-y-8 desktop:gap-x-6 desktop:gap-y-0 mt-[80px]">
                <FooterLink href="https://ffm.to/terms" text="Term of use" />
                <FooterLink
                  href="https://help.feature.fm/hc/en-us/articles/360042764451-Privacy-Policy"
                  text="Privacy Policy"
                />
                <FooterLink
                  href="https://help.feature.fm/hc/en-us/articles/360042764691-GDPR-Feature-fm"
                  text="GDPR & Feature.fm"
                />
                <div className="hidden desktop:block">
                  <FooterLink href="/" text="@Feature.fm 2023" />
                </div>
              </div>
              <div className="text-center my-8 desktop:hidden">
                <FooterLink href="/" text="@Feature.fm 2023" />
              </div>
            </div>
          </div>
        </div>
      </ViewPort>
    </section>
  );
}

export default Footer;
