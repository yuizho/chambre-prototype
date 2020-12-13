import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useTransition = (path = '/', depended: any) => {
  const history = useHistory();

  useEffect(() => {
    // a  hook for after useApply
    // setTimeout(() => history.push(path), 5000);
  }, [path, depended, history]);
};

export default useTransition;
