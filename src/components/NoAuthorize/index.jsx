import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function NoAuthorize(props) {
  const router = useRouter();
  const login = useSelector((state) => state.login);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (login.user) {
      // user ada
      router.push('/results'); // halaman pertama setelah login
      return;
    }

    setMounted(true);
  }, [login.user]);

  return mounted ? props.children : <></>;
}

export default NoAuthorize;
