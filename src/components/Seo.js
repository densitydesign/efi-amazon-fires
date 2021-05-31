import { Helmet } from 'react-helmet';

export default function Seo({ section }) {
  const seo = {
    descr: 'description',
    cover: '',
  };
  return (
    <Helmet>
      <title>
        {section.title}
      </title>
      <meta
        name="title"
        content={section.title}
      />
      <meta
        name="description"
        content={seo.descr}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://interconnectedata.it" />
      <meta property="og:title" content="Interconnected" />
      <meta
        property="og:description"
        content={seo.descr}
      />
      <meta property="og:image" content={seo.cover} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content={section.title} />
      <meta
        property="twitter:description"
        content={seo.descr}
      />
      <meta property="twitter:image" content={seo.cover} />
    </Helmet>
  );
}
