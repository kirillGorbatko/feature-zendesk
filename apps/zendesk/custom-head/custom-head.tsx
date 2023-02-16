import Head from 'next/head';

type CustomHeadProps = {
  title: string;
};

export function CustomHead({ title }: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
