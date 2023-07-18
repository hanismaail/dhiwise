import React from "react";

const sizeClasses = {
  txtCircularXXBook18: "font-circularxx font-medium",
  txtCircularXXBook14: "font-circularxx font-medium",
  txtCircularXXBook12: "font-circularxx font-medium",
  txtCircularXXRegular12WhiteA700: "font-circularxx font-normal",
  txtCircularXXMedium24: "font-circularxx font-medium",
  txtCircularStdBook15Gray50: "font-circularstd font-normal",
  txtCircularXXRegular21: "font-circularxx font-normal",
  txtSanchezRegular24: "font-normal font-sanchez",
  txtSanchezRegular26: "font-normal font-sanchez",
  txtCircularXXRegular14Gray90001: "font-circularxx font-normal",
  txtSanchezRegular20: "font-normal font-sanchez",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtCircularXXRegular20: "font-circularxx font-normal",
  txtCircularXXLight12: "font-circularxx font-light",
  txtCircularXXLight16: "font-circularxx font-light",
  txtCircularStdBook20: "font-circularstd font-medium",
  txtCircularXXMedium16: "font-circularxx font-medium",
  txtCircularXXBold18: "font-bold font-circularxx",
  txtCircularXXRegular18: "font-circularxx font-normal",
  txtCircularXXRegular14: "font-circularxx font-normal",
  txtCircularXXItalic18: "font-circularxx font-normal italic",
  txtCircularXXRegular12: "font-circularxx font-normal",
  txtCircularXXRegular13: "font-circularxx font-normal",
  txtCircularXXLight20: "font-circularxx font-light",
  txtCircularStdBook15: "font-circularstd font-medium",
  txtSanchezRegular18: "font-normal font-sanchez",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
