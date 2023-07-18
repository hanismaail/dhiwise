import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const JourneyonboardingIntroductionHonorOfModal = (props) => {
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
            <div className="flex flex-row font-montserrat items-end justify-between md:ml-[0] ml-[214px] w-[70%] md:w-full">
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
            <div className="flex flex-col font-circularxx items-center justify-start mr-[69px] mt-[27px] pt-0.5 w-[91%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
                  size="txtCircularXXMedium24"
                >
                  What’s the introduction to this journey?
                </Text>
                <Img
                  className="h-[30px] md:h-auto mt-[19px] object-cover w-[28%] sm:w-full"
                  src="images/img_platformlinedivider.png"
                  alt="platformlinediv"
                />
                <Text
                  className="leading-[24.00px] mt-[18px] text-gray-900_01 text-lg w-[82%] sm:w-full"
                  size="txtCircularXXRegular18"
                >
                  Write a couple sentences about what your journey is about.
                  This could be related to an adversity or challenge you have
                  faced or are currently facing. This will be the introduction
                  to your journey and give others context.
                </Text>
                <div className="flex flex-col items-start justify-start mt-[49px] w-full">
                  <div className="bg-gray-100 border border-black-900_33 border-solid flex flex-col items-start justify-start p-[19px] rounded-[5px] w-full">
                    <Text
                      className="mb-[118px] text-gray-500 text-xl"
                      size="txtCircularXXLight20"
                    >
                      Add your introduction here.
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[541px] mt-[5px] text-gray-800 text-right text-xs"
                    size="txtCircularXXLight12"
                  >
                    290 character limit
                  </Text>
                  <Text
                    className="italic mt-8 text-gray-800 text-lg"
                    size="txtCircularXXItalic18"
                  >
                    Optional
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between mt-1.5 w-full">
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-gray-900_01"
                      size="txtCircularXXRegular21"
                    >
                      This journey is in honor of{" "}
                    </Text>
                    <div className="bg-gray-100 border border-black-900_33 border-solid h-[43px] rounded-[5px] w-[61%]"></div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[548px] mt-[5px] text-gray-800 text-right text-xs"
                    size="txtCircularXXLight12"
                  >
                    40 character limit
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start mt-[5px] w-[55%] md:w-full">
                    <Img
                      className="h-[22px]"
                      src="images/img_download.svg"
                      alt="download"
                    />
                    <Text
                      className="mt-[3px] text-base text-gray-900_01"
                      size="txtCircularXXLight16"
                    >
                      Add a photo of who or what you are honoring
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer bg-blue-900 cursor-pointer font-circularstd font-medium leading-[normal] md:ml-[0] ml-[254px] mr-[323px] mt-10 py-[9px] rounded-lg text-base text-center text-white-A700 w-[132px]"
              onClick={() => navigate("/journeyonboardingselectsparks")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default JourneyonboardingIntroductionHonorOfModal;
