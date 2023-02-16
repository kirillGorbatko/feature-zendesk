import {
  MainHero,
  Header,
  MainPart1,
  MainPart3,
  MainPart2,
  Testimonials,
  GetStartedCta,
  Footer,
  LineSeparator,
  ForProfessionalsCta,
} from '@featurefm/design-system';

export default function ContentPage(props) {
  return (
    <div>
      {props.layout.map((block, key) => {
        <div key={key}>{block.blockType}</div>;
        switch (block.blockType) {
          case 'brand-header': {
            return <Header solutions={[]} />;
          }
          case 'main-hero': {
            return <MainHero {...block} />;
          }
          case 'main-part-1': {
            return (
              <div className="m-auto" style={{ width: '1200px' }}>
                {/*<MainPart1 />*/}
              </div>
            );
          }
          case 'main-part-2': {
            return (
              <div className="m-auto" style={{ width: '1200px' }}>
                {/*<MainPart2 />*/}
              </div>
            );
          }
          case 'main-part-3': {
            return (
              <div className="m-auto" style={{ width: '1200px' }}>
                {/*<MainPart3 />*/}
              </div>
            );
          }
          case 'line-separator': {
            return <LineSeparator />;
          }
          case 'testimonials': {
            /*return <Testimonials />;*/
          }
          case 'for-professionals-cta': {
            return (
              <div className="m-auto" style={{ width: '1200px' }}>
                {/*<ForProfessionalsCta />*/}
              </div>
            );
          }
          case 'brand-footer': {
            return <Footer />;
          }
          default: {
            return <GetStartedCta {...block} />;
          }
        }
      })}
    </div>
  );
}

async function getPageDraftData(id: string) {
  const res = await fetch(`http://localhost:3333/api/pages/${id}?draft=true`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: data,
  };
}

export async function getServerSideProps({ params, query }) {
  if (query.preview) {
    return getPageDraftData(params.slug);
  }

  const res = await fetch(
    `http://localhost:3333/api/pages/?where[slug][equals]=${params.slug}&limit=1`
  );
  const data = await res.json();

  if (!data || !data.docs.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.docs[0].title,
      layout: data.docs[0].layout,
    },
  };
}
