import { Box,Img,Heading,Text,Grid,GridItem } from "@chakra-ui/react"


const  data = [
    {
        image:"https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"ALL"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"DESKS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/home-page/carousel/new-cases-collection-icon-update.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"CASES"
    },
    {
        image:"https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"CHARGING SOLUTIONS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/new-arrival/planner.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"PLANNER"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/new-arrival/airtags.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"AIRTAG CASES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"MACBOOK SLEEVES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/new-arrival/collections.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"COLLECTIONS"
    },
]
function NewArrivals(){

    return(
        <>
        <Box>
            <Img mb={"50px"} src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1"/>
        </Box>
        <Heading mb={"50px"}>NEW ARRIVALS</Heading>

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

export default NewArrivals;