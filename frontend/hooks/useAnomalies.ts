import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const GET_ANOMALIES_COUNT = `
  query getAnomaliesCount {
    aggregateAnomaly {
      count {
        events
      }
    }
  }
`;

const GET_ANOMALIES = `
  query getAnomalies($skip: Int) {
    anomalies(skip: $skip, take: 10) {
      id
    }
  }
`;

interface Anomaly {
  id: String;
}

interface UseAnomaliesProps {
  page: number;
}

interface UseAnomaliesReturn {
  count: number;
  data: Anomaly[];
}

export const useAnomalies = (props?: UseAnomaliesProps): UseAnomaliesReturn => {
  const { data: countData } = useSWR<{
    aggregateAnomaly: { count: { events: number } };
  }>(GET_ANOMALIES_COUNT);

  const { data } = useSWR<{ anomalies: Anomaly[] }>(
    [GET_ANOMALIES, props?.page],
    (url) => fetcher(url, { skip: props?.page * 10 })
  );

  return {
    data: data?.anomalies || [],
    count: countData?.aggregateAnomaly?.count?.events || 0,
  };
};
