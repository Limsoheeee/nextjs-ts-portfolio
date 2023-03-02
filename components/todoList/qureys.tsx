import { useQuery } from "@tanstack/react-query";
import { coinApis } from "../../Api/coinApi"


export const useCoinChart = () => {
    return useQuery(['coinChart'], async () => {
       return await coinApis.fetchCoins();        
    })   
};
