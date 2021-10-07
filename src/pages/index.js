import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import img1 from '../images/img1.png';
import Footer from '../components/Footer';
import HomeIndex from '../components/HomeIndex';
import { Heading4 } from '../components/Typography';

export default function Index() {
  return (
    <Layout section={{
      title: 'homepage',
    }}
    >

      <div className="container-fluid bg-primary first-section">
        <div className="row align-items-center h-100">
          <div className="col-10 offset-1 position-relative">
            <img src={img1} className="img-fluid w-100" alt="..." />
            <h1 className="position-absolute serif fw-bolder" style={{ bottom: '15%', left: '10%' }}>Out of the Flames</h1>
            <h4 className="position-absolute serif fw-bolder" style={{ bottom: '10%', left: '10%' }}>Reconstructing the debates around the Amazon rainforest fires online</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5">
        <div className="row">
          <div className="col-2 offset-1">
            <Heading4 text="The Project" />
          </div>
          <div className="col-7 offset-1">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literang the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
      </div>

      <HomeIndex />

    </Layout>
  );
}

{ /*
      <StaticImage
        src="../images/icon.png"
        alt="static image"
        width={200}
        height={200}
      />
 */ }
