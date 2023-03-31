
import { Box,Img,Text,Grid,GridItem,Heading } from "@chakra-ui/react"

const  data = [
    {
        image:"https://images.dailyobjects.com/marche/tmp/phone-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"PHONE CASES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/cases-sleeves-intermediate-image.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"LAPTOP SLEEVES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/airpod-case-cover-updated.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1",
        text:"AIRPODS CASE COVER"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/ipad-new.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"IPAD COVERS & SLEEVES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/passport.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"PASSPORT WALLETS"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/eyewear-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"EYEWEAR CASES"
    },
    {
        image:"https://images.dailyobjects.com/marche/icons/category/airtag-category-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1",
        text:"AIRTAGS CASES"
    },
    
]

function CasesSleeves(){

    return(
        <>
        <Box>
            <Img mb={"50px"} src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1"/>
        </Box>
        <Heading mb={"50px"}>CASES & SLEEVES</Heading>

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

export default CasesSleeves;