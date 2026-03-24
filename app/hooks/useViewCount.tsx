import { useState, useEffect } from "react";
interface UseViewCountReturn {
  viewCounts: Record<number, number>;
  handleViewClick: (id: number) => void;
}
export function useViewCount(ids: number[]): UseViewCountReturn {
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  useEffect(() => {
    if (ids.length === 0) return;
    const fetchAll = async () => {
      const counts: Record<number, number> = {};
      await Promise.all(
        ids.map(async (id) => {
          try {
            const res = await fetch(`/api/views/${id}`);
            const data = await res.json();
            counts[id] = data.views ?? 0;
          } catch {
            counts[id] = 0;
          }
        })
      );
      setViewCounts(counts);
    };

    fetchAll();
  }, [ids.join(",")]);

  const handleViewClick = (id: number) => {
    fetch(`/api/views/${id}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setViewCounts((prev) => ({ ...prev, [id]: data.views ?? 0 }));
      })
      .catch(() => {});
  };

  return { viewCounts, handleViewClick };
}
