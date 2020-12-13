import React, { FC, useState } from 'react';
import useApply from '../../hooks/use-apply';
import useTransition from '../../hooks/use-transition';

const Apply: FC = () => {
  const [query, setQuery] = useState('shiba');
  const [url, setUrl] = useState(
    `https://dog.ceo/api/breed/${query}/images/random`,
  );

  const { data, isLoading } = useApply(url);
  useTransition('/users', data);

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(`https://dog.ceo/api/breed/${query}/images/random`)
          }
        >
          Search
        </button>
        <br />
        {isLoading ? <div>Loading...</div> : <img src={data} alt="dog" />}
      </div>
    </>
  );
};

export default Apply;
