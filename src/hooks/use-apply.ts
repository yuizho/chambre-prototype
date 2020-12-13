import { useEffect, useState } from 'react';

type Result = {
  data: string;
  isLoading: boolean;
};

type FetchResult = {
  ok: boolean;
  payload: string;
};

const useApply = (
  url = 'https://dog.ceo/api/breed/shiba/images/random',
): Result => {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);

      const result: FetchResult = await fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          return response;
        })
        .then((response) => response.json())
        .then((json: { message: string }) => ({
          ok: true,
          payload: json.message,
        }));

      setData(result.payload);

      setLoading(false);
    };

    void fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useApply;
