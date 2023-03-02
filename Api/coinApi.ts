import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com";

export const coinApis = {
  fetchCoins: async () => {
    return (await axios.get(`${BASE_URL}/v1/coins`)).data;
  },
  fetchCoinInfo: async (coinId: string | undefined) => {
    return (await axios.get(`${BASE_URL}/v1/coins/${coinId}`)).data;
  },
  fetchCoinTickers: async (coinId: string | undefined) => {
    return (await axios.get(`${BASE_URL}/v1/tickers/${coinId}`)).data;
  },
  fetchCoinHistory: async (coinId: string | undefined) => {
    return (
      await axios.get(
        `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
      )
    ).data;
  },
};
