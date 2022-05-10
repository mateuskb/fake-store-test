import { Flex, useColorModeValue } from "@chakra-ui/react"
import { IField } from "../../interfaces/geral"

const NavBarContainer = ({ children , ...extraStyles }: IField) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            p={4}
            bg={useColorModeValue('primary', 'secondary')}
            {...extraStyles}>
            {children}
        </Flex>
    )
}

export default NavBarContainer