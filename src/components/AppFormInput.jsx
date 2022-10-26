import React from "react";
import { useFormikContext } from "formik";
import { Input } from "react-native-elements";
import ErrorMsg from "./forms/ErrorMsg";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import COLORS from "../assets/color/colors";

const AppFormInput = ({ fieldName, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Input
        {...otherProps}
        style={{
          fontFamily: "IBMPlexSansRegular",
          color: COLORS.white,
          paddingLeft: 10,
        }}
        onChangeText={handleChange(fieldName)}
        onBlur={() => setFieldTouched(fieldName)}
      />
      <ErrorMsg error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
};

export default AppFormInput;
