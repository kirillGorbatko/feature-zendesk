import { render } from '@testing-library/react';

import ServicePlayImage from './service-play-image';

describe('ServicePlayImage', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ServicePlayImage />);
		expect(baseElement).toBeTruthy();
	});
});
