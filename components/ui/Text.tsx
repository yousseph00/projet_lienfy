import React from "react";

const sizeClasses = {
  txtPoppinsBold48: "font-bold font-poppins",
  txtPoppinsSemiBold1789: "font-poppins font-semibold",
  txtPoppinsItalic1789: "font-normal font-poppins italic",
  txtPoppinsRegular105WhiteA700: "font-normal font-poppins",
  txtInterBold105: "font-bold font-inter",
  txtInterRegular105: "font-inter font-normal",
  txtPoppinsBold10: "font-bold font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsBold11626: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold12: "font-bold font-inter",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsMedium16Yellow900: "font-medium font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular16Gray600: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA700: "font-medium font-poppins",
  txtPoppinsBold2043: "font-bold font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular105: "font-normal font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
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
