import { Box,Img,Heading,Text,Grid,GridItem } from "@chakra-ui/react"

const  data = [
    {
        image:"https://images.dailyobjects.com/marche/icons/sub-category/wallets.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"WALLETS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/crossbody-bags-intermediate-filter-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"CROSSBODY BAGS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/messenger-bag-filter-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"MESSENGER BAGS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/sub-category/tote-bags.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"TOTE BAGS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/sub-category/backpacks.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"BACKPACKS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/sub-category/duffle-bags.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"DUFFLE BAGS"
    },
    {
        image:"https://images.dailyobjects.com/marche/tmp/pouches-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"POUCHES"
    },
    
]

function BagsWallets(){

    return(
        <>
        <Box>
            <Img mb={"50px"} src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1"/>
        </Box>
        <Heading mb={"50px"}>BAGS & WALLETS</Heading>

        {
            <Box maxW="80%" m={"auto"}>

            <Grid border="1px solid #E2E8F0" templateColumns="repeat(4,1fr)" gap={"20px"}>

        {
        data.map((el)=> (
            <GridItem key={el.id}  pb={"20px"} mt={"20px"}>
                <Img maxW="100%"src={el.image} borderRadius={"50%"} ml={"40px"}/>
                <Text fontWeight={"bold"}>{el.text}</Text>
                
            </GridItem>
             ))
         }
            </Grid>
    </Box>
        }
        </>
    )
}

export default BagsWallets;