import axiosInstance from "../Helpers/AxiosInstance";
const fetchCoinData = async (page = 1 , currency = "usd" ,order) => {
    try{
        const perPage = 10;
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}`);
        return response.data;
    }catch{
        throw new Error("Failed to fetch data");
    }
};
export default fetchCoinData;