import { Image, Grid, GridItem, Flex } from "@chakra-ui/react";
import man1 from "../assets/1.png";
import man2 from "../assets/2.png";
import man3 from "../assets/3.png";
import man4 from "../assets/4.png";
import { useState } from "react";

export default function ReviewImage(props) {

    return (
        <Flex flexDirection='column' alignItems={'center'}>
            <Grid
                h='350px'
                w='350px'
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0.4}
            >
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man1} _hover={{border:'2px yellow solid'}} cursor='pointer' onClick={()=>{props.handle(1);props.setUrl({man1})}}></Image></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man2} _hover={{border:'2px yellow solid'}} cursor='pointer' onClick={()=>{props.handle(2);props.setUrl({man2})}}></Image ></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man3} _hover={{border:'2px yellow solid'}} cursor='pointer' onClick={()=>{props.handle(3);props.setUrl({man3})}}></Image></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man4} _hover={{border:'2px yellow solid'}} cursor='pointer' onClick={()=>{props.handle(4);props.setUrl({man4})}}></Image></GridItem>
            </Grid>
        </Flex>
    )
}