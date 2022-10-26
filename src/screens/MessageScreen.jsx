import React, { useState } from "react";
import AppListItem from "../components/AppListItem";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://icons-for-free.com/iconfiles/png/512/avatar+circle+male+profile+user+icon-1320196703471638282.png",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIRZXYvGCN_04MZEpnTlOAhtRMU9iXOlQoQ&usqp=CAU",
    subtitle: "Vice Chairman",
  },
];

export interface Data {
  name: string;
  avatar_url: string;
  subtitle: string;
}

const MessageScreen = () => {
  const [msgs, setMsg] = useState<Data[]>(list);
  const removeHandler = (item: Data) => {
    const result = msgs.filter((i) => i.name !== item.name);

    setMsg(result);
  };
  return <AppListItem list={msgs} removeHandler={removeHandler} />;
};

export default MessageScreen;
