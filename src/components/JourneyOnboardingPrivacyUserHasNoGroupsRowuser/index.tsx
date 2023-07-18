import React from "react";

import { Button, Img, Text } from "components";

type JourneyOnboardingPrivacyUserHasNoGroupsRowuserProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "visibilitysetting" | "visibilitydescription"
> &
  Partial<{ visibilitysetting: string; visibilitydescription: string }>;

const JourneyOnboardingPrivacyUserHasNoGroupsRowuser: React.FC<
  JourneyOnboardingPrivacyUserHasNoGroupsRowuserProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-blue_gray-100 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
          <Img
            className="h-6"
            src="images/img_user_gray_900_01.svg"
            alt="user"
          />
        </Button>
        <div className="flex flex-col items-start justify-start">
          <Text
            className="text-base text-gray-900_01"
            size="txtCircularXXMedium16"
          >
            {props?.visibilitysetting}
          </Text>
          <Text
            className="mt-[3px] text-gray-800 text-xs"
            size="txtCircularXXRegular12"
          >
            {props?.visibilitydescription}
          </Text>
        </div>
      </div>
    </>
  );
};

JourneyOnboardingPrivacyUserHasNoGroupsRowuser.defaultProps = {
  visibilitysetting: "Public",
  visibilitydescription: "Anyone on or off the Reimagine platform",
};

export default JourneyOnboardingPrivacyUserHasNoGroupsRowuser;
