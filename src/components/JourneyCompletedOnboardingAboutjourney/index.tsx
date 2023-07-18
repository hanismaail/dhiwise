import React from "react";

import { Img, Text } from "components";

type JourneyCompletedOnboardingAboutjourneyProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "journeytext" | "journeydescription" | "honortext"
> &
  Partial<{
    journeytext: string;
    journeydescription: string;
    honortext: JSX.Element | string;
  }>;

const JourneyCompletedOnboardingAboutjourney: React.FC<
  JourneyCompletedOnboardingAboutjourneyProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[35px] w-[68%] md:w-full">
          <div className="flex flex-col gap-[15px] items-start justify-start w-full">
            <div className="flex flex-row items-start justify-start w-[32%] md:w-full">
              <Text
                className="text-gray-900_01 text-xl"
                size="txtSanchezRegular20"
              >
                {props?.journeytext}
              </Text>
              <div className="bg-white-A700 flex flex-col h-[17px] items-start justify-start mb-1.5 mt-0.5 p-0.5 rounded-lg w-[17px]">
                <Img
                  className="h-[11px] w-[11px]"
                  src="images/img_4filledpen.svg"
                  alt="4filledpen_Two"
                />
              </div>
            </div>
            <Text
              className="leading-[30.00px] text-gray-900_01 text-lg w-full"
              size="txtCircularXXRegular18"
            >
              {props?.journeydescription}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[7px] items-center justify-start w-[17%] md:w-full">
          <Text
            className="leading-[17.00px] text-center text-gray-900_01 text-sm w-full"
            size="txtCircularXXRegular14Gray90001"
          >
            {props?.honortext}
          </Text>
          <div className="flex flex-col h-[127px] items-center justify-start w-[127px]">
            <Img
              className="h-[127px] md:h-auto object-cover rounded-bl rounded-br w-[127px]"
              src="images/img_rectangle3230.png"
              alt="rectangle3230"
            />
          </div>
        </div>
      </div>
    </>
  );
};

JourneyCompletedOnboardingAboutjourney.defaultProps = {
  journeytext: "About this journey",
  journeydescription:
    "I didn’t realize how much I have grown since losing my mother until I gave birth to my first child. My once-dormant writing gifts have been revived and I’m ready to unleash Scarlett 2.0 into the world.",
  honortext: (
    <>
      In honor of
      <br />
      my daughter, May and my son, Jonathan
    </>
  ),
};

export default JourneyCompletedOnboardingAboutjourney;
