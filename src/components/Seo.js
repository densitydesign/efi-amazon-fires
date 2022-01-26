import { Helmet } from 'react-helmet';
import cover from '../images/cover.png';

export default function Seo({ section }) {
  const seo = {
    descr: 'During the months of August and September 2019, the Amazon rainforest fires captured global attention. Celebrities, politicians and other public figures spoke up and shared their voices and concerns with hashtags on social media. While the Amazon rainforest fires became an international issue in 2019, far fewer debates and news stories have emerged in 2020 despite the situation becoming worse.',
    cover,
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
