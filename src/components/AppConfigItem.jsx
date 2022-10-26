import React from "react";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const AppConfigItem = ({ data, bgColor }) => {
  const navigation = useNavigation();
  const [isLoaded] = useFonts({
    IBMPlexSansRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    IBMPlexSansBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {data.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() => navigation.navigate(item.targetScreen)}
          underlayColor={"#218380"}
          containerStyle={{ backgroundColor: bgColor }}
        >
          {!!item.avatar && <Avatar rounded source={{ uri: item.avatar }} />}
          {!!item.icon && (
            <Icon name={item.icon} type="material-icons" color="#218380" />
          )}
          <ListItem.Content>
            {!!item.name && <ListItem.Title>{item.name}</ListItem.Title>}

            {!!item.set && <ListItem.Title>{item.set}</ListItem.Title>}

            {!!item.email && (
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            )}
          </ListItem.Content>
          {!item.avatar && <ListItem.Chevron />}
        </ListItem>
      ))}
    </>
  );
};

export default AppConfigItem;
