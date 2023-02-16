import { ErrorSection } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';

const NotFoundPage = () => {
  return (
    <>
      <CustomHead title="Page not found" />
      <ErrorSection />
    </>
  );
};

export default NotFoundPage;
