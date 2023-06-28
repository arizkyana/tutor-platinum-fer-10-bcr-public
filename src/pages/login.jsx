import Login from '@/containers/Login';
import NoAuthorize from '@/components/NoAuthorize';

function LoginPage() {
  return (
    <NoAuthorize>
      <Login />
    </NoAuthorize>
  );
}

export default LoginPage;
