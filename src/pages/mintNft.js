import { Text, Flex, VStack } from "@chakra-ui/react";
import { useColor } from "../hooks/colors";
import Header from "../components/header";
import MintBody from "../components/mintBody";
import MainButton from "../components/mainButton";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function MintPage() {
    const color = useColor();
    const [createCharacter, setCreateCharacter] = useState(false);

    return(
        <Flex
            width={'100%'}
            height={'100%'}
            flexDirection='column'
            bg={color.background}
            alignItems='center'>
            <Flex
                height='926px'
                width='428px'
                alignItems={'center'}
                bg={color.background}
                flexDirection={'column'}
            >
                <Header title={'ox8n439c0n'} />
                <MintBody />
                <Link to='/mintNFT/reviewImage'><MainButton title={'Create Character'} handle={setCreateCharacter}></MainButton></Link>
            </Flex>
        </Flex>
    )
}