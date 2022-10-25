import React from "react";
import styled from "styled-components/native";
import { Icon, Badge } from "react-native-elements";
import COLORS from "../assets/color/colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartBtn = () => {
  const cartList = useSelector((state) => state.auth.cartList);

  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: COLORS.orange, borderless: true }}
      onPress={() => navigation.navigate("Cart")}
    >
      <Icon
        name="add-shopping-cart"
        type="material-icons-outlined"
        color={COLORS.dark}
        size={28}
      />
      <Badge
        value={cartList.length ? cartList.length : 0}
        status="error"
        badgeStyle={{
          backgroundColor: COLORS.orange,
        }}
        containerStyle={{ position: "absolute", top: -9, right: -6 }}
      />
    </Pressable>
  );
};

const Pressable = styled.Pressable``;
export default CartBtn;
