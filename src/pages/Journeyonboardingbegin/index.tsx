import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const JourneyonboardingbeginPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-lime-50 flex flex-col font-sanchez items-start justify-end mx-auto w-full">
        <div className="flex flex-col gap-9 items-center w-full">
          <div className="sm:h-[347px] md:h-[390px] h-[414px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-gradient1  bg-no-repeat bottom-[0] flex flex-col gap-1.5 h-[348px] inset-x-[0] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 rounded-bl-md rounded-br-md w-[74%]"
              style={{ backgroundImage: "url('images/img_cover.png')" }}
            >
              <div className="flex flex-col h-[75px] items-center justify-start w-[75px]">
                <div className="flex flex-col h-[75px] items-center justify-start p-0.5 w-[75px]">
                  <Img
                    className="h-[71px] md:h-auto rounded-[50%] w-[71px]"
                    src="images/img_profilephoto.png"
                    alt="profilephoto"
                  />
                </div>
              </div>
              <Text
                className="mb-3.5 text-center text-lg text-shadow-ts text-white-A700"
                size="txtSanchezRegular18"
              >
                Scarlett Chang
              </Text>
            </div>
            <div className="absolute font-circularxx md:h-[390px] sm:h-[66px] h-[71px] inset-x-[0] mx-auto top-[0] w-full">
              <header className="absolute bg-gray-900 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
                <Img
                  className="md:flex-1 h-[33px] sm:h-auto mb-3.5 md:ml-[0] ml-[25px] md:mt-0 mt-[19px] object-cover w-[11%] md:w-full"
                  src="images/img_reimaginelogo6.png"
                  alt="reimaginelogoSix"
                />
                <Input
                  name="search"
                  placeholder="Search Reimagine"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-800 sm:pr-5 text-base text-gray-800 text-left w-full"
                  wrapClassName="bg-white-A700_e5 flex md:flex-1 md:ml-[0] ml-[31px] md:mt-0 my-3 pl-[9px] pr-[35px] py-[9px] rounded-[21px] w-[23%] md:w-full"
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
                  className="h-6 md:ml-[0] ml-[724px] md:mt-0 my-[21px] w-6"
                  src="images/img_home.svg"
                  alt="home"
                />
                <Img
                  className="h-6 md:ml-[0] ml-[19px] md:mt-0 my-[21px] w-6"
                  src="images/img_menu.svg"
                  alt="menu"
                />
                <div className="h-8 md:h-[45px] mb-[21px] md:ml-[0] ml-[19px] md:mt-0 mt-[13px] relative w-[3%] md:w-full">
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
                  className="h-[42px] md:h-auto md:ml-[0] ml-[13px] mr-[25px] md:mt-0 my-3 rounded-[50%] w-[42px]"
                  src="images/img_profilephoto_42x42.png"
                  alt="profilephoto_One"
                />
              </header>
              <Text
                className="absolute bg-gray-800_f2 bottom-[0] h-3.5 justify-center pt-1 px-[7px] right-[11%] rounded-[7px] text-gray-50 text-shadow-ts1 text-sm w-[52px]"
                size="txtCircularXXRegular14"
              >
                Home
              </Text>
            </div>
            <div className="absolute flex flex-col gap-[25px] h-max inset-y-[0] items-center justify-start left-[2%] my-auto w-[2%]">
              <Img
                className="h-6 md:h-auto rounded-[50%] w-6"
                src="images/img_profilephoto_24x24.png"
                alt="profilephoto_Two"
              />
              <Img
                className="h-6 w-6"
                src="images/img_home_gray_900_01.svg"
                alt="home_One"
              />
              <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
              <Img
                className="h-6 w-6"
                src="images/img_menu_gray_900_01.svg"
                alt="menu_One"
              />
              <Img
                className="h-6 w-6"
                src="images/img_computer.svg"
                alt="computer"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-[13px] md:px-5 w-[53%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
              size="txtSanchezRegular24"
            >
              <>
                Scarlett, let&#39;s create your first Reimagine Journey Album.{" "}
              </>
            </Text>
            <Text
              className="leading-[26.00px] mt-[30px] text-gray-900_01 text-lg"
              size="txtCircularXXRegular18"
            >
              <>
                A Journey Album is a collection of related entries you&#39;ll
                make and actions you&#39;ll take that move you forward in life.
                It&#39;s also a powerful way to honor who or what you care about
                most.
                <br />
                An Album can be private, helping you grow on your personal
                journey, but you are also encouraged to share it with others to
                help them on their journeys.
                <br />
                All you have to do to get started is follow the instructions for
              </>
            </Text>
            <Button
              className="common-pointer bg-blue-900 cursor-pointer font-circularstd font-medium leading-[normal] mb-[27px] mt-[81px] py-[9px] rounded-lg text-base text-center text-white-A700 w-[132px]"
              onClick={() => navigate("/journeyonboardingintroductionhonorof")}
            >
              Begin
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-circularstd items-end mt-[2646px] md:px-10 sm:px-5 px-[41px] w-full">
          <Button
            className="bg-blue-700 cursor-pointer flex items-center justify-center min-w-[186px] px-[35px] py-[13px] rounded-[22px] shadow-bs"
            leftIcon={
              <div className="mr-[9px] bg-white-A700 my-1">
                <Img src="images/img_arrowup.svg" alt="arrow_up" />
              </div>
            }
          >
            <div className="font-bold leading-[normal] sm:px-5 text-base text-left text-white-A700">
              Back to Top
            </div>
          </Button>
        </div>
        <div className="flex flex-col font-circularstd items-center mt-[342px] w-full">
          <div className="bg-gray-900_02 flex flex-col justify-end py-[49px] w-full">
            <Img
              className="h-[59px] md:h-auto mt-[30px] mx-auto object-cover w-[18%] sm:w-full"
              src="images/img_reimaginelogo3.png"
              alt="reimaginelogoThree"
            />
            <Text
              className="md:ml-[0] mt-[22px] mx-[505px] text-white-A700 text-xl w-[30%] sm:w-full"
              size="txtCircularStdBook20"
            >
              Help Contact Privacy Policy Terms of Use
            </Text>
            <Line className="bg-blue_gray-900 h-0.5 mt-6 w-full" />
            <Img
              className="h-[35px] mt-[33px] mx-auto"
              src="images/img_group18736.svg"
              alt="group18736"
            />
            <Text
              className="md:ml-[0] ml-[396px] mr-[311px] mt-[27px] text-[15px] text-white-A700"
              size="txtCircularStdBook15"
            >
              <span className="text-white-A700 font-tahoma text-left font-normal">
                ©
              </span>
              <span className="text-white-A700 font-circularstd text-left font-medium">
                {" "}
                2022 Reimagine Privacy & Cookies | Terms & Conditions | Donor
                Privacy Policy & Bill of Rights
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyonboardingbeginPage;
