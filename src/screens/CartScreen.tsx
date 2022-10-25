import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Container from "../components/Container";
import BackBtn from "../components/BackBtn";
import { ListItem, Button, Avatar, Icon } from "react-native-elements";
import COLORS from "../assets/color/colors";
import QtyBtn from "../components/QtyBtn";
import { useSelector, useDispatch } from "react-redux";
import userApi from "../api/user";
import { authActions } from "../store/slice/Auth";
import { updateQty } from "../store/actions/UpdateQtyAction";
import EmptyImg from "../components/EmptyImg";

const CartScreen = ({ navigation }: any) => {
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.auth.cartList);
  const token = useSelector((state) => state.auth.token);

  const countTotal = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += Math.floor(item.price * item.qty);
    });
    setTotal(total);
  };

  const deleteHandler = async (id: string) => {
    try {
      const {
        data: { cartList: list },
      } = await userApi.deleteItem({ cartList, productId: id }, token);
      dispatch(authActions.setCart({ cartList: list }));
    } catch (e) {
      if (e.response) {
        alert(e.response.data.msg);
      }
    }
  };

  const updateQtyHandler = (type: string, index: number) => {
    dispatch(authActions.setCartItemQty({ type, index }));
    updateQty({
      productId: cartList[index].productId,
      qty: cartList[index].qty,
      cartList,
    });
  };

  useEffect(() => {
    countTotal();
  }, [cartList]);

  return (
    <Container>
      <BackBtnBox>
        <BackBtn routeName={null} />
        <Text>Back</Text>
      </BackBtnBox>
      <View>
        <Text title margin>
          Cart
        </Text>
        {cartList.length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(i) => i.productId}
            data={cartList}
            renderItem={({ item, index }) => (
              <ListItem.Swipeable
                key={index}
                onPress={() => navigation.navigate("Detail", { item: item })}
                containerStyle={{
                  paddingVertical: 10,
                  backgroundColor: COLORS.light,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  marginBottom: 15,
                  height: 100,
                  borderBottomWidth: 0,
                }}
                activeOpacity={1}
                underlayColor={"transparent"}
                key={item.productId}
                bottomDivider
                leftContent={
                  <Button
                    onPress={() => deleteHandler(item.productId)}
                    icon={
                      <Icon
                        type="fontisto"
                        name="trash"
                        size={35}
                        color={COLORS.white}
                      />
                    }
                    buttonStyle={{
                      height: 100,
                      backgroundColor: COLORS.orange,
                      borderTopLeftRadius: 15,
                      borderBottomLeftRadius: 15,
                    }}
                  />
                }
                rightContent={
                  <NumContainer>
                    <QtyBtn
                      index={index}
                      updateQtyHandler={updateQtyHandler}
                      qty={item.qty}
                      stock={item.stock}
                    />
                  </NumContainer>
                }
              >
                <Avatar
                  avatarStyle={{
                    borderRadius: 8,
                  }}
                  size={50}
                  source={{ uri: item.image[0] }}
                />
                <ListItem.Content style={{ margin: -10 }}>
                  <ListItem.Title
                    numberOfLines={1}
                    style={{
                      fontFamily: "IBMPlexSansBold",
                      fontSize: 11,
                      marginLeft: 8,
                    }}
                  >
                    {item.productName}
                  </ListItem.Title>
                  <ListItem.Subtitle
                    style={{
                      fontSize: 10,
                      fontFamily: "IBMPlexSansRegular",
                      marginLeft: 8,
                    }}
                  >
                    ${item.price}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Text>x{item.qty}</Text>
                <Text>${item.qty * item.price}</Text>
              </ListItem.Swipeable>
            )}
          />
        ) : (
          <EmptyImg
            text="Your cart is empty!"
            color="dark"
            img={require("../assets/images/emptyBag.png")}
          />
        )}
      </View>
      <CheckoutContainer>
        <TextBox>
          <Text white>Total:</Text>
          <Text white>${total}</Text>
        </TextBox>
        <CheckBtn
          onPress={() => {
            if (cartList.length) {
              navigation.navigate("Checkout", { total });
            } else {
              alert("Your cart is empty!");
            }
          }}
          android_ripple={{
            color: COLORS.yellow,
          }}
        >
          <Text white regular>
            Checkout
          </Text>
        </CheckBtn>
      </CheckoutContainer>
    </Container>
  );
};

const FlatList = styled.FlatList``;
const BackBtnBox = styled.View`
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
`;
const View = styled.View`
  padding: 25px 0 0 25px;
  flex: 0.8;
`;
const TextBox = styled.View``;
const Text = styled.Text`
  font-size: ${({ title }: { title: boolean }) => (title ? "25px" : "15px")};
  font-family: ${({ regular }: { regular: boolean }) =>
    regular ? "IBMPlexSansRegular" : "IBMPlexSansBold"};
  margin-bottom: ${({ margin }: { margin: boolean }) => (margin ? "30px" : 0)};
  color: ${({ white }: { white: boolean }) =>
    white ? COLORS.white : COLORS.dark};
`;
const NumContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${COLORS.primary};
`;
const CheckoutContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.primary};
  padding: 25px;
  height: 120px;
  bottom: 0;
  position: absolute;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-left: 40px;
`;
const CheckBtn = styled.Pressable`
  border-radius:8px;
  background-color:${COLORS.orange}
  padding:15px;
  width:60%;
  justify-content:center;
  align-items:center  
`;

export default CartScreen;
