import React from "react";
import { useStateValue } from "../../redux/StateProvider";
import { useGoogleSearch } from "../../util/useGoogleSearch";
import { Response } from "../../util/response";
import { Link, Stack } from "@mui/material";
import "./result.css";
export const Results = () => {
  const [{ term }, dispatch] = useStateValue();

  // API CALL
  const { data } = useGoogleSearch(term); 

  return (
    <Stack p={4}>
      {(data || Response)?.items?.map((item, i) => (
        <Stack key={i} className="result" spacing={0.5} pb={3}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <img
              src={item.pagemap?.cse_thumbnail?.[0].src}
              alt=""
              width="35px"
              height="20px"
            />
            <div>{item.formattedUrl} ▼ </div>
          </Stack>
          <Link color="inherit" href={item.link}>
            {item.title}
          </Link>
          <p>{item.snippet}</p>
        </Stack>
      ))}
    </Stack>
  );
};
