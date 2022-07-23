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

  console.log(data);

  if (data?.error) {
    return (
      <Stack p={4}>
        <h4 className="result">
          Quota exceeded for quota metric 'Queries' and limit 'Queries
          per day' of service. Please contact the developer to update.
        </h4>
      </Stack>
    );
  }

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
