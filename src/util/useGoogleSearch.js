import { useEffect, useState } from "react";
import { google } from "./google";

export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${google.key}&cx=${google.seid}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    term !== null && fetchData();
  }, [term]);

  return { data };
};
