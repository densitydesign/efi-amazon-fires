import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout section={{
      title: 'homepage',
    }}
    >
      <div className="container-fluid">
        <div className="row">
          <p className="fst-italic">
            prova
          </p>
        </div>
      </div>
      <StaticImage
        src="../images/icon.png"
        alt="static image"
        width={200}
        height={200}
      />
      <p className="serif">Questa è un'immagine con staticimage di gatsby</p>
    </Layout>
  );
}
