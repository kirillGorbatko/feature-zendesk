import { DATA_CONTAINERS_TYPE } from '../../shared/constants';
import { DocumentId, Section } from '../../shared/types';
import { apiRequestHandler, getContentByType } from '../../shared/utils';
import { prepareDataContainers, prepareSingleDataContainer } from '../../shared/utils/prepare-data-containers';

type GetSectionResponse = {
	section: Section;
}

export const getCategorySections = async (id: DocumentId) => {
	const query = `categories/${id}/sections`;

	const sections = await getContentByType<Section>({
		query,
		startPage: 1,
		type: DATA_CONTAINERS_TYPE.sections,
	});

	return sections ? prepareDataContainers(sections, DATA_CONTAINERS_TYPE.sections) : [];
};

const getSection = async (id: DocumentId): Promise<Section | null> => {
	const query = `sections/${id}`;
	const response = await apiRequestHandler<GetSectionResponse>().get({
		url: query,
	});

	return response ? prepareSingleDataContainer(response.section, DATA_CONTAINERS_TYPE.sections) : null;
};

export const SECTIONS_API = {
	getCategorySections,
	getSection,
};