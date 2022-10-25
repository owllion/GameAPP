import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../assets/color/colors";

interface Props {
  qtyHandler?: (type: string) => void;
  updateQtyHandler?: (type: string, index: number) => void;
  qty: number;
  stock: number;
  index?: number;
}

const QtyBtn = ({ qtyHandler, updateQtyHandler, qty, stock, index }: Props) => {
  return (
    <QuantityBox>
      <QuantityBtn
        disabled={qty === 1}
        android_ripple={{ color: COLORS.primary }}
        onPress={() => {
          qtyHandler ? qtyHandler("minus") : updateQtyHandler("minus", index);
        }}
      >
        <AntDesign name="minus" size={15} color="black" />
      </QuantityBtn>

      <Text style={{ color: COLORS.white }}>{qty}</Text>

      <QuantityBtn
        disabled={qty === stock}
        android_ripple={{ color: COLORS.primary }}
        onPress={() => {
          qtyHandler ? qtyHandler("add") : updateQtyHandler("add", index);
        }}
      >
        <AntDesign name="plus" size={15} color="black" />
      </QuantityBtn>
    </QuantityBox>
  );
};

const QuantityBox = styled.View`
  height: 35px;
  width: 100px;
  background-color: ${COLORS.primary};
  border-radius: 7px;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;
const QuantityBtn = styled.Pressable`
  height: 25px;
  width: 25px;
  background-color: ${COLORS.white};
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 15px;
  font-family: IBMPlexSansBold;
`;
export default QtyBtn;
