import { Text, Flex, Image } from '@chakra-ui/react';
import { useColor } from '../hooks/colors';
import miniLogo from '../assets/MiniLogo.png';
import discord from '../assets/DiscordLogo.png';


export default function Header(props) {
    const color = useColor();

    return (
        <Flex alignItems={'center'} justifyContent={'space-between'} width='90%' marginTop='36px'>

                <Image src={miniLogo}></Image>
                <Text textAlign={'center'} fontSize={'38px'} fontFamily={'Oswald'} fontWeight={'200'} color={color.fontBody} marginX='0 !important'>{props.title}</Text>
                <Image src={discord}></Image>
        
        </Flex>
    )
}