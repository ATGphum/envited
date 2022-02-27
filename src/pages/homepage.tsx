import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./homepage.module.css"

const Home: React.FC = () => {

    const navigate = useNavigate()

    return (
      <Flex className={styles.page}>
        <Flex className={styles.topBar}>
          <Flex>
            <Image src="/logo_white.svg"/>
            <Text className={styles.logoTitle}>envited</Text>
          </Flex>
          <Flex className={styles.logInWrapper}>
            <Text className={styles.logIn}>Log in</Text>
          </Flex>
        </Flex>
        <Flex className={styles.pageBody}>
        <Flex className={styles.middleWrapper}>
          <Text className={styles.pageHeader}>
            Facebook events without Facebook.
          </Text>
          <Text className={styles.pageDescription}>
            Easily host and share events with your friends across any social
            media.
          </Text>
          <Box className={styles.pitchWrapper}>
            <Text className={styles.pitch} onClick={() => navigate("/create")}>&#127881; Create my next event</Text>
          </Box>
        </Flex>
        <Flex className={styles.imageWrapper}>
          <Image className={styles.image1} src="/Left.svg" />
          <Image className={styles.image3} src="/Right.svg" />
          <Image className={styles.image2} src="/Middle.svg" />
        </Flex>
        </Flex>
      </Flex>
    );
}

export default Home;