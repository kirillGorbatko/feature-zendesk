import React, { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import classnames from 'classnames';
import {
  Logo,
  SolutionMenuItem,
  Button,
  HeaderButtonItem,
  HeaderMenuItem,
} from '@featurefm/design-system';
import { XIcon } from '@heroicons/react/outline';

export interface SolutionItemProps {
  name: string;
  description: string;
  href: string;
  img: string;
  icon: object;
}

export interface HeaderProps {
  solutions?: SolutionItemProps[];
  darkMode?: boolean;
  autoHide?: boolean;
}

Header.defaultProps = {
  darkMode: true,
  autoHide: true,
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export function Header(props: HeaderProps) {
  const scrollDirection = useScrollDirection();
  const [bodyDarkModeEnabled, setDarkModeEnabled] = useState<boolean>(
    props.darkMode || false
  );
  const [solutionIsOpen, setSolutionIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const doc = document && document.querySelector('body');
    if (solutionIsOpen) {
      doc?.classList.add('disable-scroll');
    } else {
      doc?.classList.remove('disable-scroll');
    }
  }, [solutionIsOpen]);

  useEffect(() => {
    const onScroll = () => {
      setDarkModeEnabled(document && document.body.className.includes('dark'));
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={classnames('sticky z-[1000000] transition-all duration-700', {
        dark: props.darkMode,
        'top-0': scrollDirection === 'up' || props.autoHide === false,
        '-top-24': scrollDirection === 'down' && props.autoHide === true,
      })}
    >
      <Popover className="relative bg-background dark:bg-foreground text-foreground dark:text-background border-b border-line2 dark:border-b-0">
        <div className="relative flex justify-between items-center tablet:h-[90px] tablet:space-x-8 max-w-[1200px] m-auto py-[22px] tablet:py-0 desktop-xl:max-w-[1300px] px-[30px] desktop:px-0">
          <Logo inverted={props.darkMode || bodyDarkModeEnabled} />
          <div className="tablet:hidden">
            <Popover.Button className="p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <div className="h-6 w-6 flex items-center">
                <svg
                  width="27px"
                  height="13px"
                  viewBox="0 0 27 13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="square"
                  >
                    <g
                      id="Mobile-Nav/white"
                      transform="translate(-334.000000, -33.000000)"
                      stroke={
                        props.darkMode || bodyDarkModeEnabled
                          ? 'white'
                          : 'black'
                      }
                      strokeWidth="2"
                    >
                      <g
                        id="Group-10"
                        transform="translate(30.000000, 22.000000)"
                      >
                        <g
                          id="Group"
                          transform="translate(305.000000, 12.000000)"
                        >
                          <line
                            x1="1.73472348e-16"
                            y1="0.5"
                            x2="25"
                            y2="0.5"
                            id="Line-7"
                          ></line>
                          <line
                            x1="1.73472348e-16"
                            y1="10.5"
                            x2="25"
                            y2="10.5"
                            id="Line-7-Copy"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Popover.Button>
          </div>
          {solutionIsOpen && (
            <div
              className="fixed top-[90px] left-0 w-screen h-screen z-10"
              style={{
                background: props.darkMode
                  ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 100%)'
                  : 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.3) 100%)',
                margin: 0,
              }}
            />
          )}
          <div className="hidden tablet:flex w-full tablet:items-center tablet:justify-between">
            <Popover.Group as="nav" className="flex space-x-8">
              <Popover>
                {({ open }) => {
                  setSolutionIsOpen(open);
                  return (
                    <>
                      <Popover.Button className="focus:outline-none">
                        <HeaderMenuItem text="Solutions" />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          className="absolute left-0 shadow-lg z-40 mt-8 transform text-foreground"
                          style={{
                            boxShadow: '10px 30px 50px rgba(19,25,62, 0.15',
                          }}
                        >
                          <div className="grid gap-8 p-10 grid-cols-3 bg-background z-40">
                            {(props.solutions || []).map((item, index) => (
                              <div key={index}>
                                <SolutionMenuItem
                                  name={item.name}
                                  href={item.href}
                                  img={item.img}
                                  description={item.description}
                                />
                              </div>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  );
                }}
              </Popover>
              <HeaderMenuItem href="/pricing/artist/" text="Pricing" />
              <HeaderMenuItem href="/business/" text="Professionals" />
              <HeaderMenuItem href="/about-us/" text="About Us" />
              <HeaderMenuItem href="https://blog.feature.fm/" text="Blog" />
              <HeaderMenuItem
                href="https://ffm.to/helpcenter.owe/"
                text="Help"
              />
            </Popover.Group>
            <div className="flex items-center">
              <HeaderMenuItem
                href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}/login/`}
                text="Login"
              />
              <HeaderButtonItem
                href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}/signup/`}
                text="Start Now"
              />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed top-0 z-40 transition transform origin-top-right z-10 tablet:hidden h-screen overflow-scroll"
          >
            <div className="text-background bg-foreground">
              <div className="flex items-center justify-between h-[90px] px-4">
                <Logo inverted />
                <Popover.Button className="bg-foreground inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="px-8">
                <div className="my-10 text-xl">Solutions</div>
                <nav className="grid gap-6">
                  {(props.solutions || []).map((item, index) => (
                    <SolutionMenuItem
                      key={index}
                      name={item.name}
                      href={item.href}
                      img={item.img}
                      description={item.description}
                    />
                  ))}
                </nav>
                <div className="grid grid-cols-1 gap-8 mt-16 dark">
                  <HeaderMenuItem href="/pricing/artist/" text="Pricing" />
                  <HeaderMenuItem href="/business/" text="Professionals" />
                  <HeaderMenuItem href="/about-us/" text="About Us" />
                  <HeaderMenuItem href="https://blog.feature.fm/" text="Blog" />
                  <HeaderMenuItem
                    href="https://ffm.to/helpcenter.owe/"
                    text="Help"
                  />
                </div>

                <div className="py-10 mt-10 border-t border-background">
                  <Button
                    type="secondary"
                    size="large"
                    text="Start for Free"
                    className="w-full"
                    link={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}/signup/`}
                  />
                  <div className="mt-8 w-fit m-auto font-medium text-lg">
                    <a href={`${process.env.NEXT_PUBLIC_LOGIN_DOMAIN}/login/`}>
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default Header;
