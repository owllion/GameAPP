import React from "react";
import styled from "styled-components/native";
import { regular } from "../assets/style/style";
import { Icon } from "react-native-elements";

const PickerItem = ({ label, selectHandler, item }) => {
  console.log(item.icon);
  return (
    <TouchableOpacity onPress={selectHandler}>
      <View bg={item.bg}>
        <Icon type="material-icons" name={item.icon} size={50} color="#fff" />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const Text = styled.Text`
  font-family: ${regular.fontFamily};
`;
const View = styled.View`
  background-color: ${(props) => (props.bg ? props.bg : null)};
  padding: 12px;
  width: 80px;
  height: 80px;
  border-radius: 45px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  padding: 20px;
  margin-top: 5px;
  width: 33%;
  align-items: center;
`;
export default PickerItem;
