import { useState, useCallback } from 'react';
import { fetchCitySuggestions } from './geoSuggestApi';
import { useDebouncedCallback } from '../../hooks/useDebounce';

// Передаём локальные города как аргумент, чтобы хук мог их использовать
export const useCityOptions = (cities: { name: string }[]) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const loadOptions = useCallback(
    async (query: string) => {
      const trimmed = query.trim();
      if (trimmed.length < 3) {
        setOptions([]);
        return;
      }

      // Фильтруем локальные города
      const localMatches = cities
        .filter((city) =>
          city.name.toLowerCase().includes(trimmed.toLowerCase()),
        )
        .map((city) => ({
          value: city.name,
          label: city.name,
        }));

      // Если нашли достаточно локальных — не дергаем API
      if (localMatches.length >= 1) {
        setOptions(localMatches);
        return;
      }

      setLoading(true);
      try {
        const suggestions = await fetchCitySuggestions(query);
        const remoteOptions = suggestions.map((name) => ({
          value: name,
          label: name,
        }));

        // Объединяем без дубликатов (локальные + API)
        const combined = [...localMatches];
        const seen = new Set(localMatches.map((c) => c.value));

        for (const city of remoteOptions) {
          if (!seen.has(city.value)) {
            combined.push(city);
            seen.add(city.value);
          }
        }

        setOptions(combined);
      } catch (error) {
        console.warn(
          'API упал — используем только локальные результаты',
          error,
        );
        setOptions(localMatches); // fallback на локальные
      } finally {
        setLoading(false);
      }
    },
    [cities], // зависимость от внешнего списка городов
  );

  const debouncedLoad = useDebouncedCallback(loadOptions, 800);

  return {
    options,
    loading,
    searchCities: debouncedLoad,
  };
};
