import { Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./create.module.css";

const inputProps = {};

const Create: React.FC = () => {
  return (
    <Flex className={styles.page}>
      <Flex flex="1">
        <Flex direction={"column"} justifyContent={"center"}>
          <Image height="3rem" src="/image_icon.svg" />
          <Text color="white">+ Add Photo</Text>
        </Flex>
      </Flex>
      <Flex className={styles.createPage} alignItems="center" p="0 2rem">
        <Heading color="#501FC1" mt="2rem" fontSize="1.6rem">
          Create my event
        </Heading>
        <Flex direction="column">
          <Input
            mt="2rem"
            width="100%"
            placeholder="Event name"
            size="lg"
            borderRadius="4rem"
            backgroundColor="#f9f6ff"
            defaultValue={"Mihailo's 22nd"}
            mb="1.5rem"
          ></Input>
          <Flex alignItems="center" mb="0.2rem">
            <Image src="/calendar.svg" />
            <Text align="left" pl="0.3rem" color="#501FC1" fontWeight={600}>
              Date
            </Text>
          </Flex>
          <Input
            placeholder="Event name"
            size="lg"
            borderRadius="4rem"
            defaultValue={"4th January, 2022"}
          ></Input>{" "}
          <Flex mt="2rem">
            <Flex direction="column" mr="0.5rem">
              <Flex alignItems="center" mb="0.2rem">
                <Image src="/time.svg" />
                <Text align="left" pl="0.3rem" color="#501FC1" fontWeight={600}>
                  Start Time
                </Text>
              </Flex>
              <Input
                placeholder="Event name"
                size="lg"
                borderRadius="4rem"
                defaultValue={"06:00pm"}
              ></Input>{" "}
            </Flex>
            <Flex direction="column">
              <Flex alignItems="center" mb="0.2rem">
                <Image src="/time.svg" />
                <Text align="left" pl="0.3rem" color="#501FC1" fontWeight={600}>
                  End Time
                </Text>
              </Flex>
              <Input
                placeholder="Event name"
                size="lg"
                borderRadius="4rem"
                defaultValue={"12:00pm"}
              />
            </Flex>
          </Flex> 
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Create;
