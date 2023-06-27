import NoAuthorize from '@/components/NoAuthorize';
import Login from '@/containers/Login';

function LoginPage() {
  return (
    <NoAuthorize>
      <Login />
    </NoAuthorize>
  );
}

export default LoginPage;
