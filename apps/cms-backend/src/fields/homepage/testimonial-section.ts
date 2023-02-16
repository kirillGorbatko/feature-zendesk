import { Field } from 'payload/types';
import groupField from '../group';
import getImageUploadField from '../image-upload';
import getLinkField from '../link';

const TestimonialSection = (defaults: {
  quote: string;
  quoter: string;
  quoterTitle: string;
  quoterImageUrl: string;
  quoterLink: { linkName: string; linkUrl: string };
}): Field[] => [
  {
    name: 'quote',
    type: 'text',
    required: true,
    defaultValue: defaults.quote,
  },
  {
    name: 'quoter',
    type: 'text',
    required: true,
    defaultValue: defaults.quoter,
  },
  {
    name: 'quoterTitle',
    type: 'text',
    required: true,
    defaultValue: defaults.quoterTitle,
  },
  groupField(
    'quoterImageSection',
    'Qouter Image',
    {
      hideGutter: true,
      className: 'TestimonialSection',
    },
    [
      getImageUploadField('profileImage', 'Profile Image', {}),
      getImageUploadField('landingPageImage', 'Landing Page Image', {}),
      getImageUploadField(
        'mobileLandingPageImage',
        'Mobile Landing Page Image',
        {}
      ),
    ]
  ),
  groupField('quoterLink', 'Link to quoter content', { hideGutter: false }, [
    getLinkField(defaults.quoterLink),
  ]),
];
export default TestimonialSection;
