import { Flex, Text, VStack } from '@chakra-ui/react';
import { useColor } from "../hooks/colors";
import Header from "../components/header";
import MainButton from "../components/mainButton";
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function LogIn() {
    const color = useColor();
    const [quest1, setQuest1] = useState(false);
    const [quest2, setQuest2] = useState(false);
    const [quest3, setQuest3] = useState(false);
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
                <VStack>
                    <Text
                        textAlign={'center'}
                        fontSize='24px'
                        color={color.fontBody}
                        marginTop={'75px'}
                        marginBottom={'20px'}
                        paddingY={'40px'}> Greetings, dear familiar. The time has come for your transformation, should you prove your worth in these next tasks.<br></br> However, there are three tasks that you must first complete in to finally prove yourself worthy to join our ranks.
                    </Text>
                    <VStack spacing={'23px'}>
                        <Link to='/homepage/quest1'><MainButton title={'Quest #1'} handle={setQuest1} /></Link>
                        <Link to='/homepage/quest2'><MainButton title={'Quest #2'} handle={setQuest2} /></Link>
                        <Link to='/homepage/quest3'><MainButton title={'Quest #3'} handle={setQuest3} /></Link>
                    </VStack>
                </VStack>
            </Flex>

        </Flex>
    );
}
