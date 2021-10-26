import Layout from '../components/Layout';
import {
  GraphQuote, Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';

import NextPrev from '../components/NextPrev';
import Image from '../components/Image';
import img1 from '../images/first-issue/1-intro@2x.png';
import img2 from '../images/first-issue/2-intro.png';

export default function secondIssue() {
  return (
    <Layout section={{
      title: 'Fake images Issue',
    }}
    >
      <div className="container-fluid bg-primary py-5 ">
        <div className="row">
          <div className="col-10 offset-1 py-4">
            <Heading1 text="Tracing the recycling of online materials" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 offset-1">
            <p className="pb-2 serif">
              In 2019, the Amazon rainforest fires became the centre of attention on social media as political actors, celebrities, and athletes including the French President Macron, Leonardo DiCaprio and Cristiano Ronaldo shared their voices, positions and concerns.
            </p>
            <p className="py-2 serif">
              While these actors raised public awareness, they also promoted photos and videos from unrelated past events. These public figures also referred to misleading claims, such as “20% of the world’s oxygen is produced in the Amazon”. While the news media and science communities have contested and debunked these unrelated images and videos online, the contents can be repurposed in different contexts, and can continue to have a different life online.
            </p>
            <p className="py-2 serif">
              This issue story traces the life cycles of some of this content, and explores instances of recycled media and specific claims related to the Amazon rainforest fires over time.
            </p>

          </div>
          <div className="col-5 offset-1">
            <div className="row">
              <Image src={img1} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5 align-items-center">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="1 — Generic images from past events are recycled and repurposed to create public awareness " />
          </div>
          <div className="col-5 offset-1">
            <p>We encounter a wide variety of generic images in the media we consume everyday. In our analysis, various types of images have been collected showing fires and animals from Australia, Africa and Asia.</p>
          </div>
          <div className="col-8 offset-1 pt-5">
            <Heading3 classi="pb-3" text="Animal photos have been mobilised to share concerns around the Amazon rainforest fires" />
          </div>
          <div className="col-5 offset-1">
            <p>Among the most visible images in our analyses, there were a number of animal photos portraying the endemic species of the Amazon.</p>
            <p>
              One of the iconic photos was an image of a jaguar rescued by the Brazilian army. Originally taken in 2016 for a conservation project, this photo portrays Jiquitaia, an adopted jaguar held by the army officer that adopted him.
            </p>
            {' '}
            <p>
              Later in the same year, this photo appeared on social media when Juma, a captive jaguar who became an iconic star during the Rio de Janeiro Olympics, was shot by an army officer at the torch event in Manaus.
            </p>
            <p>
              In 2019, the same photo reemerged online when the Amazon fires became an international issue.
            </p>
          </div>

        </div>
      </div>

    </Layout>
  );
}
