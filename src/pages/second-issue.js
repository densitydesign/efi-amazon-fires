import { GraphQLDate } from 'gatsby/dist/schema/types/date';
import Layout from '../components/Layout';
import {
  GraphQuote, Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';
import Image from '../components/Image';
import img1 from '../images/second-issue/1-intro.png';
import img2 from '../images/second-issue/2-top.png';
import img3 from '../images/second-issue/3-focus2.png';

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

            <div className="row">
              <div className="col-4">
                <Image src={img1} />
              </div>
              <div className="col-6">
                <Quote text="Some scientists became the main sources and reference points in social media debates and journalistic articles, while many others did not. Conversation between scientists also took place outside of the main engagement.
"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5 align-items-center">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="1 — Absence and marginalisation of science on Twitter" />
          </div>

          <div className="col-6 offset-1 py-2">
            <GraphQuote classi="py-5" emoticon="📉" text="Top hashtags overtime, resized by number of tweets. Green represents some of the top hashtags with a high number of tweets, while red indicates science-related hashtags with lower number of tweets." />
            <Image src={img2} />
          </div>
          <div className="col-4  py-2 ps-5">
            <Heading3 classi="pb-3" text="Science-related hashtags seldom make it to the top " />
            <p>
              The top hashtags during the peak of the event were mostly calls for action
              {' '}
              <span className="text-secondary"> (#prayforamazonia, #actfortheamazon, #savetheamazon)</span>
              , followed by Brazilian political perspectives.
            </p>
            <p>
              Only a handful
              <span className="text-warning"> science-related hashtags (i.e. #sciencematters, #sentinel2, #nasa, #unitebehindthescience)</span>
              {' '}
              emerged in the top 100 hashtags.
            </p>
            <p>These science-related hashtags were supporting the role of science and/or referring to the Earth observation programme. </p>
          </div>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-10 offset-1 pt-5">
            <Image src={img3} />
            <GraphQuote classi="py-5" emoticon="📉" text="Top hashtags overtime, resized by number of tweets (lower section)" />
          </div>
        </div>
      </div>

    </Layout>
  );
}
