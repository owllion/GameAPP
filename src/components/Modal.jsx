import React from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import { Overlay } from "react-native-elements";

const Modal = ({ visible, closeHandler, setAddressHandler, data }) => {
  if (!visible) return null;

  return (
    <>
      <Overlay
        overlayStyle={{
          padding: 20,
          margin: 20,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(225,225,225,.8)",
        }}
        isVisible={visible}
        onBackdropPress={closeHandler}
      >
        <FlatList
          data={data}
          keyExtractor={(i) => i}
          renderItem={({ item }) => {
            return (
              <ChooseBtn
                android_ripple={{ color: COLORS.grey }}
                onPress={() => {
                  closeHandler();
                  setAddressHandler(item);
                }}
              >
                <Text>{item}</Text>
              </ChooseBtn>
            );
          }}
        />
      </Overlay>
    </>
  );
};

const FlatList = styled.FlatList``;
const Text = styled.Text`
  font-size: 16px;
  font-family: IBMPlexSansRegular;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.grey};
  border-style: solid;
  color: ${({ white }) => (white ? COLORS.light : COLORS.dark)};
  padding-bottom: 6px;
`;
const ChooseBtn = styled.Pressable`
  padding: 5px 5px 0 0;
`;
export default Modal;
