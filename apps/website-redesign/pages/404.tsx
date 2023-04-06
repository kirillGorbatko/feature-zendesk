import { ErrorSection } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';

const NotFoundPage = () => {
  return (
    <>
      <CustomHead
        title="Page not found"
        metaDescr="Sorry, the page you are looking for could not be found. Please check the URL or go to Main Page and try searching for the page using our website search bar."
        metaRobots="noindex"
      />
      <ErrorSection />
    </>
  );
};

export default NotFoundPage;
