import request from "graphql-request";
import { SWRConfig } from "swr";

const fetcher = (query: string, params: any): Promise<any> => {
  return request(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/graphql`,
    query,
    params
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
