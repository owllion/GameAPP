import React from "react";
import COLORS from "../assets/color/colors";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import ErrorMsg from "./forms/ErrorMsg";
import { Icon } from "react-native-elements";
import { authActions } from "../store/slice/Auth";
import { orderActions } from "../store/slice/OrderSlice";
import { applyCode } from "../store/actions/ApplyCodeAction";

const ApplyCouponItem = ({
  finalPrice,
  finalTotal,
  discount,
  setCodeHandler,
  clearCode,
  code,
}) => {
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  const isVisible = errorMsg ? "show" : null;
  const dispatch = useDispatch();
  return (
    <>
      <OrderDetailBox>
        <CodeInputBox>
          <CodeInput
            value={code}
            onChangeText={(val) => setCodeHandler(val)}
            placeholderTextColor={COLORS.light}
            placeholder="Promo Code"
          />
          <Icon
            containerStyle={{
              position: "absolute",
              bottom: 12,
              right: 110,
              zIndex: 1,
            }}
            onPress={() => {
              clearCode();
              dispatch(orderActions.clearDisAndPrice());
              dispatch(authActions.setErrorClear());
            }}
            name="close"
            color={COLORS.white}
            size={30}
            type="evilicon"
          />
          <ApplyCodeBtn
            disabled={discount ? true : false}
            android_ripple={{
              color: COLORS.light,
            }}
            onPress={() =>
              dispatch(applyCode({ code, totalPrice: finalTotal }))
            }
          >
            <DetailText noPt>Apply</DetailText>
          </ApplyCodeBtn>
        </CodeInputBox>
        <ErrorBox>
          <ErrorMsg visible={isVisible} error={errorMsg} />
        </ErrorBox>
      </OrderDetailBox>

      <OrderDetailBox>
        {!!discount && (
          <PriceBox>
            <Text>Discount:</Text>
            <Text highlight>-${discount}</Text>
          </PriceBox>
        )}
        <PriceBox>
          <Text>Total:</Text>
          <Text highlight>${finalPrice}</Text>
        </PriceBox>
      </OrderDetailBox>
    </>
  );
};
const ErrorBox = styled.View`
  margin-top: 25px;
`;
const OrderDetailBox = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.grey};
  border-style: solid;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  ${({ between }) => (between ? "justify-content:space-between" : null)}
`;
const PriceBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ApplyCodeBtn = styled.Pressable`
  background-color: ${COLORS.orange};
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 28%;
`;
const CodeInputBox = styled.View`
  flex-direction: row;
`;
const CodeInput = styled.TextInput`
  background-color: ${COLORS.darkGrey};
  border-radius: 10px;
  margin-right: 10px;
  width: 70%;
  height: 50px;
  padding-left: 20px;
  color: ${COLORS.white};
  font-family: IBMPlexSansRegular;
`;
const DetailText = styled.Text`
  font-size: 12px;
  padding-top: 10px;
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.light)};
  font-family: IBMPlexSansRegular;
  padding-top: ${({ noPt }) => (noPt ? "0px" : "10px")};
`;
const Text = styled.Text`
  font-size: ${({ title }) => (title ? "25px" : "15px")};
  font-family: ${({ regular }) =>
    regular ? "IBMPlexSansRegular" : "IBMPlexSansBold"};
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.white)};
`;
export default ApplyCouponItem;
