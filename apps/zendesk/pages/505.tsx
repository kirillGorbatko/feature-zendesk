import { ErrorSection } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';

const ServerErrorPage = () => {
  return (
    <>
      <CustomHead title="Server Error" />
      <ErrorSection errorNumber={505} />
    </>
  );
};

export default ServerErrorPage;
