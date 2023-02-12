import React from "react";
import Card from "./Card";

import { Center, Wrap, WrapItem } from "@chakra-ui/react";

export default function Products() {
  const products = [
    {
      title: "Mutton",
      text: "Meat ",
      img: "https://unsplash.com/photos/Xedxbjx7MFg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2MTg3ODg4&force=true&w=1920",
    },
    {
      title: "Vegetables",
      text: "Mix Vegetables",
      img: "https://unsplash.com/photos/5aJVJvJ9rG8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfHx8fDE2NzYxNTYwMTE&force=true&w=1920",
    },
    {
      title: "Fruits",
      text: "Mix Fruits",
      img: "https://unsplash.com/photos/K0efSg5xy9w/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2MTk1MDQ1&force=true&w=1920",
    },
    {
      title: "Baverages",
      text: "Biscuits",
      img: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Toys",
      text: "Baby toys",
      img: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div>
      <Center as="section" alignItems="center" py={16} bgColor={"gray.100"}>
        <Wrap
          justifyContent={"space-around"}
          alignItems="center"
          mx={"auto"}
          display="flex"
        >
          <WrapItem gap={6}>
            {products.map((product) => {
              return (
                <Card
                  title={product.title}
                  text={product.text}
                  img={product.img}
                />
              );
            })}
          </WrapItem>
        </Wrap>
      </Center>
    </div>
  );
}