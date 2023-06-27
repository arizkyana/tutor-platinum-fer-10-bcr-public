import Authorize from '@/components/Authorize';
import CarDetail from '@/containers/CarDetail';

function CarDetailPage() {
  return (
    <Authorize>
      <CarDetail />
    </Authorize>
  );
}

export default CarDetailPage;
