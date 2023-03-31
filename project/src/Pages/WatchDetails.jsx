import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Img
  } from '@chakra-ui/react';

const getData = async (url) =>{
    const res = await fetch(url);
    return await res.json();
};

let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
function WatchDetails(){
    const { user_id } = useParams();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [user,setUser] = useState([]);
    const [btn,setBtn] = useState(false);

    const handleAddToCart = ()=>{
        setBtn("ITEM ADDED TO CART")
         localStorage.setItem("cartProduct",JSON.stringify(cartData));
         cartData.push(user);
      }


    const fetchData = ()=>{
        setLoading(true);
        getData(`http://localhost:8080/products/${user_id}`)
        .then((res)=>{
            setUser(res)
            
        })
        .catch((err)=>{
        console.log(err)
        setError(true) })
        .finally(()=>setLoading(false));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const {image,text,price} = user;

    //console.log(user)

    return (
        <>
        <Container maxW={'7xl'}>
          {/* <Loader /> */}
          <SimpleGrid
          mt={10}
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              <Image
                rounded={'0'}
                alt={'product image'}
                src={
                  image
                }
                fit={'cover'}
                align={'center'}
                
              />
            </Flex>
            <Stack textAlign={"left"} spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
                 {text}
                </Heading>
                <Text
                mt={3}
                mb={-10}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  {price}
                </Text>
               
              </Box>
              <Text>Inclusive of all taxes</Text>
              <Stack textAlign={"left"}
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
              </Stack>
    
              {/* <RouterLink to={`/cart/${id}`}> */}
              <Button
              disabled={btn ? true : false}
              onClick={handleAddToCart}
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('teal.900', 'gray.50')}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}>
                {btn ? "ADDED TO BASKET" : "ADD TO BASKET"}
              </Button>
              {/* </RouterLink> */}
             
              <Text color={"tomato"}>EXCITING OFFERS</Text>
              <Text>BUY 2 GET 20% OFF SITEWIDE</Text>
              <text>FREE DUFFLE BAG ON ALL ORDERS ABOVE Rs. 2499</text>
              <Stack direction="row" alignItems="center" >
                {/* <MdLocalShipping /> */}
                
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        </>
      );
}



export default WatchDetails;