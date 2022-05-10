import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NavBarContainer from "../atoms/NavBarContainer";
import {BsCartFill} from 'react-icons/bs';

const NavBar = (props: JSX.IntrinsicAttributes) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer {...props}>
            <h1>Fake Store</h1>
            <Button aria-label={"cart"} leftIcon={<BsCartFill/>} color={useColorModeValue('primary', 'primary')} bgColor={useColorModeValue('dark', 'dark')}>5</Button>
        </NavBarContainer>
    )
}

export default NavBar