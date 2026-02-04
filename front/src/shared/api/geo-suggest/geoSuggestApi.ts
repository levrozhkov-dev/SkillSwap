const API_URL = 'https://suggest-maps.yandex.ru/v1/suggest';
const API_KEY = 'f0620ba2-3908-47ab-a854-8452319b80ef';

export const fetchCitySuggestions = async (
  query: string,
): Promise<string[]> => {
  if (!query.trim()) return [];

  try {
    const response = await fetch(
      `${API_URL}?` +
        `apikey=${API_KEY}` +
        `&text=${encodeURIComponent(query)}` +
        `&lang=ru_RU` +
        `&types=locality` +
        `&results=10` +
        `&origin=jsapi-2`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Yandex GeoSuggest response:', data);

    return data.results
      .map((item: any) => item.title?.text)
      .filter((name: string) => name && name.trim()) as string[];
  } catch (error) {
    console.warn('GeoSuggest API failed:', error);
    return []; // fallback
  }
};
