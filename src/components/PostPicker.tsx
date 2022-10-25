import React, { useState } from "react";
import { Button, Icon } from "react-native-elements";
import styled from "styled-components/native";
import { Modal } from "react-native";
import Container from "./Container";
import { regular } from "../assets/style/style";
import { useFonts } from "@expo-google-fonts/rock-salt";
import AppLoading from "expo-app-loading";
import PickerItem from "./PickerItem";
import ErrorMsg from "./forms/ErrorMsg";
import { useFormikContext } from "formik";

interface KeyCategory {
  label: string;
  id: number;
}

interface Category {
  item: {
    id: number;
    label: string;
    bg: string;
    icon: string;
  };
}

interface Props {
  cate: KeyCategory[];
  fieldName: string;
  numColumns: number;
}

const PostPicker = (props: Props) => {
  const { fieldName, cate, numColumns } = props;
  const { errors, setFieldValue, touched, values } = useFormikContext();

  //Modal shoe or not show
  const [visible, setVisible] = useState<boolean>(false);

  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Container>
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <View>
            <LeftView>
              <Icon
                style={{
                  marginRight: 10,
                  alignSelf: "baseline",
                }}
                type="ionicon"
                name="apps-outline"
                size={25}
                color="#949D6A"
              />
              {!!values[fieldName] ? (
                <Text dark>{values[fieldName]}</Text>
              ) : (
                <Text>Category</Text>
              )}
            </LeftView>
            <RightView>
              <Icon
                style={{
                  marginRight: 10,
                  alignSelf: "baseline",
                }}
                type="ionicon"
                name="chevron-down-outline"
                size={25}
                color="#000"
              />
            </RightView>
          </View>
        </TouchableWithoutFeedback>
        <ErrorMsg visible={touched[fieldName]} error={errors[fieldName]} />
      </Container>

      <Modal visible={visible} animationType="slide">
        <IconBox>
          <Button
            buttonStyle={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            onPress={() => setVisible(false)}
            icon={
              <Icon
                type="ionicon"
                name="close-outline"
                size={15}
                color="#fff"
              />
            }
          />
        </IconBox>
        {/* Modal content */}
        <Text>Hello</Text>
        <FlatList
          style={{ marginTop: "50%" }}
          data={cate}
          numColumns={numColumns}
          keyExtractor={(i: KeyCategory) => i.id.toString()}
          renderItem={({ item }: Category) => {
            return (
              <PickerItem
                label={item.label}
                item={item}
                selectHandler={() => {
                  setFieldValue(fieldName, item.label);
                  setVisible(false);
                }}
              />
            );
          }}
        />
      </Modal>
    </>
  );
};

const View = styled.View`
  padding: 20px;
  flex-direction: row;
  background-color: #f6ca83;
  margin: -25px 10px 40px 10px;
  border-radius: 20px;
  justify-content: space-between;
`;
const LeftView = styled.View`
  flex-direction: row;
`;
const RightView = styled.View``;
const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;

//close icon
const IconBox = styled.View`
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 10000;
`;

const Text = styled.Text`
  font-family: ${regular.fontFamily};
  color: ${(props: { dark: boolean }) => (props.dark ? "#000" : "gray")};
`;
const CategoryTitle = styled.Text``;
const FlatList = styled.FlatList``;
export default PostPicker;
