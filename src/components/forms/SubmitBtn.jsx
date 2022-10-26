import React from "react";
import styled from "styled-components/native";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { registerOrLogin } from "../../store/actions/AuthAction";
import COLORS from "../../assets/color/colors";

interface IProps {
  text: string;
}
interface IFieldValue {
  email: string;
  name: string;
  password: string;
}
const SubmitBtn = ({ text }: IProps) => {
  const dispatch = useDispatch();
  const { errors, values } = useFormikContext<IFieldValue>();

  const isChecked = errors.email ? false : true;

  const checkSubmit = () => {
    if (!isChecked || !values.email || !values.password) {
      alert("Please check your field again!");
      return;
    }
    dispatch(
      registerOrLogin({
        email: values.email,
        password: values.password,
        userName: values.name,
      })
    );
  };
  return (
    <Pressable
      android_ripple={{
        color: COLORS.light,
      }}
      onPress={checkSubmit}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

const Text = styled.Text`
  font-family: IBMPlexSansBold;
  font-size: 18px;
  color: white;
  text-align: center;
`;

const Pressable = styled.Pressable`
  background-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 50px;
  margin: 0 10px 10px 10px;
`;
export default SubmitBtn;
