import { Flex, Image, VStack } from '@chakra-ui/react';
import Logo from "../assets/logoBig.png";
import { useColor } from "../hooks/colors";
import MainButton from "../components/mainButton";
import { useState } from 'react';
import* as fcl from "@onflow/fcl";
import './../config';


export default function LogIn() {
    const color = useColor();
    const [connectWallet, setConnectWallet] = useState(false);
    const [connectDiscord, setConnectDiscord] = useState(false);
    const [currentUser, setUser] = useState({addr:undefined, logedIn:false})

    const loginHandler = ()=>{
        fcl.currentUser().subscribe(setUser);
        fcl.authenticate();
    }

    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
            bg={color.background}
            alignItems='center'
        >
            <Flex
                width='428px'
                height='926px'
                flexDirection='column'
                bg={color.background}
                alignItems='center'>

                <Image src={Logo} marginTop='83px' marginBottom='160px' width='380px' height='380px'></Image>
                <VStack width='90%' spacing='32px'>
                    <MainButton title={'Connect Wallet'} handle={loginHandler} />
                    <MainButton title={'Discord'} handle={loginHandler} />
                </VStack>
            </Flex>
        </Flex>
    );
}

