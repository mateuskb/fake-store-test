import { Image, GridItem, Badge, Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useCart } from "../../../contexts/cart.context";
import Product from "../../../interfaces/product";

interface IProductItem {
    product: Product
}

const ProductItem = ({product}: IProductItem) => {
    const { addProductToCart, getQuantity, subtractProductToCart } = useCart();

    return (
        <GridItem w='500px' h='230px' borderColor='secondary' border='1px solid' borderRadius='10px' overflow='hidden' >
            <Flex flexDirection='row' height='230px'>
                <Image src={product.image} alt={product.image} height='auto' width='150px' maxHeight={'200px'} marginTop='auto' marginLeft={3} marginBottom='auto'/>
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            {product.category}
                        </Badge>
                    </Box>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                        width='300px'
                        >
                        {product.title}
                    </Box>

                    <Box>
                        <Text noOfLines={2} width='280px'>
                            {product.description}
                        </Text>
                        
                    </Box>
                    <Box color={'secondary'} fontSize='1.2rem'>
                        R$ {product.price}
                    </Box>
                    <Box marginTop={1}>
                        <Flex flexDirection='row'>
                            <Button
                                bgColor={'alert'}
                                color={'light'}
                                onClick={() => subtractProductToCart({product: product, quantity:1})}
                            >
                                -
                            </Button>
                            <Button
                                bgColor={'light'}
                            >
                                {getQuantity(product.id)}
                            </Button>
                            <Button
                                bgColor={'primary'}
                                onClick={() => addProductToCart({product: product, quantity:1})}
                            >
                                +
                            </Button>
                        </Flex>
                    </Box>

                </Box>
            </Flex>
        </GridItem>  
    )
}

export default ProductItem