import { writeFileSync } from 'fs';
import { AfterChangeHook } from 'payload/dist/collections/config/types';
import { GlobalAfterChangeHook } from 'payload/types';

const saveToJson = (collectionName: string): AfterChangeHook => {
  return async (args) => {
    return;
    if (process.env.NODE_ENV === 'production') return;

    const content = JSON.stringify(args['doc'], null, 2);
    console.log(args);
    writeFileSync(
      `apps/website/public/data/${collectionName}-${args.doc.slug}-${args.req.query.locale}.json`,
      content,
      {
        flag: 'w',
      }
    );
    console.log(content);
  };
};

const saveGlobalToJson =
  (globalName: string): GlobalAfterChangeHook =>
  async ({
    doc, // full document data
    previousDoc, // document data before updating the collection
    req, // full express request
  }) => {
    return;
    if (process.env.NODE_ENV === 'production') return;

    writeFileSync(
      `apps/website/public/data/${globalName}-default-${req.query.locale}.json`,
      JSON.stringify(doc, null, 2),
      {
        flag: 'w',
      }
    );
    console.log(doc);
  };

export { saveToJson, saveGlobalToJson };
