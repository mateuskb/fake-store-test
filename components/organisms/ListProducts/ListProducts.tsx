import React, { useCallback, useEffect, useState } from "react";
import { fetchProducts } from "../../../api/Products";
import Product from "../../../interfaces/product";
import { Center, Flex, Text, Spinner, Grid, GridItem } from '@chakra-ui/react'
import ProductItem from "../../molecules/ProductItem/ProductItem";

const ListProducts = () => {
    
    const [isLoading, toggleIsLoading] = useState<Boolean>(false);
    const [Products, setProducts] = useState<Product[]>([]);
    const handleGetStatus = useCallback(async (query?: string) => {
      try {
        toggleIsLoading(true);
  
        const response = await fetchProducts();
  
        toggleIsLoading(false);
  
        setProducts(response.data);
      } catch (error) {
        toggleIsLoading(false);
      }
    }, []);
  
    useEffect(() => {
      handleGetStatus();
    }, []);

    return (
        <Flex>
            {isLoading && 
                <Center w='100%' h='200px'>
                    <Spinner />
                </Center>
            }
            {Products.length > 0 && !isLoading &&
                <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                    {
                        Products.map((item, index)=> {
                            return(
                                <ProductItem product={item}  key={index}/>                          
                            )
                        })
                    }
                </Grid>
            }
        </Flex>
        
    );
}

export default ListProducts