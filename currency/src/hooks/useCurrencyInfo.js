import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let [data,setData]=useState({});
    useEffect(()=>{
        let res=fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res=>res.json())
        .then((res)=>{
            setData(res[currency])});
    },[currency])
    console.log(data);
    return data;
    
}
export default useCurrencyInfo;