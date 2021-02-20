import request from "graphql-request";

export const fetcher = (query: string, params: any): Promise<any> => {
  return request(
    `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/graphql`,
    query,
    params
  );
};
