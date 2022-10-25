import React, { useEffect } from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import BackBtn from "../components/BackBtn";
import { getOrderDetail } from "../store/actions/OrderDetailAction";
import { useDispatch, useSelector } from "react-redux";
import ActivityIndicator from "../components/ActivityIndicator";
import OrderDetail from "../components/OrderDetail";

Date.prototype.format = function (fmt) {
  const o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
const OrderDetailScreen = ({ route }: any) => {
  const { orderId } = route.params;

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.order.detail);
  const orderItem = detail.order_item;
  const date = detail.createdAt;
  const d = new Date(date).format("yyyy-MM-dd hh:mm");

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
            <Text title margin bold highlight>
              Detail
            </Text>
          </TextBox>
        </UpperBlock>
        <OrderDetail orderDetail={detail} date={d} orderItem={orderItem} />
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
  font-size: ${({ title }: { title: boolean }) => (title ? "25px" : "11px")};
  color: ${({ highlight }: { highlight: boolean }) =>
    highlight ? COLORS.orange : COLORS.dark};
  font-family: ${({ bold }: { bold: boolean }) =>
    bold ? "IBMPlexSansBold" : "IBMPlexSansRegular"};
`;

export default OrderDetailScreen;
