import React from "react";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import DayJS from "react-dayjs";

const OrderDetailItem = (props) => {
  const { orderDetail, date } = props;
  return (
    <>
      <PriceWrapper>
        {!!orderDetail.discount && (
          <DetailBox>
            <Text>Discount</Text>
            <Text>-${orderDetail.discount}</Text>
          </DetailBox>
        )}
        <DetailBox>
          <Text>Total</Text>
          <Text highlight bold>
            ${orderDetail.total_price}
          </Text>
        </DetailBox>
      </PriceWrapper>

      <PaymentBox>
        <View>
          <Icon
            style={{ marginRight: 10 }}
            name="security"
            type="material-icons"
            size={14}
          />
          <Text bold>Payment Method</Text>
        </View>
        <Text>Credit Card</Text>
      </PaymentBox>
      <AddressBox>
        <AddressTitle>
          <Icon
            style={{ marginRight: 10 }}
            name="location"
            type="ionicon"
            size={14}
          />
          <Text bold>Delivery Address</Text>
        </AddressTitle>
        <Text>{orderDetail.delivery_address}</Text>
      </AddressBox>
      <OrderDetailWrapper>
        <OrderDetailTitle>
          <Icon
            style={{ marginRight: 10 }}
            name="clipboard-pencil"
            type="foundation"
            size={14}
          />
          <Text bold>Order Detail</Text>
        </OrderDetailTitle>
        <DetailBox>
          <Text>Order ID</Text>
          <Text>{orderDetail.orderId}</Text>
        </DetailBox>
        <DetailBox>
          <Text>Order Time</Text>
          <DayJS format="yyyy-MM-dd hh:mm" element={Text}>
            {date}
          </DayJS>
        </DetailBox>
        <DetailBox>
          <Text>Order Status</Text>
          <Text highlight>{orderDetail.order_status}</Text>
        </DetailBox>
      </OrderDetailWrapper>
    </>
  );
};
const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const OrderDetailTitle = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
`;
const DetailBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const PriceWrapper = styled.View`
  padding: 10px 28px 5px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.light};
`;
const PaymentBox = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  padding: 10px 28px 5px 15px;
  border-bottom-width: 1px;
  padding-bottom: 15px;
  border-bottom-color: ${COLORS.light};
`;
const AddressBox = styled.View`
  padding: 10px 28px 5px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.light};
  padding-bottom: 15px;
`;
const AddressTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;
const OrderDetailWrapper = styled.View`
  padding: 10px 28px 5px 15px;
`;

const Text = styled.Text`
  font-size: ${({ title }) => (title ? "25px" : "11px")};
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.dark)};
  font-family: ${({ bold }) =>
    bold ? "IBMPlexSansBold" : "IBMPlexSansRegular"};
`;
export default OrderDetailItem;
