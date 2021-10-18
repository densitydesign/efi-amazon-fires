import Layout from '../components/Layout';
import { Heading1, Quote } from '../components/Typography';
import Image from '../components/Image';
import img1 from '../images/first-issue/1-intro@2x.png';
import img2 from '../images/first-issue/2-intro.png';

export default function secondIssue() {
  return (
    <Layout section={{
      title: 'Science Issue',
    }}
    >

      <div className="container-fluid bg-primary py-5 ">
        <div className="row">
          <div className="col-10 offset-1 py-4">
            <Heading1 text="Exploring the  role of science online beneath the surface" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 offset-1">
            <p className="pb-2 serif">
              When looking at the role of science in online engagement around the 2019 Amazon rainforest fires, we can see multiple ways where science and scientific perspectives were mobilised. For example, it is possible to observe specific scientific voices receiving a significant amount of visibility on social media and media articles.
            </p>
            <p className="py-2 serif">
              Yet, in many instances especially on social media, scientific voices were almost absent, marginal, present at the periphery or only after the “peak”.
            </p>
            <p className="py-2 serif">
              This issue story exposes which scientific voices emerged online and how, to depict the role science played in online engagement around the Amazon rainforest fires.
            </p>

          </div>
          <div className="col-5 offset-1 mt-n5">

            numeri
          </div>
        </div>
      </div>

    </Layout>
  );
}
