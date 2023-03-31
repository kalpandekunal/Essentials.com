import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
    SimpleGrid,
    Grid,
    GridItem
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import Modal from "./Modal";
  import Total from "./Total";
  
  let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
  //console.log(cartData);
  //console.log(cartData[0].title)
  let sum=0;
  cartData.forEach((el)=>{
    sum = sum+ el.price;
  })
  
  export default function Cart() {
  
    const [quantity, setQuantity] = useState(1);
    const [counter,setCounter]= useState(1);
  
    const handleQuantity = (value) => {
      setQuantity(quantity + value);
    };
  
  
  
    
  
    return (
      //   <>
      // <div style={{ marginTop: "50px", marginBottom: "70px",marginLeft:"210px",width:"100%"}}>
      
      // {/* <h1>{counter}</h1>
      // <button onClick={()=> setCounter((prev)=>prev+1)} bg={"grey"}>Add</button>
      // <button onClick={()=> setCounter((prev)=>prev-1)} >Reduce</button> */}
          
      //  {cartData.map((ele) => ( 
        
      //     <SimpleGrid
      //     key={ele.id}
            
      //       w={"100%"}
      //       margin={"auto"}
           
      //       border={"0px solid red"}
      //       columns={{ base: 1, sm: 1, md: 2 }}
      //       columnGap={10}
      //       spacing={9}
      //     >
      //       <Flex
      //         // alignItems={"flex-start"}
      //         border={"0px solid grey"}
      //         role={"group"}
      //         p={2}
      //         //   maxW={'330px'}
      //         maxW={"100%"}
      //         ml={"30px"}
      //         //bg={useColorModeValue("white", "gray.800")}
      //         boxShadow={"xl"}
      //         rounded={"0g"}
      //         pos={"relative"}
      //         zIndex={1}
      //       >
      //         <Box
      //         key={ele.id}
      //           border={"0px solid black"}
                
      //           mt={-12}
      //           mr={12}
               
      //           height={"220px"}
                
      //         >
      //           <Image
                  
      //             height={350}
      //             maxW={"100%"}
      //             objectFit={"cover"}
      //             src={ele.image}
      //           />
      //         </Box>
      //         <Stack
      //           ml={"10px"}
      //           textAlign={"left"}
      //         > 
      //           <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
      //             {ele.text}
      //           </Heading>
      //           <Stack direction={"row"} align={"center"}>
      //             <Text fontWeight={800} fontSize={"xl"}>
      //               {ele.price}
      //             </Text>
      //             <Text textDecoration={"line-through"} color={"gray.600"}>
      //               {Math.floor(Math.random() * 1000)}
      //             </Text>
      //           </Stack>
      //           <Flex align={"center"}>
      //             <Button
      //               disabled={quantity === 1}
      //               onClick={() => handleQuantity(-1)}
      //             >
      //               -
      //             </Button>
      //             <Text mr={2} ml={2} fontSize={"md"} fontWeight={600}>
      //               {quantity}
      //             </Text>
      //             <Button onClick={() => handleQuantity(1)}>+</Button>
      //           </Flex>
      //         </Stack>
      //       </Flex>
            
      //     </SimpleGrid>
      //   ))} 
      //   </div>
      //   <Box>
      //   <Total price={sum} quantity={quantity} />
      //   </Box>
      //   </>
<Box>
      <Grid border="1px solid #E2E8F0" templateColumns="repeat(4,1fr)" gap={"20px"} alignContent={"center"}>

      {
      cartData.map((el)=> (
          <GridItem key={el.id}  pb={"20px"} mt={"20px"} >
              <Image maxW="100%"src={el.image}  ml={"60px"}/>
              <Text >{el.text}</Text>
              <Text fontWeight={"bold"} mb={"15px"}>{el.price}</Text>
              <Flex align={"center"}>
              <Button  disabled={counter === 1}
                     onClick={() =>setCounter(counter-1)} ml={"100px"}>-</Button>
              <Text>{counter}</Text>
              <Button onClick={() => setCounter(counter+1)}>+</Button>
              </Flex>
          </GridItem>
           ))
       }
          </Grid>
          <Total price={sum} quantity={quantity} />
          </Box>
    )
  }
  