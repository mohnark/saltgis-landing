"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 overflow-hidden border-t border-stroke/60 bg-white pt-16 dark:border-stroke-dark/60 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/LogoRectangleClipped.png"
                    alt="SaltGIS Logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                  SaltGIS develops innovative software that transforms complex spatial data into clear, actionable intelligence. 
                  Our mission is to equip organizations with tools that make land, infrastructure, and resource management smarter, faster, and more precise.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.linkedin.com/company/saltgis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Company
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Solutions
                </h2>
                <ul>
                  <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Web GIS Applications
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Automation
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/products"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      GeoFlow
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Training
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-body-color-dark">
              © {new Date().getFullYear()} SaltGIS. All rights reserved.
            </p>
            <p className="mt-1 text-center text-sm text-body-color/70 dark:text-body-color-dark/70">
              SaltGIS OÜ · Registered in Estonia
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1] opacity-30">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g stroke="#118C4F" strokeWidth="1">
              <circle cx="160" cy="100" r="30" opacity=".8" />
              <circle cx="160" cy="100" r="60" opacity=".55" />
              <circle cx="160" cy="100" r="90" opacity=".3" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1] opacity-30">
          <svg
            width="240"
            height="160"
            viewBox="0 0 240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g stroke="#118C4F" strokeWidth="1">
              <path d="M0 160C50 120 110 105 160 115s80 25 80 25" opacity=".5" />
              <path d="M0 130c45-32 100-44 145-35s95 30 95 30" opacity=".35" />
              <path d="M0 100C40 75 95 65 135 73s105 32 105 32" opacity=".25" />
            </g>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
