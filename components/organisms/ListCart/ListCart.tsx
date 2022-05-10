import React from "react";
import {  Text, Button, Flex, Grid } from '@chakra-ui/react'
import ProductItem from "../../molecules/ProductItem/ProductItem";
import { CartListItem } from "../../../interfaces/cart";
import { useCart } from "../../../contexts/cart.context";
import { useRouter } from 'next/router'

const ListCart = () => {
    
    const { cart,  addProductToCart, getQuantity, subtractProductToCart } = useCart();
    const router = useRouter()

    console.log(cart);
    return (
        <Flex>
            {(cart.length > 0 ) ?
                <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                    {
                        cart.map((item: CartListItem, index: React.Key | null | undefined)=> {
                            return(
                                <ProductItem product={item.product} key={index}/>                          
                            )
                        })
                    }
                </Grid>
                :
                <Flex marginLeft='auto' marginRight='auto' flexDirection='column'>
                    <Text textAlign='center'>
                        Nenhum item no carrinho
                    </Text>
                    <Button onClick={()=>router.push('/')}>
                        Voltar para a listagem
                    </Button>
                </Flex>

            }
        </Flex>
        
    );
}

export default ListCart