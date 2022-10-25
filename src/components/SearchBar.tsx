import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface Props {
  onSubmitHandler: () => void;
  setKeywordsHandler: (text: string) => void;
}

const SearchBar = (props: Props) => {
  const { onSubmitHandler, setKeywordsHandler } = props;

  return (
    <Container>
      <Feather
        name="search"
        size={30}
        style={{ marginLeft: 15, marginTop: 16 }}
      />
      <TextInput
        placeholder="Search"
        onChangeText={setKeywordsHandler}
        onSubmitEditing={onSubmitHandler}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: #f0eeee;
  border-radius: 10px;
  height: 65px;
  margin: 10px 15px 0;
  flex-direction: row;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 65px;
  font-size: 18px;
  color: #010101;
  margin-left: 10px;
  font-family: IBMPlexSansBold;
`;
export default SearchBar;
