import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { Heading1 } from '../components/Typography';
import img1 from '../images/first-issue/img-1.png';
import Image from '../components/Image';

export default function firstIssue() {
  return (
    <Layout section={{
      title: 'Governance Issue',
    }}
    >
      <div className="container-fluid bg-primary first-section">
        <div className="row">
          <div className="col-10 offset-1 py-5">
            <Heading1 text="Emerging forest governance issues through hashtags" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 offset-1">
            <p>
              When looking at the hashtags that emerged around the Amazon rainforest fires, one can observe various issues associated with and dealt with by forest governance, involving local and international political, business and other public figures.
            </p>
            <p>
              This issue story portrays a selection of insights collected through the initial expert consultation 🎤 —  to elicit debates and gather additional interpretations. It provides  observations and findings of clusters of forest governance issues and insights into how they have been brought together with the other hashtags associated with Amazon rainforest fires.

            </p>
          </div>
          <div className="col-5 offset-1 ">
            <Image src={img1} classi="mt-n5" />
          </div>
        </div>

      </div>
    </Layout>
  );
}
