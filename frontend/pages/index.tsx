import { NextPage } from "next";
import { useState } from "react";
import { useAnomalies } from "../hooks";

const IndexPage: NextPage = () => {
  const [page, setPage] = useState(0);
  const { data, count } = useAnomalies({
    page,
  });

  return (
    <div>
      <p>Record count: {count}</p>

      {data.map((anomaly) => (
        <p>{anomaly.id}</p>
      ))}

      <button onClick={() => setPage((p) => (p > 0 ? p - 1 : 0))}>
        Previous page
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>New page</button>
    </div>
  );
};

export default IndexPage;
