import React from "react";

import { Button, Img, Input, Text } from "components";
import JourneyCompletedOnboardingAboutjourney from "components/JourneyCompletedOnboardingAboutjourney";
import JourneyCompletedOnboardingColumnprofilephoto from "components/JourneyCompletedOnboardingColumnprofilephoto";
import JourneyCompletedOnboardingFooter from "components/JourneyCompletedOnboardingFooter";
import JourneyCompletedOnboardingJourneycover from "components/JourneyCompletedOnboardingJourneycover";

import { CloseSVG } from "../../assets/images";

const JourneycompletedonboardingPage: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-lime-50 flex flex-col font-sanchez items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[657px] md:px-5 relative w-full">
            <header className="flex md:flex-col font-circularxx md:gap-5 items-center justify-center mb-[-5px] mx-auto w-full z-[1]">
              <div className="bg-gray-900 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start mb-[5px] p-3 w-full">
                <Img
                  className="md:flex-1 h-[33px] sm:h-auto md:ml-[0] ml-[13px] md:mt-0 mt-[7px] object-cover w-[11%] md:w-full"
                  src="images/img_reimaginelogo6.png"
                  alt="reimaginelogoSix"
                />
                <Input
                  name="search"
                  placeholder="Search Reimagine"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-800 sm:pr-5 text-base text-gray-800 text-left w-full"
                  wrapClassName="bg-white-A700_e5 flex md:flex-1 md:ml-[0] ml-[31px] pl-[9px] pr-[35px] py-[9px] rounded-[21px] w-[23%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-1.5 my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#4f4f4f"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setSearchvalue("")}
                      style={{
                        visibility:
                          searchvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                ></Input>
                <Img
                  className="h-6 md:ml-[0] ml-[724px] md:mt-0 mt-[9px] w-6"
                  src="images/img_home.svg"
                  alt="home_One"
                />
                <Img
                  className="h-6 md:ml-[0] ml-[19px] md:mt-0 mt-[9px] w-6"
                  src="images/img_menu.svg"
                  alt="menu_One"
                />
                <div className="md:h-6 h-8 md:ml-[0] ml-[19px] relative w-[3%] md:w-full">
                  <Img
                    className="absolute bottom-[0] h-6 left-[0] w-6"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red-A200 flex h-[18px] items-center justify-center right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-[18px]"
                    size="txtCircularXXBook12"
                  >
                    65
                  </Text>
                </div>
                <Img
                  className="h-[42px] md:h-auto md:ml-[0] ml-[13px] rounded-[50%] w-[42px]"
                  src="images/img_profilephoto_42x42.png"
                  alt="profilephoto_Two"
                />
              </div>
              <Text
                className="bg-gray-800_f2 h-3.5 justify-center md:ml-[0] ml-[1230px] mr-[158px] md:mt-0 mt-[57px] pt-1 px-[7px] rounded-[7px] text-gray-50 text-shadow-ts1 text-sm w-[52px]"
                size="txtCircularXXRegular14"
              >
                Home
              </Text>
            </header>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[591px] items-start justify-start mt-auto mx-auto pb-[25px] sm:px-5 px-[25px] w-full"
              style={{ backgroundImage: "url('images/img_journeycover.png')" }}
            >
              <div className="flex flex-col gap-5 justify-start mb-[15px] w-[89%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <JourneyCompletedOnboardingColumnprofilephoto className="flex md:flex-1 flex-col gap-[25px] items-center justify-start md:mt-0 mt-[33px] w-[2%] md:w-full" />
                  <JourneyCompletedOnboardingJourneycover
                    className="bg-cover bg-gradient  bg-no-repeat flex md:flex-1 flex-col h-[348px] items-center justify-start p-3 rounded-bl-md rounded-br-md w-[87%] md:w-full"
                    style={{ backgroundImage: "url('images/img_cover.png')" }}
                  />
                </div>
                <JourneyCompletedOnboardingAboutjourney className="flex md:flex-col flex-row font-circularxx md:gap-10 gap-[81px] items-start justify-start md:ml-[0] ml-[269px] w-[76%] md:w-full" />
              </div>
            </div>
          </div>
          <Text
            className="mt-[46px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
            size="txtSanchezRegular24"
          >
            You’re ready to add your first entry!
          </Text>
          <div className="h-[273px] md:h-[323px] mt-[50px] md:px-5 relative w-[34%] sm:w-full">
            <Img
              className="h-[273px] m-auto object-cover w-full"
              src="images/img_screenshot20230427.png"
              alt="screenshot20230"
            />
            <Img
              className="absolute h-[60px] inset-[0] justify-center m-auto w-[60px]"
              src="images/img_play.svg"
              alt="play"
            />
          </div>
          <div className="flex flex-row font-circularxx gap-2.5 items-center justify-center mt-11 md:px-5 w-1/5 md:w-full">
            <Button className="bg-white-A700_99 border border-gray-900_4c border-solid cursor-pointer font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-gray-900_01 w-[132px]">
              Explore feed
            </Button>
            <Button className="bg-blue-900 cursor-pointer font-medium leading-[normal] min-w-[132px] py-[9px] rounded-lg text-base text-center text-white-A700">
              Add entry
            </Button>
          </div>
          <JourneyCompletedOnboardingFooter
            className="bg-gray-900 flex flex-col font-circularstd items-center justify-start mt-[414px] p-[46px] md:px-10 sm:px-5 w-full"
            p2023reimagine={
              <Text className="mt-[35px] text-[15px] text-gray-50">
                <span className="text-gray-50 font-circularxx text-left font-normal">
                  ©
                </span>
                <span className="text-gray-50 font-circularxx text-left font-normal">
                  {" "}
                  2023 Reimagine
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default JourneycompletedonboardingPage;
