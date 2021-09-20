import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Index() {
  return (
    <Layout section={{
      title: 'homepage',
    }}
    >
      <Navbar />
      <div className="container-fluid first-section bg-primary text-white">
        <div className="row align-items-center h-100">
          <div className="col-10 offset-1">
            <h1 className="serif fw-bold">Emerging forest governance issues through hashtags</h1>
          </div>
          <div className="col-4 offset-1 serif">
            <p>
              When looking at the hashtags that emerged around the Amazon rainforest fires, one can observe various issues associated with and dealt with by forest governance, involving local and international political, business and other public figures.
            </p>
            <p>
              This issue story portrays a selection of insights collected through the initial expert consultation 🎤 —  to elicit debates and gather additional interpretations. It provides  observations and findings of clusters of forest governance issues and insights into how they have been brought together with the other hashtags associated with Amazon rainforest fires.

            </p>
          </div>
        </div>
      </div>

    </Layout>
  );
}

{ /* <div className="container-fluid">
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
      <p className="serif">Questa è un'immagine con staticimage di gatsby</p> */ }
