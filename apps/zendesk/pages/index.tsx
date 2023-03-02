import {
  TopicList,
  FmGetStartedCta,
  Preloader,
} from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';
import { CATEGORIES_API } from '../src/api';
import { Category } from '../src/shared/types';
import { SearchWrap } from '../src/components/search-wrap';
import { useState } from 'react';

interface IndexProps {
  categories: Category[];
}

export function Index({ categories }: IndexProps) {
  const [loadingStatus, setLoadingStatus] = useState<
    'idle' | 'pending' | 'fullfilled' | 'rejected'
  >('idle');
  return (
    <>
      <Preloader open={loadingStatus === 'pending'} />
      <CustomHead
        title="Home"
        metaDescr="Welcome to our website! Here you’ll find everything you need to know to start promoting your music like a pro."
        metaRobots="index"
        ogTitlte="Home"
        ogDescr="Welcome to our website! Here you’ll find everything you need to know to start promoting your music like a pro."
      />
      <SearchWrap
        align="center"
        setLoadingStatus={setLoadingStatus}
        title="Don’t sweat it, we got you"
        subTitle="Here you’ll find everything you need to know to start promoting your music like a pro."
      />
      <TopicList<Category> items={categories} />
      <FmGetStartedCta
        title="Get started for free"
        descr="You can use Feature.fm for free or subscribe to one of our paid plans. All paid plans come with a free trial of our Pro plan."
      />
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  const categories = await CATEGORIES_API.getAllCategories();

  return {
    props: {
      categories,
    },
  };
}
