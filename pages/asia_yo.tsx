import React from "react";
import {
  Heading,
  HStack,
  chakra,
  Box,
  Flex,
  Button,
  Stack,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { FaDiscord, FaPhoneAlt } from "react-icons/fa";


const ZH = {
  heroTitle: "Asia YO x 宙獅大旅社 \n測試頁 🕍️",
  // subtitle:
    // "雄獅集團的 Web3 社群平台，以旅遊為核心。\n賦能食宿遊購行領域，打造華語旅遊 Web3 最佳社群",
  connectWalletDesc: "更多的訂房折扣 ,優惠活動將在此陸續推出❗️❗️❗️👍️👍️👍️",
  discordDesc: "追蹤最新活動消息，\n請加入 Metalion Discord...😀️😀️😀️",
  travelshowDesc: "AsiaYO \n😋️😋️", //Metalion Lodging Pass \n（宙獅大旅社）", //"宙獅計劃Metalion，\n搶先註冊！",
  redeemTitle: "連接錢包查看活動 🎉\n加入 Discord 抽獎慶祝 🎁",
  hero2Title: "宙獅元宇宙開台慶\n6/6 活動正式開跑",
  cta2Ttile: "加入Discord 一同狂歡 🎉",
  // checkRedeemBtn: "甜點兌換查詢",
  pleaseSignTitle: "錢包連結成功，請於錢包進行簽署完成登入",
  loginSuccessfulTitle: "登入成功",
  // btns text
  // connectWalletTitle: "連接錢包",
  joinDiscordTitle: "😍️please click here for visiting AsiaYO🍓️🍄️🍔️", //加入 Discord",
  travelshowVisitorTitle: "@雄獅旅遊", //ASIA YO", //領取 NFT", "Metalion X Qubic",
  signWalletTitle: "簽署綁定",
  enterPortalTitle: "👽️this is a beta page👽️", //前往兌換中心",
};



export default function ConnectWallet() {
  const { connect, isAuth } = useAuthContext();

  const i18n = ZH;

  const ConnectionStatus = () => {
    return <Unconnected />;
  };

  const Unconnected = () => (
    <Stack
      direction={["column"]}
      justifyContent={"center"}
      gap={15}
      color="red"
    >
      <Heading
        w="full"
        whiteSpace={{ base: "pre-wrap", sm: "normal" }}
        fontSize={{ base: "xl", md: "8xl" }}
      >
        {i18n.heroTitle}
      </Heading>
      <chakra.span
        whiteSpace={{ base: "normal", sm: "pre-wrap" }}
        mt={6}
        display="block"
        fontSize={{ base: "lg", sm: "2xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="white"
        mb={6}
      >
        {i18n.subtitle}
      </chakra.span>

      <Stack
        pt={{ base: "10px", lg: "50px" }}
        direction={{ base: "column", lg: "row" }}
        justifyContent={["left", "center"]}
        gap={{ base: 15, lg: 20 }}
      >
        <VStack
          maxWidth={{ base: "full", lg: "md" }}
          alignItems={{ base: "left", lg: "center" }}
          flex="1"
          spacing={10}
        >
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "2xl", lg: "4xl" }}
          >
            {i18n.connectWalletDesc}
          </Heading>
          <Box>
            {isAuth ? (
              <NextLink passHref href="/tokens">
                <Button
                  w="full"
                  display="inline-flex"
                  fontSize={{ base: "4xl", sm: "6xl" }}
                  alignItems="center"
                  justifyContent="center"
                  py={10}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"red.500"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  {i18n.enterPortalTitle}
                </Button>
              </NextLink>
            ) : (
              <Button
                w={{ base: "full" }}
                leftIcon={<MdOutlineAccountBalanceWallet />}
                alignItems="center"
                justifyContent="center"
                py={0}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={""}//"red.0"}
                _hover={{bg: ""
                }} //"yellow.0"
                // TODO Check connect type
                onClick={connect as () => Promise<void>}
              >
                {i18n.connectWalletTitle}
              </Button>
            )}

            <NextLink passHref href="/redeem-check">
              <Button
                mt={5}
                w={{ base: "full" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color={"gray.600"}
                bg={"white"}
                colorScheme="gray"
              >
                {i18n.checkRedeemBtn}
              </Button>
            </NextLink>
          </Box>
        </VStack>
        <VStack
          maxWidth={{ base: "full", lg: "md" }}
          alignItems={{ base: "left", lg: "center" }}
          flex="1"
          spacing={10}
        >
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "4xl", lg: "4xl" }}
          >
            {i18n.discordDesc}
          </Heading>
          <Button
            // leftIcon={<FaDiscord />}
            w="full"
            as={"a"}
            target="_blank"
            href="https://discord.gg/metalion"
            // href="https://discord.gg/Muj6gwSX"
            rel="noreferrer"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "4xl",lg: "3xl" }}
            py={10}
            border="solid transparent"
            fontWeight="bold"
            rounded="lg"
            color="white"
            bg="gray.0"
            _hover={{
              bg: "gray.700",
            }}
          >
          
            {i18n.joinDiscordTitle}
          </Button>
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "4xl", lg: "4xl" }}
          >
          {i18n.travelshowDesc}
          </Heading>
          <Button
            // leftIcon={<FaDiscord />}
            w="full"
            as={"a"}
            target="_blank"
            href= "https://liontravel.qubic.market/products/147092"  
            //"https://forms.gle/XLJXEKZUGyj48Xi17"
            rel="noreferrer"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "4xl", lg: "4xl" }}
            py={10}
            border="solid transparent"
            fontWeight="bold"
            rounded="lg"
            color="white"
            bg="black.000"
            _hover={{
              bg: "gray.700",
            }}
          >
            {i18n.travelshowVisitorTitle}
          </Button>
        </VStack>
      </Stack>
      <Box>
        <HStack mx="auto" mt="40px" justify={{ base: "left", sm: "center" }}>
          <FaPhoneAlt size="0px" />
          <Heading size="lg" display="inline-block">
雄獅旅遊
          </Heading>
        </HStack>
      </Box>
    </Stack>
  );

  return (
    <Flex
      p={{ base: "30px", md: 50 }}
      minH={"xl"}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="" > 
        <Box
          px={4}
          py={20}
          maxWidth="4xl"
          textAlign={{ base: "left", md: "center" }}
        >
          <ConnectionStatus />
        </Box>
      </Flex>
    </Flex>
  );
}




