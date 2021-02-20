import { NextPage } from "next";
import useSWR from "swr";

const GET_ANOMALIES = `
  query getAnomalies {
    anomalies {
      module
    }
  }
`;

const IndexPage: NextPage = () => {
  const { data } = useSWR(GET_ANOMALIES);
  return <div>Hello world</div>;
};

export default IndexPage;
