import { HelpCardProps } from '@featurefm/design-system';

type NavigationItem = {
	href: string;
	title: string;
	dropdown?: HelpCardProps[];
};

export default NavigationItem;
