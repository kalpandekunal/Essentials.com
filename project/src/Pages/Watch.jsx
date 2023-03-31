import { Img,Heading,Box,Grid,GridItem,Text } from "@chakra-ui/react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";


const getData = async (url)=>{
    const res = await fetch(url);
    return await res.json();
}
function Watch(){
    const [post,setPost] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const fetchData = ()=>{
        setLoading(true);
        getData(`http://localhost:8080/products`)
        .then((res)=>{
            setPost(res);
        })
        .catch((err)=>{
            console.log(err);
            setError(true)
        })
        .finally(()=>setLoading(false));
    }
    useEffect(()=>{
        fetchData();
    },[]);

    console.log(post)

    return( loading? <Heading>...Loading</Heading>: error ? <Heading>Something went wrong... Please Refresh</Heading> :
        <> 
            <Img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1"/>
            <Heading mt={"30px"}>UNIVERSAL WATCHBANDS</Heading>

            <Box maxW="100%" mt={"50px"}>

                <Grid border="1px solid #E2E8F0" templateColumns="repeat(4,1fr)" gap={"20px"}>

                {
                    post.map((el)=> (
                    <GridItem key={el.id} textAlign="center" pb={"40px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} borderRadius={"20px"}>
                        <Link to={`/watch/${el.id}`}>
                            <Img maxW={"100%"} src={el.image} ml={"75px"} mb={"20px"}/>
                        </Link>
                       
                        <Text>{el.text}</Text>
                        <Text pt={"30px"}fontWeight={"bold"}>{el.price}</Text>
                        <Text color={"tomato"}>*FREE DUFFLE BAG</Text>
                    </GridItem>
                    ))
                }
                </Grid>
            </Box>
        </>
    )
}

export default Watch;