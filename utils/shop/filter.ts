import { useSearchParams, useRouter } from "next/navigation";

export function useFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const toggleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const existing = params.getAll(key);

    if (existing.includes(value)) {
      const filtered = existing.filter((v) => v !== value);
      params.delete(key);
      filtered.forEach((v) => params.append(key, v));
    } else {
      params.append(key, value);
    }
    params.delete("page");
    router.push(`?${params.toString()}`);
  };

  const isChecked = (key: string, value: string) => {
    return searchParams.getAll(key).includes(value);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Option A: wipe all filters entirely
    params.forEach((_, key) => {
      params.delete(key);
    });

    router.push("?");
  };

  return { toggleFilter, isChecked, clearFilters };
}
