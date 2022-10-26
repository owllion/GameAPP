import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import COLORS from "../assets/color/colors";
import OrderDetailItem from "./OrderDetailItem";

const OrderDetail = ({ orderItem, date, orderDetail }) => {
  return (
    <ScrollView>
      <InnerContainer>
        <TextBox>
          <View>
            <Icon
              style={{ marginRight: 6 }}
              name="game-controller"
              type="ionicon"
              size={14}
            />
            <Text bold>Items</Text>
          </View>
        </TextBox>

        {!!orderItem &&
          orderItem.map((item, index) => (
            <ItemWrapper key={index}>
              <ItemBox>
                <ImageBox>
                  <Image source={{ uri: item.image[0] }} />
                </ImageBox>

                <RightItemBox>
                  <Text>{item.productName}</Text>
                  <Text>x{item.qty}</Text>
                  <Text highlight>${item.qty * item.price}</Text>
                </RightItemBox>
              </ItemBox>
            </ItemWrapper>
          ))}
        <OrderDetailItem orderDetail={orderDetail} date={date} />
      </InnerContainer>
    </ScrollView>
  );
};
const ScrollView = styled.ScrollView``;
const InnerContainer = styled.View`
  padding-left: 10px;
`;
const TextBox = styled.Text`
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.View`
  padding: 10px;
`;
const ItemBox = styled.View`
  flex-direction: row;
  padding-bottom: 8px;
  width: 80%;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.light};
  border-style: solid;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const ImageBox = styled.View`
  width: 80px;
  height: 80px;
`;
const RightItemBox = styled.View`
  padding: 10px;
  width: 95%;
`;

const Text = styled.Text`
  font-size: ${({ title }) => (title ? "25px" : "11px")};
  color: ${({ highlight }) => (highlight ? COLORS.orange : COLORS.dark)};
  font-family: ${({ bold }) =>
    bold ? "IBMPlexSansBold" : "IBMPlexSansRegular"};
`;
export default OrderDetail;
