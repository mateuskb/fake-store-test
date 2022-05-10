import { Text, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { FixedFooter } from "./style";

const Footer = () => {

    return (
        <FixedFooter>
            <Flex
                bg="white"
                width="100%"
                justifyContent="center"
                alignItems="center"
                direction="column"
                boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
                padding={4}
                >
                <HStack spacing={8} mb={8}>
                    <Text color="gray.400">Desenvolvido por Mateus Ribeiro</Text>
                </HStack>
            </Flex>
        </FixedFooter>
    )
}

export default Footer