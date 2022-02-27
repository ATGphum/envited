import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./homepage.module.css"

const Home: React.FC = () => {

    const navigate = useNavigate()

    return (
      <Flex className={styles.page}>
        <Flex className={styles.topBar}>
          <Flex>
            <Text className={styles.logoTitle}>envited</Text>
          </Flex>
          <Flex className={styles.logInWrapper}>
            <Text className={styles.logIn}>Log in</Text>
          </Flex>
        </Flex>
        <Flex className={styles.middleWrapper}>
          <Text className={styles.pageHeader}>
            Facebook events without Facebook.
          </Text>
          <Text className={styles.pageDescription}>
            Easily host and share events with your friends across any social
            media.
          </Text>
          <Box className={styles.pitchWrapper}><Text className={styles.pitch}>&#127881; Create my next event</Text></Box>
        </Flex>
      </Flex>
    );
}

export default Home;