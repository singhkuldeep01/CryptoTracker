import axiosInstance from "../Helpers/AxiosInstance";
const fetchCoinData = async () => {
    try{
        const response = await axiosInstance.get("/coins/markets?vs_currency=usd");
        console.log(response.data);
        return response.data;
    }catch{

    }
};
export default fetchCoinData;