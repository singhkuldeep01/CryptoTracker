import fetchCoinData from '../../Services/FetchCoinData';
import { useQuery } from 'react-query';
import React, { useState } from 'react';

function CryptoCoinTable() {
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('usd'); // default currency
    const [order, setOrder] = useState('market_cap_desc'); // default order


    const currencySymbols = {
        usd: '$',
        eur: '€',
        gbp: '£',
        inr: '₹'
    };

    const { data,isLoading } = useQuery(['coins', page, currency ,order], () => fetchCoinData(page, currency ,order), {
        retry: 3,
        retryDelay: 2000,
        cacheTime: 1000 * 60 * 2,
        cacheStaleTime: 1000 * 60 * 5 // 5 minutes cache stale time 
    });

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value.toLowerCase());
    };

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    }

    return (
        <div className="overflow-x-auto my-5 mx-12 flex justify-center flex-col items-center gap-6">
            <div className="flex gap-4">
                <select className="select select-accent w-full max-w-xs " onChange={handleCurrencyChange} value={currency} >
                    <option disabled selected>Choose Currency</option>
                    <option value={"USD"}>USD</option>
                    <option value={"INR"}>INR</option>
                    <option value={"GBP"}>GBP</option> 
                    <option value={"EUR"}>EUR</option> 
                </select>
                <select className="select select-accent w-full max-w-xs " onChange={handleOrderChange} value={order} >
                    <option disabled selected>Arrange Currency</option>
                    <option value={"market_cap_desc"}>Market Cap Desc</option>
                    <option value={"market_cap_asc"}>Market Cap Asc</option>
                    <option value={"volume_asc"}>Volume Asc</option> 
                    <option value={"volume_desc"}>Volume Desc</option> 
                    {/* <option value={"id_asc"}>Id Asc</option>  */}
                    <option value={"id_desc"}>Id Desc</option> 
                </select>
            </div>
            <table className="table w-full text-center border-collapse rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-darkblue-900 to-darkblue-700 text-yellow-400">
                    <tr className="text-lg bg-yellow-500 text-black">
                        <th className="p-4 border border-black  transition-all duration-200">Rank</th>
                        <th className="p-4 border border-black hover:bg-darkblue-600  transition-all duration-200">Name</th>
                        <th className="p-4 border border-black hover:bg-darkblue-600  transition-all duration-200">Price</th>
                        <th className="p-4 border border-black hover:bg-darkblue-600  transition-all duration-200">Market Cap</th>
                        <th className="p-4 border border-black hover:bg-darkblue-600  transition-all duration-200">Volume</th>
                        <th className="p-4 border border-black hover:bg-darkblue-600  transition-all duration-200">Price Change</th>
                    </tr>
                </thead>
                <tbody className="bg-darkblue-800 text-white">
                    {data?.map((coin) => (
                        <tr key={coin.id} className="hover:bg-darkblue-600 hover:text-yellow-300 transition-all duration-200 cursor-pointer hover:sca">
                            <td className="p-4 border border-darkblue-700">{coin.market_cap_rank}</td>
                            <td className="p-4 border border-darkblue-700 font-medium">
                                <div className='flex gap-2 items-center justify-center'>
                                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                                    <span>{coin.name}</span>
                                </div>
                            </td>
                            <td className="p-4 border border-darkblue-700">
                                {currencySymbols[currency]}{coin.current_price.toLocaleString()}
                            </td>
                            <td className="p-4 border border-darkblue-700">
                                {currencySymbols[currency]}{coin.market_cap.toLocaleString()}
                            </td>
                            <td className="p-4 border border-darkblue-700">
                                {currencySymbols[currency]}{coin.total_volume.toLocaleString()}
                            </td>
                            <td className={`p-4 border border-darkblue-700 ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}> 
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isLoading && <span className="loading loading-ring loading-lg text-yellow-400"></span>}
            <div className="join">
                <button disabled = {page === 1} className="join-item btn text-yellow-400" onClick={() => { setPage(page - 1); }}>«</button>
                <button className="join-item btn text-yellow-400">Page {page}</button>
                <button className="join-item btn text-yellow-400" onClick={() => { setPage(page + 1); }}>»</button>
            </div>
        </div>
    );
}

export default CryptoCoinTable;
