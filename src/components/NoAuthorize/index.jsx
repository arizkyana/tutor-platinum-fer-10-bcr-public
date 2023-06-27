import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function NoAuthorize(props) {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        router.push('/results');
        return;
      }
      setMounted(true);
    }
  }, [user]);

  return mounted ? props.children : <></>;
}

export default NoAuthorize;
