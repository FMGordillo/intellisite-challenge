import useSWR from "swr";

const GET_ANOMALIES_COUNT = `
  query getAnomaliesCount {
    aggregateAnomaly {
      count {
        events
      }
    }
  }
`;

interface UseAnomaliesReturn {
  count: number;
}

export const useAnomalies = (): UseAnomaliesReturn => {
  const { data } = useSWR<{ aggregateAnomaly: { count: { events: number } } }>(
    GET_ANOMALIES_COUNT
  );

  return {
    count: data?.aggregateAnomaly?.count?.events || 0,
  };
};
