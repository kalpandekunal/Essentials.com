import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePage(){

    return (
    <>
        <Img src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1"/>
        <Link to={"/pangea"}>
            <Img src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/pangea_collection_homepage_desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" mb={"50px"}/>
        </Link>
        <Link to={"/watch"}>
            <Img src="https://images.dailyobjects.com/marche/assets/images/other/watchband-homepage-sdesktop.jpg?tr=cm-pad_crop,v-2,dpr-1" mb={"50px"}/>
        </Link>
        <Img src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" mb={"50px"}/>
        <Img src="https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1" mb={"50px"}/>
    </>
    )
}

export default HomePage;