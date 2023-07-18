import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import JourneyOnboardingPrivacyUserHasNoGroupsRowuser from "components/JourneyOnboardingPrivacyUserHasNoGroupsRowuser";

const JourneyonboardingPrivacyUserhasnoGroupsModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[56%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[800px] md:h-auto items-end justify-start p-[9px] md:px-5 rounded-[20px] w-[800px] md:w-full">
          <div className="flex flex-col gap-[27px] justify-start mb-[51px] mr-0.5 w-[91%] md:w-full">
            <div className="flex flex-row items-end justify-between md:ml-[0] ml-[214px] w-[70%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-0.5 mt-[7px]">
                <Text
                  className="text-blue-900_cc text-xs tracking-[0.60px] uppercase"
                  size="txtMontserratRegular12"
                >
                  Design your journey cover
                </Text>
              </div>
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <div className="flex flex-col font-circularxx h-[640px] md:h-auto items-center justify-start mr-[69px] p-[42px] md:px-10 sm:px-5 w-[640px] md:w-full">
              <div className="flex flex-col items-center justify-start mt-[31px]">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
                  size="txtCircularXXMedium24"
                >
                  Last step! Set the privacy settings for your journey.
                </Text>
              </div>
              <Img
                className="h-[30px] md:h-auto mt-[19px] object-cover w-[33%] sm:w-full"
                src="images/img_platformlinedivider.png"
                alt="platformlinediv"
              />
              <Text
                className="leading-[24.00px] mt-[18px] text-gray-900_01 text-lg w-[94%] sm:w-full"
                size="txtCircularXXRegular18"
              >
                Share what you are comfortable with. You can make your journeys
                private, but there is more benefit when we share our stories.
                This will be the default audience. However, you can have an
                individual privacy setting for each entry.
              </Text>
              <div className="flex flex-col items-center justify-start mb-[53px] mt-[94px] w-[70%] md:w-full">
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                    <JourneyOnboardingPrivacyUserHasNoGroupsRowuser className="flex flex-row gap-[13px] items-center justify-start sm:pr-5 pr-[21px] w-[78%]" />
                    <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                      <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                        <Button className="flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                          <Img
                            className="h-6"
                            src="images/img_icon.svg"
                            alt="icon"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-1.5 items-center justify-between my-0 w-full">
                    <div className="flex sm:flex-1 flex-row gap-[13px] items-center justify-start md:pr-10 sm:pr-5 pr-[86px] w-[87%] sm:w-full">
                      <Button className="bg-blue_gray-100 flex h-[50px] items-center justify-center p-3 rounded-[50%] w-[50px]">
                        <Img src="images/img_location.svg" alt="location" />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtCircularXXMedium16"
                        >
                          Reimagine community
                        </Text>
                        <Text
                          className="text-gray-800 text-xs"
                          size="txtCircularXXRegular12"
                        >
                          Anyone on the Reimagine platform
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                      <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                        <Button className="flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                          <Img
                            className="h-6"
                            src="images/img_icon_blue_900.svg"
                            alt="icon"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-1.5 items-center justify-between my-0 w-full">
                    <div className="flex sm:flex-1 flex-row gap-[13px] items-center justify-start md:pr-10 sm:pr-5 pr-[209px] w-[87%] sm:w-full">
                      <Button className="bg-blue_gray-100 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                        <Img
                          className="h-6"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      </Button>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtCircularXXMedium16"
                        >
                          Only me
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-12 md:h-auto items-center justify-center w-12">
                      <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                        <Button className="flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                          <Img
                            className="h-6"
                            src="images/img_icon.svg"
                            alt="icon"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[183px] w-[39%] md:w-full">
              <Button
                className="common-pointer bg-white-A700_99 border border-gray-900_4c border-solid cursor-pointer font-circularxx font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-gray-900_01 w-[132px]"
                onClick={() => navigate("/journeyonboardingtitle")}
              >
                Previous
              </Button>
              <Button
                className="common-pointer bg-blue-900 cursor-pointer font-circularstd font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-white-A700 w-[132px]"
                onClick={() => navigate("/journeycompletedonboarding")}
              >
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default JourneyonboardingPrivacyUserhasnoGroupsModal;
