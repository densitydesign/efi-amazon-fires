import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout section={{
      title: 'homepage',
    }}
    >
      <div className="container-fluid">
        <div className="row">prova</div>
      </div>
      <StaticImage
        src="../images/icon.png"
        alt="A dinosaur"
        placeholder="blurred"

        width={200}
        height={200}
      />
      <p>Questa è un'immagine con staticimage di gatsby</p>
    </Layout>
  );
}
