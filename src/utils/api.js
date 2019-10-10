import axios from "axios";
import { useState, useEffect } from "react";

export function useCoinId(id, count) {
  const [coins, setCoins] = useState([]);

  // we can define side effects in our custom hooks as well,
  // and subscribe to changes in variables coming from anywhere (like parameters...)
  useEffect(() => {
    setCoins([]);

    // make a new api call any time `breed` or `count` changes
    axios
      .get(`https://www.coingecko.com/api/coins/{id}`)
      .then(result => {
        setCoins(result.data);
        console.log(setCoins);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, [id]);

  // we don't use `setImages` in App.js, but it's nice to return it just in case
  return [coins, setCoins];
}
