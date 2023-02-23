import { Button } from "@chakra-ui/react";


export default function MainButton(props) {
    // const color = useColor();

    return (
        <Button
            // bg={color.comColor}
            // _hover={{ bg: color.btnHover }}
            // color={color.background}
            fontSize='20px'
            textAlign='center'
            fontFamily='Inter'
            width='244px'
            height='65px'
            border='none'
            borderRadius='18px'
            boxShadow={"0px 5px 4px rgba(0, 0, 0, 0.25)"}
            p='6'
            onClick={() => {props.handle()}} >{props.title}
        </Button>
    )
}