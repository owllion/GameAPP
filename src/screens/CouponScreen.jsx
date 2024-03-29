import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import COLORS from "../assets/color/colors";
import DayJS from "react-dayjs";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import BackBtn from "../components/BackBtn";
import EmptyImg from "../components/EmptyImg";

const selectedState = [{ title: "Unused" }, { title: "Used" }];
const CouponScreen = () => {
  const [selected, setSelected] = useState(0);
  const [renderList, setRenderList] = useState([]);
  const couponList = useSelector((state) => state.auth.couponList);

  const renderListHandler = () => {
    if (selected === 0) {
      const result = couponList.filter((i) => i.usage_count === 0);
      setRenderList(result);
    }
    if (selected === 1) {
      const result = couponList.filter((i) => i.usage_count > 0);
      setRenderList(result);
    }
  };

  useEffect(() => {
    renderListHandler();
  }, [selected]);

  return (
    <Container>
      <BtnBox>
        <BackBtn routeName={null} />
      </BtnBox>
      <TextBox>
        <Text title bold>
          Coupon
        </Text>
      </TextBox>

      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 35,
          paddingBottom: 40,
          marginBottom: 25,
          flex: 1,
        }}
        horizontal
        keyExtractor={(i) => i.title}
        data={selectedState}
        renderItem={({ item, index }) => (
          <UseBox
            android_ripple={{ color: COLORS.green }}
            index={index}
            selectedIndex={selected}
            onPress={() => setSelected(index)}
          >
            <UseText index={index} selectedIndex={selected}>
              {item.title}
            </UseText>
          </UseBox>
        )}
      />

      {!renderList[0] ? (
        <EmptyImg
          text="You do not have any coupon..."
          color="primary"
          img={require("../assets/images/emptyBag.png")}
        />
      ) : (
        <FlatList
          keyExtractor={(i) => i.code.toString()}
          data={renderList}
          renderItem={({ item, i }) => (
            <View key={i}>
              <LeftBox>
                <Text title bold>
                  BIG{" "}
                </Text>
                <Text highlight title bold>
                  SALE
                </Text>
              </LeftBox>
              <RightBox>
                <CodeText selectable>{item.code}</CodeText>
                <Text>
                  Expire:{" "}
                  <DayJS format="YYYY-MM-DD hh:mm A" element={Text}>
                    {item.expiry_date}
                  </DayJS>
                </Text>
              </RightBox>
            </View>
          )}
        />
      )}
    </Container>
  );
};

const FlatList = styled.FlatList`
  flex-grow: 0;
`;

const View = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  height: 120px;
  margin: 0 5px 10px 5px;
`;
const BtnBox = styled.View`
  padding-left: 10px;
`;

const UseBox = styled.Pressable`
  margin-right: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: ${({ index, selectedIndex }) =>
    selectedIndex === index ? COLORS.green : COLORS.light};
`;
const UseText = styled.Text`
  color: ${({ index, selectedIndex }) =>
    selectedIndex === index ? COLORS.white : COLORS.dark};
  font-size: 12px;
  font-family: IBMPlexSansRegular;
`;
const TextBox = styled.Text`
  margin: 20px 0 20px 30px;
`;
const LeftBox = styled.View`
  background-color: ${COLORS.yellow};
  width: 30%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const CodeText = styled.Text`
  color: ${COLORS.orange};
  font-size: 25px;
  font-family: IBMPlexSansBold;
`;
const RightBox = styled.View`
  padding: 25px;
  border: 1px solid ${COLORS.light};
  width: 70%;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-family: ${({ bold }) =>
    bold ? "IBMPlexSansBold" : "IBMPlexSansRegular"};
  font-size: ${({ title }) => (title ? "20px" : "11px")};
  color: ${({ highlight }) => (highlight ? COLORS.white : COLORS.dark)};
`;

export default CouponScreen;
