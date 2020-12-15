import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

import Screen from "../components/Screen";
import logger from "../utils/logger";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/noor.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/noor.jpg"),
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, aperiam numquam? Odit ipsa ducimus neque quidem vero possimus, architecto dolorum. Recusandae voluptatum harum nobis commodi veritatis! Reprehenderit quam accusantium molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae reprehenderit obcaecati est rem vel magnam, voluptate facilis excepturi. Ratione, animi deserunt? Perspiciatis voluptates quaerat doloremque officia delectus omnis voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quam fugit non neque aperiam est enim excepturi harum, sit error facere adipisci itaque quod eum hic culpa laborum animi soluta!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, aperiam numquam? Odit ipsa ducimus neque quidem vero possimus, architecto dolorum. Recusandae voluptatum harum nobis commodi veritatis! Reprehenderit quam accusantium molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae reprehenderit obcaecati est rem vel magnam, voluptate facilis excepturi. Ratione, animi deserunt? Perspiciatis voluptates quaerat doloremque officia delectus omnis voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quam fugit non neque aperiam est enim excepturi harum, sit error facere adipisci itaque quod eum hic culpa laborum animi soluta!",
    image: require("../assets/noor.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefresing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((msg) => msg.id !== message.id);
    logger.log(newMessages);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("pressed on ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/noor.jpg"),
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
