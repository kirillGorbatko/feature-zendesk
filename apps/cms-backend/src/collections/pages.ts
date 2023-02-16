import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import HeaderBlock from '../blocks/header';
import MainHeroBlock from '../blocks/main-hero';
import getMainPartDefinition from '../blocks/main-part';
import GetStartedCTABlock from '../blocks/get-started-cta';
import FooterBlock from '../blocks/footer';
import ForProfessionalsCTABlock from '../blocks/for-professionals-cta';
import LineSeperatorBlock from '../blocks/line-seperator';
import { saveToJson } from '../hooks/save-to-json';
import { populateAuthor } from '../hooks/populate-author';

export const Pages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'pages',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['title', 'author', 'createdAt'],
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `http://localhost:4200/pages/${doc.id}?locale=${locale}&preview=true`;
      }
    },
  },
  // the access is set to allow read for anyone
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    // create,
    // update,
    // delete,
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [saveToJson('pages')],
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Page Title',
          type: 'text',
          required: true,
          defaultValue: 'Page - ',
          admin: {
            width: '60%',
          },
        },
        slug(),
      ],
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        HeaderBlock,
        MainHeroBlock,
        GetStartedCTABlock,
        getMainPartDefinition(1),
        getMainPartDefinition(2),
        getMainPartDefinition(3),
        getMainPartDefinition(4),
        ForProfessionalsCTABlock,
        LineSeperatorBlock,
        FooterBlock,
      ],
    },
    {
      name: 'parent',
      label: 'Parent Page',
      type: 'relationship',
      relationTo: 'pages',
      maxDepth: 0,
      // telling Payload to add an index to a field instructs the database to create it for enhanced query performance
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
      hooks: {
        beforeChange: [
          // By using a hook to set the author, admins cannot change the author as is allowed in the posts
          // collections that has a defaultValue property to populates it and allow changing in the UI
          populateAuthor,
        ],
      },
      admin: {
        // this is going to be filled by the hook, or will remain the same on edit
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
};

export default Pages;
