import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const JourneyonboardingSelectsparksModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[56%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[800px] md:h-auto items-center justify-start p-4 md:px-5 rounded-[20px] w-[800px] md:w-full">
          <div className="flex flex-col items-center justify-start mb-11 w-[84%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-blue-900_cc text-xs tracking-[0.60px] uppercase"
                size="txtMontserratRegular12"
              >
                Design your journey cover
              </Text>
            </div>
            <div className="flex flex-col font-circularxx items-center justify-start mt-[29px] py-0.5 w-full">
              <div className="flex flex-col justify-start mb-[145px] w-full">
                <div className="flex flex-col items-center justify-start ml-24 md:ml-[0]">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
                    size="txtCircularXXMedium24"
                  >
                    Now let’s add the Sparks of your journey.
                  </Text>
                </div>
                <Img
                  className="h-[30px] md:h-auto md:ml-[0] ml-[231px] mt-[19px] object-cover w-[28%] sm:w-full"
                  src="images/img_platformlinedivider.png"
                  alt="platformlinediv"
                />
                <Text
                  className="leading-[24.00px] md:ml-[0] ml-[60px] mt-[18px] text-gray-900_01 text-lg w-[82%] sm:w-full"
                  size="txtCircularXXRegular18"
                >
                  What’s your inspiration for being here? What is the hard thing
                  or things that you have faced or are currently facing that you
                  are looking to grow from? You may add up to four Sparks.
                </Text>
                <Input
                  name="frame19673"
                  placeholder="Type in your sparks here or select them below."
                  className="font-light leading-[normal] p-0 placeholder:text-gray-500 sm:pr-5 text-gray-500 text-left text-xl w-full"
                  wrapClassName="bg-gray-100 border border-black-900_33 border-solid mt-[21px] pb-[15px] pl-[11px] pr-[35px] pt-[18px] rounded-[5px] w-full"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[496px] mt-1.5 text-gray-800 text-right text-xs"
                  size="txtCircularXXLight12"
                >
                  45 character limit per Spark
                </Text>
                <div className="flex flex-row gap-[78px] items-center justify-center md:ml-[0] ml-[169px] mt-[49px] w-[48%] md:w-full">
                  <Text
                    className="text-blue-900 text-lg"
                    size="txtCircularXXBold18"
                  >
                    Top Sparks
                  </Text>
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtCircularXXBook18"
                  >
                    Featured Sparks
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[70px] mt-[9px] w-[83%] md:w-full">
                  <div className="flex flex-col items-center justify-start px-[13px] w-[95%] sm:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[130px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Loss of a loved one
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[57px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Cancer
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[78px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Caregiving
                        </Button>
                        <Button className="bg-deep_orange-100 cursor-pointer font-light min-w-[164px] py-[7px] rounded text-black-900 text-center text-sm">
                          Physical health challenge
                        </Button>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-[96%] md:w-full">
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[91px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Climate grief
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[158px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Mental health challenge
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[63px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Isolation
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[94px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Life transition
                        </Button>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-[99%] md:w-full">
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[114px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Family challenge
                        </Button>
                        <Button className="bg-deep_orange-100_66 cursor-pointer font-light min-w-[129px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Feeling stuck in life
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light h-8 py-[7px] rounded text-center text-gray-900_01 text-sm w-8">
                          Art
                        </Button>
                        <Button className="bg-indigo-400_19 cursor-pointer font-light min-w-[148px] py-[7px] rounded text-center text-gray-900_01 text-sm">
                          Relationship challenge
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-6 sm:ml-[0] ml-[3px] w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[11px] items-center justify-center mt-3 w-[43%] md:w-full">
              <Button
                className="common-pointer bg-white-A700_99 border border-gray-900_4c border-solid cursor-pointer font-circularxx font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-gray-900_01 w-[132px]"
                onClick={() =>
                  navigate("/journeyonboardingintroductionhonorof")
                }
              >
                Previous
              </Button>
              <Button
                className="common-pointer bg-blue-900 cursor-pointer font-circularstd font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-white-A700 w-[132px]"
                onClick={() => navigate("/journeyonboardingtitle")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default JourneyonboardingSelectsparksModal;
