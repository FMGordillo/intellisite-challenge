import { NextPage } from "next";
import { useAnomalies } from "../hooks";

const IndexPage: NextPage = () => {
  const { count } = useAnomalies();
  return <div>Hello world {count}</div>;
};

export default IndexPage;
