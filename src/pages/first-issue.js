import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { Heading1, Quote } from '../components/Typography';
import img1 from '../images/first-issue/1-intro@2x.png';
import img2 from '../images/first-issue/2-intro.png';
import Image from '../components/Image';

export default function firstIssue() {
  return (
    <Layout section={{
      title: 'Governance Issue',
    }}
    >
      <div className="container-fluid bg-primary py-5 ">
        <div className="row">
          <div className="col-10 offset-1 py-5">
            <Heading1 text="Emerging forest governance issues through hashtags" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 offset-1">
            <p className="py-2 serif">
              Forest governance deals with a wide range of issues from deforestation to global trade, from land use to sustainable financing. We were curious to know which forest governance issues surfaced on social media in relation to the 2019 Amazon forest fires, which became a global talking point. We looked at how people on Twitter connected these issues to the event.
            </p>
            <p className="py-2 serif">
              Looking at how the hashtags associated with Amazon fires on Twitter relate to each other*, one can observe different voices, concerns and positioning around a wide variety of forest governance issues, involving international and national political, business and other public figures.
            </p>
            <p className="py-2 serif">
              This issue story depicts a selection of insights collected through a series of conversations with forest governance experts and journalists who followed the event closely in the peak period when the event became a global issue.
            </p>

            <Quote classi="py-5" text="*We collected Twitter data covering the period of 24th August to 2nd September 2019 (10 days) using the following hashtags: #ActForTheAmazon, #amazonfires, #AmazonRainforest, #PrayforAmazonia, #SaveTheAmazon, and #SOSAmazonia. We then looked at what hashtags were associated with these in tweets, and observed different voices, concerns and positioning around a wide variety of forest governance issues, involving international and national political, business and other public figures." />
          </div>
          <div className="col-5 offset-1 mt-n5">
            <div className="row">
              <Image src={img1} classi="mt-n5" />
            </div>
            <div className="row">
              <div className="col-7">
                <p className="py-2 serif">
                  Hashtags can act as an indicator of the issues and concerns of different publics and social media users. It can help us understand how different issues are associated with the main event, including which actors have been brought up with those issues.
                </p>
              </div>
              <div className="col-4">
                <Image src={img2} classi="col-5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
