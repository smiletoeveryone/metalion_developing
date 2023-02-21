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
  heroTitle: "Metalion\n俱樂部 🎉",
  subtitle:
    "雄獅集團的 Web3 社群平台，以旅遊為核心。\n賦能食宿遊購行領域，打造華語旅遊 Web3 最佳社群",
  // connectWalletDesc: "gonna 兌換咖啡，\n活動已於8/5結束! \n\n更多的優惠活動將持續推出...",
  connectWalletDesc: "😋️😋️😋️ 海內外特色旅宿/主題民宿 \n無上限最高6.5%現金回饋 (註.1)\n#包棟 #秘境 #好友出遊\n\nAsia Yo的訂房優惠即將展開 ，\n立即連結您的錢包，\n會出現專屬的折扣連結喔👍️👍️👍️",
  discordDesc: "追蹤最新活動消息，\n請加入 Metalion Discord ",
  // travelshowDesc: "Metalion Lodging Pass \n（宙獅大旅社）", //"宙獅計劃Metalion，\n搶先註冊！",
  travelshowDesc: "😋️😋️😋️宙獅精選飯店\n\n海內外精選星級飯店\n無上限最高6.5%現金回饋 (註.1)\n即時房源，即訂即住.👍️👍️👍️", //"宙獅計劃Metalion，\n搶先註冊！",
  redeemTitle: "連接錢包查看活動 🎉\n加入 Discord 抽獎慶祝 🎁",
  hero2Title: "宙獅元宇宙開台慶\n6/6 活動正式開跑",
  cta2Ttile: "加入Discord 一同狂歡 🎉",
  // checkRedeemBtn: "甜點兌換查詢",
  // connectWalletTitle_asiayo: "😍️😍️😍️ click here for visiting AsiaYo! 💝️💝️💝️",
  pleaseSignTitle: "錢包連結成功，請於錢包進行簽署完成登入",
  loginSuccessfulTitle: "登入成功",
  // btns text
  connectWalletTitle: "連接錢包",
  joinDiscordTitle: "加入 Discord",
  travelshowVisitorTitle: "登入宙獅大旅社", // "Metalion X Qubic",
  signWalletTitle: "簽署綁定",
  enterPortalTitle: "前往兌換中心",
  enterPortalTitle_asiayo: "😍️😍️😍️ click here for visiting Asia Yo! 💝️💝️💝️",
  checkRedeemBtn_qubic: "登入/註冊 Qubic 錢包❗️❗️❗️", 
  noteDesc:"註:\n\n1. 宙獅大旅社NFT訂房使用期限為2023/12/31止.住房需於2024/12/31前入住完畢.\n2. 需透過宙獅大旅社網頁專屬連結至訂房網站. (重要)\n3. 入住完成後30天內於宙獅Discord提供收款帳號即可獲得現金回饋",
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
      gap={5}
      color="white"
    >
      <Heading
        w="full"
        whiteSpace={{ base: "pre-wrap", sm: "normal" }}
        fontSize={{ base: "5xl", md: "4xl" }}
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
        gap={{ base: 5, lg: 80 }}
      >
        <VStack
          maxWidth={{ base: "full", lg: "md" }}
          alignItems={{ base: "left", lg: "center" }}
          flex="1"
          spacing={100}
        >
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "2xl", lg: "2xl" }}
          >
            {i18n.connectWalletDesc}
          </Heading>
          
          
          <Box>
            {isAuth ? (
              <NextLink passHref href="/tokens">
              
              <Button
                  w="full"
                  as={"a"}
                  target="_blank"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  py={6}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"red.700"}
                  _hover={{
                    bg: "yellow.400",
                  }}
                >
                  {i18n.enterPortalTitle}
                </Button>
                
              
                </NextLink>
              
               ):
               
               (
              <Button
                w={{ base: "full" }}
                leftIcon={<MdOutlineAccountBalanceWallet />}
                fontSize={{ base: "lg", sm: "2xl" }}
                alignItems="center"
                justifyContent="center"
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={"red.600"}
                _hover={{
                  bg: "red.900",
                }}
                // TODO Check connect type
                onClick={connect as () => Promise<void>}
                
                              >
                            
                {i18n.connectWalletTitle}
              </Button>
              )}
              
              {isAuth ? (
              <NextLink passHref href="https://asiayo.com/zh-tw/?aff_id=537"> 
              
              <Button
                  mt={5}
                  w="full"
                  as={"a"}
                  target="_blank"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "3xl",lg: "3xl" }}
                  py={30}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"blue.700"}
                  _hover={{
                    bg: "blue.400",
                  }}
                >
                  {i18n.enterPortalTitle_asiayo}
                </Button>
                
              
                </NextLink>
              
               ):
               
               (
              <Button
                mt={5}
                w={{ base: "full" }}
                //leftIcon={<MdOutlineAccountBalanceWallet />}
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "3xl",lg: "3xl" }}
                py={6} //default=6
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={""} //blue.600
                _hover={{
                  bg: "", //blue.700
                }}
                // TODO Check connect type
                // onClick={connect as () => Promise<void>}
                
                              >
                            
                {i18n.connectWalletTitle_asiayo}
              </Button>
              )}
            
            

            <NextLink passHref href="{/redeem-check}"> 
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
                bg={""} //white
                colorScheme="" //gray
              >
                {i18n.checkRedeemBtn}
                </Button>
                </NextLink>
              
              
              <NextLink passHref href="https://wallet.qubic.app/home"> 
                                                                               
              <Button
                mt={5}
                w={{ base: "full" }}
                as={"a"}
                target="_blank"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "3xl",lg: "3xl" }}
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color={"gray.600"}
                bg={"yellow"}
                colorScheme="gray"
              >
                {i18n.checkRedeemBtn_qubic} 
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
            fontSize={{ base: "24px", lg: "xl" }}
          >
          {i18n.travelshowDesc}
          </Heading>
          <Button
            w={{ base: "full" }}
            mt={15}
            // leftIcon={<FaDiscord />}
            w="full"
            as={"a"}
            target="_blank"
            href= "https://liontravel.qubic.market/"
            //"https://liontravel.qubic.market/products/147092"  
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
            bg="black"
            _hover={{
              bg: "green.400",
            }}
          >
            {i18n.travelshowVisitorTitle}
          </Button>
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "20x", lg: "2xl" }}
          >
            {i18n.discordDesc}
          </Heading>
          <Button
            mt={5}
            w={{ base: "full" }}
            leftIcon={<FaDiscord />}
            w="full"
            as={"a"}
            target="_blank"
            href="https://discord.gg/metalion"
            // href="https://discord.gg/Muj6gwSX"
            rel="noreferrer"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "24px",lg: "3xl" }}
            py={6}
            border="solid transparent"
            fontWeight="bold"
            rounded="lg"
            color="white"
            bg="purple.600"
            _hover={{
              bg: "purple.700",
            }}
          >
          
            {i18n.joinDiscordTitle}
          </Button>
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            textAlign="left"
            fontSize={{ base: "20x", lg: "1xl" }}
          >
            {i18n.noteDesc}
          </Heading>
        </VStack>
      </Stack>
      <Box>
        <HStack mx="auto" mt="40px" justify={{ base: "left", sm: "center" }}>
          <FaPhoneAlt size="20px" />
          <Heading size="lg" display="inline-block">
            客服專線: 02-87939698
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
      <Flex w="full">
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
