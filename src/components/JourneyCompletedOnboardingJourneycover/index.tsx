import React from "react";

import { Button, Img, Text } from "components";

type JourneyCompletedOnboardingJourneycoverProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "usertitle"
  | "editCoverPhoto"
  | "username"
  | "sparkedby"
  | "usersparkone"
  | "usersparktwo"
  | "usersparkthree"
  | "usersparkfour"
  | "usersubtitle"
> &
  Partial<{
    usertitle: string;
    editCoverPhoto: string;
    username: string;
    sparkedby: string;
    usersparkone: string;
    usersparktwo: string;
    usersparkthree: string;
    usersparkfour: string;
    usersubtitle: string;
  }>;

const JourneyCompletedOnboardingJourneycover: React.FC<
  JourneyCompletedOnboardingJourneycoverProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cover.png')" }}
      >
        <div className="flex flex-col items-start justify-start mb-[3px] w-[98%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
            <div className="h-[70px] md:h-[81px] sm:mt-0 mt-[11px] relative w-[35%] sm:w-full">
              <div className="absolute bg-white-A700 bottom-[11%] flex flex-col h-[17px] items-start justify-start p-0.5 right-[18%] rounded-lg w-[17px]">
                <Img
                  className="h-[11px] w-[11px]"
                  src="images/img_4filledpen.svg"
                  alt="4filledpen"
                />
              </div>
              <Text
                className="absolute h-full inset-[0] justify-center leading-[35.00px] m-auto md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-full"
                size="txtSanchezRegular26"
              >
                {props?.usertitle}
              </Text>
            </div>
            <Button
              className="bg-black-900_7f cursor-pointer flex items-center justify-center mb-[57px] min-w-[127px] px-2.5 py-1 rounded-md"
              leftIcon={
                <Img
                  className="mb-0.5 mr-[5px]"
                  src="images/img_4_filled_camera.svg"
                  alt="4 - Filled / camera"
                />
              }
            >
              <div className="font-circularxx leading-[normal] text-left text-white-A700 text-xs">
                {props?.editCoverPhoto}
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-[11px] items-center justify-start md:ml-[0] ml-[852px] mt-[23px] w-[13%] md:w-full">
            <div className="flex flex-col h-[75px] items-center justify-start p-0.5 w-[75px]">
              <Img
                className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                src="images/img_profilephoto.png"
                alt="profilephoto_One"
              />
            </div>
            <Text
              className="text-center text-lg text-shadow-ts text-white-A700"
              size="txtSanchezRegular18"
            >
              {props?.username}
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[18px] w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start mb-3 w-[33%] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start w-[33%] md:w-full">
                  <Text
                    className="text-center text-shadow-ts text-sm text-white-A700 uppercase"
                    size="txtCircularXXBook14"
                  >
                    {props?.sparkedby}
                  </Text>
                  <div className="bg-white-A700 flex flex-col h-[17px] items-start justify-start p-0.5 rounded-lg w-[17px]">
                    <Img
                      className="h-[11px] w-[11px]"
                      src="images/img_4filledpen.svg"
                      alt="4filledpen_One"
                    />
                  </div>
                </div>
                <Text
                  className="bg-white-A700_b2 justify-center mt-[11px] pt-1 px-1.5 rounded text-[13px] text-black-900 w-auto"
                  size="txtCircularXXRegular13"
                >
                  {props?.usersparkone}
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-between mt-1.5 w-full">
                  <Text
                    className="bg-white-A700_b2 justify-center pt-1 px-1.5 rounded text-[13px] text-black-900 w-auto"
                    size="txtCircularXXRegular13"
                  >
                    {props?.usersparktwo}
                  </Text>
                  <Text
                    className="bg-white-A700_b2 justify-center pt-1 px-1.5 rounded text-[13px] text-black-900 w-auto"
                    size="txtCircularXXRegular13"
                  >
                    {props?.usersparkthree}
                  </Text>
                  <Text
                    className="bg-white-A700_b2 justify-center px-1.5 py-0.5 rounded text-[13px] text-black-900 w-auto"
                    size="txtCircularXXRegular13"
                  >
                    {props?.usersparkfour}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row items-center justify-evenly sm:mt-0 mt-[66px] w-[21%] sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_user_white_a700.svg"
                alt="user_One"
              />
              <Text
                className="text-shadow-ts text-white-A700 text-xs"
                size="txtCircularXXRegular12WhiteA700"
              >
                {props?.usersubtitle}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

JourneyCompletedOnboardingJourneycover.defaultProps = {
  usertitle: "Unleashing my Inner Artist and Journey Forward",
  editCoverPhoto: "Edit cover photo",
  username: "Scarlett Chang",
  sparkedby: "Sparked by",
  usersparkone: "A deepening sense of spirituality and wanting more",
  usersparktwo: "Humanity",
  usersparkthree: "Feeling my light again in the world",
  usersparkfour: "Love",
  usersubtitle: "Sharing to Reimagine Community",
};

export default JourneyCompletedOnboardingJourneycover;
