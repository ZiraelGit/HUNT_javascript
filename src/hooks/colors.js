import { useColorModeValue } from '@chakra-ui/react';

export const useColor = () => {
    const background = useColorModeValue('#600000', '#9fffff');
    const comColor = useColorModeValue('#fff4bb', '#000b44');
    const btnHover = useColorModeValue('#b842e1', '#47bd1e');
    const fontBody = useColorModeValue('#ffecba', '#001345');

    return {
        background,
        comColor,
        btnHover,
        fontBody
    };
};