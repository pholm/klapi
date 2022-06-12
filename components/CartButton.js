import { useSelector } from 'react-redux';
import { Box, Button, Circle, HStack } from '@chakra-ui/react';
import {BsFillBasket2Fill} from 'react-icons/bs'

export default function CartButton({ onOpen }) {
    const amount = useSelector((state) =>
        state.cart.items.reduce((acc, item) => acc + item.amount, 0)
    );

    return (
        <>
        <Box
            onClick={onOpen}
            as='button'
            margin='1em'
        >
            <HStack>
                <Box
                    position='relative'
                >
                    <BsFillBasket2Fill size={22}/>
                    <Circle
                        position='absolute'
                        right='-12px'
                        top='-15px'   
                        size='20px'
                        bg='red'
                        color='white'
                        display={amount>0 ? 'block' : 'none'}
                                                
                    >
                        {amount}
                    </Circle>
                </Box>
                <Box>
                    Ostoskori
                </Box>
            </HStack>
            
        </Box>
        
        
        </>
    );
}
