import Authorize from '@/components/Authorize';
import Results from '@/containers/Results';

function ResultsPage() {
  return (
    <Authorize>
      <Results />
    </Authorize>
  );
}

export default ResultsPage;
