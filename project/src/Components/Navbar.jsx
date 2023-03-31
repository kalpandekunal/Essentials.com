import {Link, NavLink} from "react-router-dom";
import { Box, Img,Avatar,Text,Button } from "@chakra-ui/react";

const links = [
    
    {to:"/newarrivals",title:"New Arrival"},
    {to:"/casessleeves",title:"Cases & Sleeves"},
    {to:"/accessories",title:"Accessories"},
    {to:"/BagsWallets",title:"Bags & Wallets"},
    {to:"/homeoffice",title:"Home Office"},
    {to:"/collections",title:"Collections"},
    
];

function Navbar(){
    const defaultLinkStyle = {textDecoration:"none",color:"teal",fontWeight:"20px"}
    const activeLinkStyle =  {textDecoration:"none",color:"black"}
    

    return(
        <Box
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-around",
          backgroundColor:"pink",
          height:"60px"
        }}>
            <Link to={"/"}>
            <Img borderRadius={"2px"}
            src="/logo1.png" alt="Logo"  marginLeft="" boxSize="40px" width="100%"  />
            </Link>
        {
            links.map((item)=>{
                return (<NavLink style={({isActive})=>{
                    return isActive ? defaultLinkStyle : activeLinkStyle
                }} key={item.to} to={item.to}>{item.title}</NavLink>);
            })
        }
        <Link to={"/cart"}>
            <Button color={"teal"}>Cart</Button>
        </Link>
        <Link to={"/accounts"}>
            <Avatar w="70%" bg='teal.500' />
        </Link>
        </Box>
    )
}

export default Navbar;