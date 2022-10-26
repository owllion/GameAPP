import React, { useState } from "react";
import COLORS from "../assets/color/colors";
import styled from "styled-components/native";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import { STRIPE_PUBLISHABLE_KEY } from "@env";

// Stripe.setOptionsAsync({
//   publishableKey: STRIPE_PUBLISHABLE_KEY,
//   androidPayMode: "test",
// });
const CheckoutCard = () => {
  const [card, setCard] = useState({ last4: "", brand: "" });

  const callCard = async () => {
    const params = {
      number: "4242424242424242",
      expMonth: 11,
      expYear: 17,
      cvc: "223",
    };
    try {
      // const token = await Stripe.paymentRequestWithCardFormAsync(params);
      setCard({ last4: token.card.last4, brand: token.card.brand });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <OrderDetailBox>
        <Text>Payment Method</Text>
        <DetailText>Credit Card</DetailText>
        {!card.last4 ? (
          <DetailTextBox
            android_ripple={{
              color: COLORS.light,
              borderless: true,
            }}
          >
            <DetailText onPress={() => callCard()} highlight>
              + Add a card
            </DetailText>
          </DetailTextBox>
        ) : (
          <DetailText>
            {card.brand}************{card.last4}
          </DetailText>
        )}
      </OrderDetailBox>
    </>
  );
};
const OrderDetailBox = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.grey};
  border-style: solid;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  ${({ between }) => (between ? "justify-content:space-between" : null)}
`;
const Text = styled.Text`
  font-size: ${({ title }) => (title ? "25px" : "15px")};
  font-family: ${({ regular }) =>
    regular ? "IBMPlexSansRegular" : "IBMPlexSansBold"};
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.white)};
`;
const DetailText = styled.Text`
  font-size: 12px;
  padding-top: 10px;
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.light)};
  font-family: IBMPlexSansRegular;
  padding-top: ${({ noPt }) => (noPt ? "0px" : "10px")};
`;
const DetailTextBox = styled.Pressable`
  align-items: flex-end;
`;
export default CheckoutCard;
