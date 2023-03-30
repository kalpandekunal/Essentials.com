import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const getData = async (url) =>{
    const res = await fetch(url);
    return await res.json();
};


function WatchDetails(){
    const { user_id } = useParams();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [user,setUser] = useState([]);


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

    console.log(user)

    return(
        <div>
            kkkk
        </div>
    )
}

export default WatchDetails;