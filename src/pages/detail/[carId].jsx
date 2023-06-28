import CarDetail from '@/containers/CarDetail';
import Authorize from '@/components/Authorize';
function CarDetailPage() {
  return (
    <Authorize>
      <CarDetail />
    </Authorize>
  );
}

export default CarDetailPage;
