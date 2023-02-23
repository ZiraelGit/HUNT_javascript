import { Image, Flex, VStack } from "@chakra-ui/react";
import { useColor } from "../hooks/colors";
import Header from "../components/header";
import ReviewImage from "../components/reviewImage1";
import MainButton from "../components/mainButton";
import { useState } from "react";


export default function MintPage() {
    const color = useColor();
    const [createCharacter, setCreateCharacter] = useState(false);
    const [imageSelected, setImageSelected] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    console.log(imageUrl);

    return (
        <Flex
            width={'100%'}
            height={'100%'}
            flexDirection='column'
            bg={color.background}
            alignItems='center'>
            <VStack
                height='926px'
                width='428px'
                alignItems={'center'}
                bg={color.background}
                flexDirection={'column'}
                spacing='20px'
            >
                <Header title={'ox8n439c0n'} />
                <Flex mb='70px !important' width='350px' height='350px'>
                    {imageSelected ? (<Image src={imageUrl} width='100%' height={'100%'}></Image>):(<ReviewImage handle={setImageSelected} setUrl={setImageUrl}/>)}
                    
                </Flex>
                <MainButton title={'Re-roll'} handle={setCreateCharacter} />
                <MainButton title={'Back'} handle={setImageSelected} />
            </VStack>
        </Flex>
    )
}