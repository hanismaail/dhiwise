import React from "react";

import { Img } from "components";

type JourneyCompletedOnboardingColumnprofilephotoProps =
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    Partial<{}>;

const JourneyCompletedOnboardingColumnprofilephoto: React.FC<
  JourneyCompletedOnboardingColumnprofilephotoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 md:h-auto rounded-[50%] w-6"
          src="images/img_profilephoto_24x24.png"
          alt="profilephoto"
        />
        <Img
          className="h-6 w-6"
          src="images/img_home_gray_900_01.svg"
          alt="home"
        />
        <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
        <Img
          className="h-6 w-6"
          src="images/img_menu_gray_900_01.svg"
          alt="menu"
        />
        <Img className="h-6 w-6" src="images/img_computer.svg" alt="computer" />
      </div>
    </>
  );
};

JourneyCompletedOnboardingColumnprofilephoto.defaultProps = {};

export default JourneyCompletedOnboardingColumnprofilephoto;
