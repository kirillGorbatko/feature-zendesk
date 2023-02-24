import { ErrorSection } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';

const ServerErrorPage = () => {
  return (
    <>
      <CustomHead
        title="Server Error"
        metaDescr="Sorry, we're experiencing a server error. Our team is working to fix the issue as soon as possible. Please check back later."
        metaRobots="noindex"
      />
      <ErrorSection errorNumber={500} />
    </>
  );
};

export default ServerErrorPage;
