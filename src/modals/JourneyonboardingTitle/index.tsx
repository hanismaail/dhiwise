import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const JourneyonboardingTitleModal = (props) => {
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
          <div className="flex flex-col justify-start mb-[51px] mr-0.5 w-[91%] md:w-full">
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
            <div className="flex flex-col font-circularxx justify-start mr-[69px] mt-[27px] py-[123px] w-[91%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[115px]">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
                  size="txtCircularXXMedium24"
                >
                  Next, let’s add a title for your journey.
                </Text>
              </div>
              <Img
                className="h-[30px] md:h-auto md:ml-[0] ml-[231px] mt-[18px] object-cover w-[28%] sm:w-full"
                src="images/img_platformlinedivider.png"
                alt="platformlinediv"
              />
              <Text
                className="leading-[24.00px] md:ml-[0] ml-[60px] mt-[19px] text-gray-900_01 text-lg w-[82%] sm:w-full"
                size="txtCircularXXRegular18"
              >
                Adding a title helps others find your story and also gives you a
                chance to reclaim your power through storytelling. By changing
                the narrative surrounding the adversity we are facing, we are
                able to take a step toward post-traumatic growth.
              </Text>
              <Input
                name="name"
                placeholder="Scarlett’s First Journey"
                className="font-light p-0 placeholder:text-gray-900_01 sm:pr-5 text-gray-900_01 text-left text-xl w-full"
                wrapClassName="bg-gray-100 border border-black-900_33 border-solid mt-[66px] pb-2 pl-3 pr-[35px] pt-3 rounded-[5px] w-full"
              ></Input>
              <Text
                className="mb-7 md:ml-[0] ml-[548px] mt-[5px] text-gray-800 text-right text-xs"
                size="txtCircularXXLight12"
              >
                50 character limit
              </Text>
            </div>
            <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[183px] mt-10 w-[39%] md:w-full">
              <Button
                className="common-pointer bg-white-A700_99 border border-gray-900_4c border-solid cursor-pointer font-circularxx font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-gray-900_01 w-[132px]"
                onClick={() => navigate("/journeyonboardingselectsparks")}
              >
                Previous
              </Button>
              <Button
                className="common-pointer bg-blue-900 cursor-pointer font-circularstd font-medium leading-[normal] py-[9px] rounded-lg text-base text-center text-white-A700 w-[132px]"
                onClick={() =>
                  navigate("/journeyonboardingprivacyuserhasnogroups")
                }
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

export default JourneyonboardingTitleModal;
