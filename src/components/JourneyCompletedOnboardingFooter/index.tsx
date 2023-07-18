import React from "react";

import { Img, Text } from "components";

type JourneyCompletedOnboardingFooterProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "about" | "language" | "privacypolicy" | "termsofservice" | "p2023reimagine"
> &
  Partial<{
    about: string;
    language: string;
    privacypolicy: string;
    termsofservice: string;
    p2023reimagine: JSX.Element | string;
  }>;

const JourneyCompletedOnboardingFooter: React.FC<
  JourneyCompletedOnboardingFooterProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mb-0.5 w-[46%] md:w-full">
          <Img
            className="h-[41px] md:h-auto object-cover w-[30%] sm:w-full"
            src="images/img_reimaginelogo3.png"
            alt="reimaginelogoThree"
          />
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-start justify-start mt-[31px] w-auto md:w-full">
            <Text
              className="text-gray-50 text-xl w-auto"
              size="txtCircularXXRegular20"
            >
              {props?.about}
            </Text>
            <Text
              className="text-gray-50 text-xl w-auto"
              size="txtCircularXXRegular20"
            >
              {props?.language}
            </Text>
            <Text
              className="text-gray-50 text-xl w-auto"
              size="txtCircularXXRegular20"
            >
              {props?.privacypolicy}
            </Text>
            <Text
              className="text-gray-50 text-xl w-auto"
              size="txtCircularXXRegular20"
            >
              {props?.termsofservice}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center mt-[34px] w-[24%] md:w-full">
            <div className="flex flex-col h-6 items-end justify-start p-[3px] w-6">
              <Img
                className="h-[18px] mr-1"
                src="images/img_facebook.svg"
                alt="facebook"
              />
            </div>
            <Img className="h-6 w-6" src="images/img_camera.svg" alt="camera" />
            <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
              <Img
                className="h-[15px]"
                src="images/img_twitter.svg"
                alt="twitter"
              />
            </div>
            <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
              <Img
                className="h-[13px] my-[3px]"
                src="images/img_youtube.svg"
                alt="youtube"
              />
            </div>
          </div>
          {props?.p2023reimagine}
        </div>
      </div>
    </>
  );
};

JourneyCompletedOnboardingFooter.defaultProps = {
  about: "About",
  language: "Contact ",
  privacypolicy: "Privacy Policy",
  termsofservice: "Terms of Service",
  p2023reimagine: (
    <Text
      className="mt-[35px] text-[15px] text-gray-50"
      size="txtCircularStdBook15Gray50"
    >
      <span className="text-gray-50 font-circularxx text-left font-normal">
        ©
      </span>
      <span className="text-gray-50 font-circularxx text-left font-normal">
        {" "}
        2023 Reimagine
      </span>
    </Text>
  ),
};

export default JourneyCompletedOnboardingFooter;
