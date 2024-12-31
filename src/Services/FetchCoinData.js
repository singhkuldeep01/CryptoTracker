import axiosInstance from "../Helpers/AxiosInstance";
const fetchCoinData = async (page = 1 , currency = "usd") => {
    try{
        const perPage = 10;
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        console.log(response.data);
        return response.data;
    }catch{

    }
};
export default fetchCoinData;