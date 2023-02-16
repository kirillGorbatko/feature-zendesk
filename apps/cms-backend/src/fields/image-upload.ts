import { Field } from 'payload/types';
import groupField from './group';

const getImageUploadField = (
  name: string,
  label: string,
  defaults: {
    url?: string;
    setRetinaVersion?: boolean;
    retinaUrl?: string;
  }
): Field =>
  groupField(name, label, { hideGutter: false }, [
    {
      name: 'url',
      label: 'Select Image',
      type: 'upload',
      relationTo: 'media', // required
      required: false,
    },
    {
      name: 'setRetinaVersion', // required
      type: 'checkbox', // required
      label: 'Set Retina Version',
      required: false,
    },
    {
      name: 'retinaUrl',
      label: 'Select Retina Image',
      type: 'upload',
      relationTo: 'media', // required
      required: false,
      admin: {
        condition: (data, sibling) => {
          if (sibling?.setRetinaVersion) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
  ]);

export default getImageUploadField;
