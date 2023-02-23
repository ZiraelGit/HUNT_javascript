import { Flex, Text, VStack } from '@chakra-ui/react';
import { useColor } from "../hooks/colors";
import Header from "../components/header";
import MainButton from "../components/mainButton";
import CameraCapture from "../components/cameraCapture";
import { useState, useEffect } from 'react';


export default function LogIn() {
    const color = useColor();
    const [quest1, setQuest1] = useState(false);
    console.log('qwer', quest1)

    // useEffect(()=>{setQuest1(false)});

    return (
        <Flex
            width={'100%'}
            height={'100%'}
            flexDirection='column'
            bg={color.background}
            alignItems='center'>
            <Flex
                height='926px'
                width='428px'
                bg={color.background}
                flexDirection={'column'}
            >
                <Header title={'ox8n439c0n'} />
                {   quest1 ? (<CameraCapture />) : (
                    <VStack>
                        <Text
                            fontFamily={'Oswald'}
                            fontSize={'32px'}
                            fontWeight={'200'}
                            textAlign={'center'}
                            marginTop={'80px'}
                        >
                            {'Quest #1'}
                        </Text>
                        <Text
                            fontFamily={'Oswald'}
                            fontSize={'32px'}
                            fontWeight={'200'}
                            textAlign={'center'}
                            marginTop={'30px'}
                        >
                            A Fine Vintage
                        </Text>
                        <Text
                            fontFamily={'Nova Flat'}
                            fontSize={'24px'}
                            fontWeight={'400'}
                            textAlign={'center'}
                            paddingY={'50px'}
                            marginBottom={'35px'}
                        >
                            As you know, the quality of our ‘sustenance’ is of utmost importance.<br></br> First you must procure a large sample of the finest blood. Be it a Merlo or Rioja, or something more exotic, you must find the finest vintage.
                        </Text>
                        <MainButton title={'Yes, Master'} handle={setQuest1} />
                    </VStack>
                )}
            </Flex>
        </Flex>
    );
}
