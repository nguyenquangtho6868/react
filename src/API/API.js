import { useEffect, useState } from "react";
const Api = () => {
  //custom API
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchNetflixRandom = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const responseJson = await response.json();

        setApi(responseJson);
      } catch (error) {
        console.log("Fails", error.message);
      }
    };
    fetchNetflixRandom();
  }, []);
  return {
    api,
  };
};
export default Api;
