import Authorize from '@/components/Authorize';
import Payment from '@/containers/Payment';

function PaymentPage() {
  return (
    <Authorize>
      <Payment />
    </Authorize>
  );
}

export default PaymentPage;
