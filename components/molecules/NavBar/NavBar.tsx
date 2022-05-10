import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NavBarContainer from "../../atoms/NavBarContainer/NavBarContainer";
import {BsCartFill} from 'react-icons/bs';
import { useCart } from "../../../contexts/cart.context";
import { Title } from "./style";

const NavBar = (props: JSX.IntrinsicAttributes) => {
    const { cart } = useCart();

    return (
        <NavBarContainer {...props}>
            <Title>Fake Store</Title>
            <Button aria-label={"cart"} leftIcon={<BsCartFill/>} color={useColorModeValue('primary', 'primary')} bgColor={useColorModeValue('dark', 'dark')}>{cart.length}</Button>
        </NavBarContainer>
    )
}

export default NavBar