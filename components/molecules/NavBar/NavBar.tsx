import { Button, Spacer, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NavBarContainer from "../../atoms/NavBarContainer/NavBarContainer";
import {BsCartFill, BsList} from 'react-icons/bs';
import { useCart } from "../../../contexts/cart.context";
import { Title } from "./style";
import { useRouter } from 'next/router'

const NavBar = (props: JSX.IntrinsicAttributes) => {
    const { cart } = useCart();
    const router = useRouter()

    return (
        <NavBarContainer {...props}>
            <Title>Fake Store</Title>
            <Spacer/>
            <Button marginRight={4} aria-label={"lista"} leftIcon={<BsList/>} color={useColorModeValue('primary', 'primary')} bgColor={useColorModeValue('dark', 'dark')} onClick={()=>router.push('/')}> Listagem</Button>
            <Button aria-label={"cart"} leftIcon={<BsCartFill/>} color={useColorModeValue('primary', 'primary')} bgColor={useColorModeValue('dark', 'dark')} onClick={()=>router.push('/cart')}>{cart.length}</Button>
        </NavBarContainer>
    )
}

export default NavBar