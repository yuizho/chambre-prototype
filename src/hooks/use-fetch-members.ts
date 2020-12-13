import { useEffect, useState } from 'react';

type Result = {
  users: string[];
  isLoading: boolean;
};

const useFetchMembers = (id = 5): Result => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      setLoading(true);

      const result: string[] = await fetch(
        `https://dog.ceo/api/breeds/image/random/${id}`,
      )
        .then((response) => response.json())
        .then((data: { message: string[] }) => data.message);
      console.log(result);
      setUsers(result);

      setLoading(false);
    };
    // execute fetching
    void fetchUsers();
  }, [id]);

  return { users, isLoading };
};

export default useFetchMembers;
