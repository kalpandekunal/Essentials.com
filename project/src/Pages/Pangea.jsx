import { AspectRatio, Flex,Img,Grid,GridItem } from "@chakra-ui/react";
import { Text,Box } from "@chakra-ui/react";

const data = [
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/charcoal-pole-convertible-totepack-images/Charcoal-Pole-Convertible-Totepack-Vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Charcoal Pole Convertible Totepack",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/amber-pole-convertible-totepack-images/Amber-Pole-Convertible-Totepack-Vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Amber Pole Convertible Totepack",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/deep-sea-pole-convertible-totepack-images/Deep-Sea-Pole-Convertible-Totepack-Vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Dep Sea Pole Convertible Totepack",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/kelp-pole-convertible-totepack-images/Kelp-Pole-Convertible-Totepack-Vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Pole Convertible Totepack",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/charcoal-orbit-fanny-images/Charcoal-Orbit-Fanny-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Charcoal Orbit Fanny",
        price:"Rs.1799"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/charcoal-orbit-fanny-images/Charcoal-Orbit-Fanny-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Orbit Fanny",
        price:"Rs.1799"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/deep-sea-orbit-fanny-images/Deep-Sea-Orbit-Fanny-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Deep Sea Orbit Fanny",
        price:"Rs.1799"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/deep-sea-orbit-fanny-images/Deep-Sea-Orbit-Fanny-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Red Clay Orbit Fanny",
        price:"Rs.1799"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1201/red-clay-taiga-backpack-images/Red-Clay-Taiga-Backpack-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Deep Sea Taiga Backpack",
        price:"Rs.3999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1201/deep-sea-taiga-backpack-images/Deep-Sea-Taiga-Backpack-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Amber Taiga Backpack",
        price:"Rs.3999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1201/red-clay-taiga-backpack-images/Red-Clay-Taiga-Backpack-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Taiga Backpack",
        price:"Rs.3999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1201/deep-sea-taiga-backpack-images/Deep-Sea-Taiga-Backpack-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Red Clay Taiga Backpack",
        price:"Rs.3999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/charcoal-cobble-sling-images/Charcoal-Cobble-Sling-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Charcoal Cobble Sling",
        price:"Rs.1499"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/deep-sea-cobble-sling-images/Deep-Sea-Cobble-Sling-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Amber Cobble Sling",
        price:"Rs.1499"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/charcoal-cobble-sling-images/Charcoal-Cobble-Sling-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Cobble Sling",
        price:"Rs.1499"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1203/deep-sea-cobble-sling-images/Deep-Sea-Cobble-Sling-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Deep Sea Cobble Sling",
        price:"Rs.1499"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/deep-sea-trunk-tote-images/Deep-Sea-Trunk-Tote-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Deep Sea Trunk Tote",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/deep-sea-trunk-tote-images/Deep-Sea-Trunk-Tote-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Amber Trunk Tote",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/deep-sea-trunk-tote-images/Deep-Sea-Trunk-Tote-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Charcoal Trunk Tote",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1204/deep-sea-trunk-tote-images/Deep-Sea-Trunk-Tote-vw.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Trunk Tote",
        price:"Rs.2999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1202/deep-sea-meridian-convertible-briefpack-images/Deep-Sea-Meridian-Convertible-Briefpack-9th.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Deep Sea Meridian Convertible Briefpack",
        price:"Rs.1999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1202/red-clay-meridian-convertible-briefpack-images/Red-Clay-Meridian-Convertible-Briefpack-9th.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Kelp Meridian Convertible Briefpack",
        price:"Rs.1999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1202/deep-sea-meridian-convertible-briefpack-images/Deep-Sea-Meridian-Convertible-Briefpack-9th.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Charcoal Meridian Convertible Briefpack",
        price:"Rs.1999"
    },
    {
        image:"https://images.dailyobjects.com/marche/product-images/1202/red-clay-meridian-convertible-briefpack-images/Red-Clay-Meridian-Convertible-Briefpack-9th.png?tr=cm-pad_resize,v-2,w-319,h-509,dpr-1",
        text:"Red Clay Meridian Convertible Briefpack",
        price:"Rs.1999"
    },
];

function Pangea(){

    return(
        <>
        <AspectRatio maxW='100%' ratio={21/9}>
            <iframe
                title="Bags"
                src="https://ik.imagekit.io/dailyobjects/colllectionPage/pet-collection/desktop-pet-banner-video.mp4?tr=q-50,f-webm"
                allowFullScreen
                />
        </AspectRatio>
        <Box mt={"80px"}>
        <Text fontSize={"80px"} color={"#000080"} textAlign={"left"} ml={"70px"}>
            PANGEA
        </Text>
        <Text fontSize={"80px"} color={"#000080"} textAlign={"left"} ml={"70px"}>
            "all the Earth.
        </Text>
        </Box>
        <Text maxW={"80%"} textAlign={"justify"} ml={"70px"} fontSize={"23px"} mt={"30px"}>
        Experience synergy with the world around you. Where the ephemeral
         sense of being fuses with the elements of nature. Pangea celebrates
          these evanescent moments, through consciously-created, functional carryalls
          . Made from 100% recycled plastic bottles that would have otherwise ended in
           a landfill — the collection is high on function and utility, while thoughtfully connecting you with your planet.
        </Text>
        <Box mt={"100px"}>
        <Flex>
            <Text ml={"70px"} textAlign={"justify"} mr={"70px"} maxW={"50%"} fontSize={"23px"}>The magic is in the making. The entire process — 
                from the collection of the bottles to them being 
                chipped into flakes, to becoming crafted eco-twill,
                 the foundation of our bags. Thoughtful, conscious
                  creation is woven into every strand of Pangea.</Text>
                  
            
                <iframe  
                    title="bags"
                    src="https://ik.imagekit.io/dailyobjects/colllectionPage/pangea/material-video-1-pet-updated.mp4?tr=q-50,f-webm"
                    allowFullScreen/>
            
            
        </Flex>
        </Box>
       
        <Box maxW="100%">

            <Grid border="1px solid #E2E8F0" templateColumns="repeat(4,1fr)" gap={"20px"}>

        {
        data.map((el)=> (
            <GridItem key={el.id} textAlign="center"  boxShadow={" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} pb={"20px"}>
                <Img maxW="100%"src={el.image} border="1px solid #E2E8F0"/>
                <Text fontWeight={"bold"}>{el.text}</Text>
                <Text fontWeight={"bold"}>{el.price}</Text>
            </GridItem>
             ))
         }
            </Grid>
    </Box>
        </>
    )
}

export default Pangea;