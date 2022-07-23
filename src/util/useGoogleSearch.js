import { useEffect, useState } from "react";
import { google } from "./google";

export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${google.key1}&cx=${google.seid1}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        // .catch(() => fetchData2())
    };

    const fetchData2 = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${google.key2}&cx=${google.seid2}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        .catch(() => fetchData1())
    };


    term !== null && fetchData2();
  }, [term]);

  return { data };
};
