import Results from '@/containers/Results';
import Authorize from '@/components/Authorize';

function ResultsPage() {
  return (
    <Authorize>
      <Results />
    </Authorize>
  );
}

export default ResultsPage;
