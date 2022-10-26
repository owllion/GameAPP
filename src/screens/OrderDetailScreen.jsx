import React, { useEffect } from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import BackBtn from "../components/BackBtn";
import { getOrderDetail } from "../store/actions/OrderDetailAction";
import { useDispatch, useSelector } from "react-redux";
import ActivityIndicator from "../components/ActivityIndicator";
import OrderDetail from "../components/OrderDetail";

const OrderDetailScreen = ({ route }) => {
  const { orderId } = route.params;

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.order.detail);
  const orderItem = detail.order_item;
  const createdAt = detail.createdAt;

  useEffect(() => {
    dispatch(getOrderDetail({ orderId }));
  }, []);

  return (
    <>
      <ActivityIndicator />
      <Container>
        <UpperBlock>
          <BtnBox>
            <BackBtn routeName={null} />
          </BtnBox>

          <TextBox>
            <Text title bold highlight>
              Detail
            </Text>
          </TextBox>
        </UpperBlock>
        <OrderDetail
          orderDetail={detail}
          date={createdAt}
          orderItem={orderItem}
        />
      </Container>
    </>
  );
};
const Container = styled.View`
  flex: 1;
`;
const BtnBox = styled.View`
  padding-left: 10px;
`;
const TextBox = styled.Text`
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const UpperBlock = styled.View`
  background-color: ${COLORS.primary};
  padding-top: 40px;
  padding-left: 20px;
`;

const Text = styled.Text`
  font-size: ${({ title }) => (title ? "25px" : "11px")};
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.dark)};
  font-family: ${({ bold }) =>
    bold ? "IBMPlexSansBold" : "IBMPlexSansRegular"};
`;

export default OrderDetailScreen;
