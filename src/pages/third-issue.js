import { Link } from 'gatsby';
import { useState } from 'react';
import Layout from '../components/Layout';
import {
  GraphQuote, Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';

import NextPrev from '../components/NextPrev';
import Image from '../components/Image';
import img1 from '../images/chap3.png';
import img11 from '../images/third-issue/1-jaguar1.png';
import img12 from '../images/third-issue/1-jaguar2.png';
import img13 from '../images/third-issue/1-jaguar3.png';
import img14 from '../images/third-issue/1-jaguar4.png';
import img21 from '../images/third-issue/2-carousel1.png';
import img22 from '../images/third-issue/2-carousel2.png';
import img23 from '../images/third-issue/2-carousel3.png';
import img24 from '../images/third-issue/2-carousel4.png';
import img25 from '../images/third-issue/2-carousel5.png';
import img26 from '../images/third-issue/2-focus1.png';
import img27 from '../images/third-issue/2-focus2.png';
import img28 from '../images/third-issue/2-focus3.png';
import img31 from '../images/third-issue/3-peru.png';
import img32 from '../images/third-issue/3-perufocus.png';
import img33 from '../images/third-issue/3-borneo.png';
import img34 from '../images/third-issue/3-borneofocus.png';
import img35 from '../images/third-issue/3-usa.png';
import img36 from '../images/third-issue/3-usafocus.png';
import img41 from '../images/third-issue/4-macron.png';
import img42 from '../images/third-issue/4-ronaldo.png';
import img43 from '../images/third-issue/4-leonardo.png';
import img51 from '../images/third-issue/5-first.png';
import img52 from '../images/third-issue/5-second.png';
import img53 from '../images/third-issue/5-third.png';
import img61 from '../images/third-issue/6-twee.png';
import img62 from '../images/third-issue/6-debunk.png';
import img7 from '../images/third-issue/7-tweet.png';
import img71 from '../images/third-issue/7-viz.png';
import img81 from '../images/third-issue/8-warning.png';
import img82 from '../images/third-issue/8-nowarning.png';
import img91 from '../images/third-issue/9-corrected.png';
import img92 from '../images/third-issue/9-perplexing.png';
import img93 from '../images/third-issue/9-warn1.png';
import img94 from '../images/third-issue/9-warn2.png';
import img95 from '../images/third-issue/9-warn3.png';
import img96 from '../images/third-issue/9-warn4.png';
import img97 from '../images/third-issue/9-warn5.png';
import img98 from '../images/third-issue/9-warn6.png';
import img101 from '../images/third-issue/10-green1.png';
import img102 from '../images/third-issue/10-green2.png';
import img103 from '../images/third-issue/10-red1.png';
import img104 from '../images/third-issue/10-red2.png';
import img105 from '../images/third-issue/10-red3.png';
import img106 from '../images/third-issue/10-red4.png';
import img107 from '../images/third-issue/10-red5.png';
import img108 from '../images/third-issue/10-red6.png';
import img109 from '../images/third-issue/10-red7.png';
import img110 from '../images/third-issue/10-red8.png';

export default function secondIssue() {
  const [alert, setAlert] = useState(false);
  const carousel = [
    img21, img22, img23, img24, img25,
  ];
  return (
    <Layout section={{
      title: 'Fake images Issue',
    }}
    >
      <div className="container-fluid bg-primary pb-5 ">
        <div className={`row bg-warning py-5 ${alert ? 'd-none' : ''}`}>
          <div className="col-10 offset-1">
            <p className="text-center">Content Warning</p>
            <p className="text-center">This article contains images of burning/burnt animals and may not be suitable for some viewers.</p>
            <p className="text-center pt-3"><button type="button" className="btn btn-primary text-white" onClick={() => setAlert(true)}>Accept</button></p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-1 py-4">
            <Heading1 text="Tracing the recycling of online materials" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 offset-1">
            <p className="pb-2 serif">
              In 2019, the Amazon rainforest fires became the centre of attention on social media as political actors, celebrities, and athletes including the French President Macron, Leonardo DiCaprio and Cristiano Ronaldo shared their voices, positions and concerns.
            </p>
            <p className="py-2 serif">
              While these actors raised public awareness, they also promoted photos and videos from unrelated past events. These public figures also referred to misleading claims, such as “20% of the world’s oxygen is produced in the Amazon”. While the news media and science communities have contested and debunked these unrelated images and videos online, the contents can be repurposed in different contexts, and can continue to have a life online.
            </p>
            <p className="py-2 serif">
              This issue story traces the life cycles of some of this content, and explores instances of recycled media and specific claims related to the Amazon rainforest fires over time.
            </p>

          </div>
          <div className="col-4 offset-1">
            <Image src={img1} />
          </div>
          <div className="col-5 offset-1">
            <div className="row" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5 align-items-top">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="1 — Generic images from past events are recycled and repurposed to create public awareness " />
          </div>
          <div className="col-5 offset-1">
            <p>We encounter a wide variety of generic images in the media we consume everyday. In our analysis, various types of images have been collected showing fires and animals from Australia, Africa and Asia.</p>
          </div>
          <div className="col-6 offset-1 pt-5">
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
          <div className="col-4 offset-1">
            <div className="row pb-4">
              <div className="col">
                <Image classi="border-top border-secondary border-5 pt-3" src={img11} />
              </div>
              <div className="col">
                <Image classi="border-top border-warning border-5 pt-3" src={img12} />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col">
                <Image classi="border-top border-light border-5 pt-3" src={img13} />
              </div>
              <div className="col">
                <Image classi=" border-indigo  pt-3" src={img14} />
              </div>
            </div>
          </div>

        </div>

        <div className="row py-5">
          <div className="row">
            <div className="col-2 offset-1">
              <Image src={img21} />
            </div>
            <div className="col-2">
              <Image src={img22} />
            </div>
            <div className="col-2">
              <Image src={img23} />
            </div>
            <div className="col-2">
              <Image src={img24} />
            </div>
            <div className="col-2">
              <Image src={img25} />
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-1 pt-3">
              <p>
                There were other images from unrelated events elsewhere in the world including those showing a monkey, elephant, orangutan, bear and koala.
              </p>
            </div>
            <div className="col-4 offset-1 pt-3">
              <p>
                Among these animal photos, we identified that the image of monkeys had a similar history to the jaguar image.
              </p>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-5 offset-1">
              <div className="row">
                <div className="col-6">
                  <Image src={img26} />
                </div>
                <div className="col-6">
                  <p>When running a reverse image search on TinEye, it is possible to determine that the original image was published in 2017. In the same year, the Independent published the photo stating that the picture was from Jabalpur, India.</p>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-6">
                  <Image src={img27} />
                </div>
                <div className="col-6">
                  <p>During the 2019 Amazon rainforest fires, this image of the monkeys has been modified to form an Internet meme, where the flames have been added in the background. </p>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-6">
                  <Image src={img28} />
                </div>
                <div className="col-6">
                  <p>In the peak period of the Amazon fires, this image has also appeared on the printed edition of the Arab News article. The article also treated the misleading claim of the Amazon producing 20% oxygen as a confirmed fact, while it was highly contested by scientists and journalists.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-7 offset-1">
              <p>
                Other animal photos included burnt animals, many of which were from the past events including the
                {' '}
                <span className="text-light">fires in Cajamarca, Peru (2016),</span>
                {' '}
                at the
                {' '}
                <span className="text-secondary"> Kutai National Park in the Borneo Island, Malaysia (2016),</span>
                {' '}
                and in
                {' '}
                <span className="text-warning"> California, USA (2018).</span>
                {' '}
                The latter two have also emerged on Twitter during the fires at the Bandipur national park in India.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-2 offset-1">
              <Image classi="border-top border-light border-5 pt-3" src={img31} />
              <Image classi="pt-4" src={img32} />
            </div>

            <div className="col-2 offset-1">
              <Image classi="border-top border-secondary border-5 pt-3" src={img33} />
              <Image classi="pt-4" src={img34} />
            </div>

            <div className="col-2 offset-1">
              <Image classi="border-top border-warning border-5 pt-3" src={img35} />
              <Image classi="pt-4" src={img36} />
            </div>
          </div>

          <div className="row py-5">
            <div className="col-6 offset-1">
              <Heading3 text="Forest and fire images and videos from unrelated events have also emerged online" />
            </div>
            <div className="col-5 offset-1 pt-4">
              <p>
                Recycled images shared by public figures appeared several times in our analysis. For instance,
                <span className="text-light"> an old image of burning forests tweeted by Macron</span>
                {' '}
                has appeared multiple times on Facebook and Instagram.
                {' '}
              </p>
              <p>
                This image was shot by a photographer who passed away in 2003. The
                <span className="text-warning">photo posted by Cristiano Ronaldo</span>
                {' '}
                was from 2013 and not taken in southern Brazil.
              </p>
              <p>
                <span className="text-secondary">Leonardo DiCaprio also acknowledged that the photo</span>
                {' '}
                on his Instagram was from 2017.
              </p>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6"><Image classi="border-top border-light border-5 pt-3" src={img41} /></div>
                <div className="col-6"><Image classi="border-top border-warning border-5 pt-3" src={img42} /></div>
                <div className="col-6 pt-4"><Image classi="border-top border-secondary border-5 pt-3" src={img43} /></div>
              </div>

            </div>
            <div className="col-5 offset-1 py-5">
              <p>There were other forest-related images from various locations in the world. </p>
              <p>
                For example,
                {' '}
                <span className="text-warning">the most retweeted tweet is from 26th August (14340 retweets)</span>
                {' '}
                , and  included a photo claiming to show the deforestation issues in Thailand.
              </p>

              <p>
                When running a TinEye reverse image search, one can see that this photo has also appeared in a
                {' '}
                <span className="text-light"> news article published on 19 May 2018 by Thairath</span>
                , which reported about the housing project in Chiang Mai province claiming to affect the forest ecosystems in the area.
              </p>
            </div>
            <div className="col-10 offset-1">
              <div className="row">
                <div className="col-3">
                  <Image classi="border-top border-warning border-5 pt-3" src={img51} />
                </div>
                <div className="col-3">
                  <Image classi="border-top border-light border-5 pt-3" src={img52} />
                </div>
                <div className="col-3">
                  <Image src={img53} />
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-5 offset-1">
              <p> Another example is a fire-related video promoted by the Sunrise Movement on Twitter. Their tweet gathered more than 131K retweets and 157K likes and generated discussion on Twitter. While it was filmed in a place closer to the Amazon, it did not actually come from the affected area. </p>
              <p>
                The tweet included a
                <span className="text-indigo"> referral video where a Pataxo indigenous </span>
                {' '}
                woman is calling for the media's attention on their burning land. Originally from Brumadinho, the Pataxo-Hahahae tribe was directly affected by a dam collapse in early 2019.
                {' '}
              </p>
              <p>
                The tweet included a source link to a user @kimtaehgukk who tweeted this video on 21 August 2019.
              </p>
            </div>
            <div className="col-5">
              <Image classi=" border-indigo pt-3" src={img61} />
            </div>
            <div className="col-5 offset-1 pt-5">
              <Image classi="border-top border-secondary border-5 pt-3" src={img62} />
            </div>
            <div className="col-5 pt-5">
              <p>
                This video was
                <span className="text-secondary"> later debunked by the Associated Press </span>
                {' '}
                as content not linked with the Amazon rainforest fires, but was instead filmed in the Brazilian state of Minas Gerais.
                {' '}
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5   ">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="2 — Digital platforms and news sites can prolong the life cycle of recycled media and misleading claims" />
            <Heading3 classi="pb-2 pt-5" text="The recycled photo shared by Macron indicates that platforms do not necessarily treat the same debunked content equally.  " />
          </div>
          <div className="col-4 offset-1">
            <p>
              The famous photo which Macron posted on Twitter and Facebook was taken by a photographer who passed away years before the fires.
            </p>
            <p>
              In the peak period of the Amazon rainforest fires, the photo was then thematised and modified through the act of tweeting and retweeting. For instance, the copies of original images with minor modification and the screenshots of tagged images on other platforms have circulated on Twitter.
            </p>
            {' '}
            <p>
              {' '}
              It was also memefied with an image of Moro, a character in the animation film, Princess Monoke.
            </p>
          </div>
          <div className="col-4">
            <p>
              These images have also been brought together with hashtags like #fakenews which allude to misleading claims.
            </p>
            <p>
              Beyond the 2019 Amazon fires, these images surfaced online in various contexts, from clean energy investment to peatland fires.
              {' '}
            </p>
          </div>
          <div className="col-2">
            <Image src={img7} />
          </div>
          <div className="col-4 offset-1">
            <p>
              <span className="text-warning">Memefied image —</span>
              {' '}
              image with other visual elements overlaid or juxtaposed (mainly satirical content)
            </p>
            <p>
              <span className="text-secondary">Copies of original image —</span>
              {' '}
              with minor modifications (cropped or stretched)
            </p>
            <p>
              <span className="text-light">Screenshots of the image —</span>
              {' '}
              posted in other online spaces (Instagram stories and posts, tweets) with additional textual elements
            </p>
          </div>
        </div>

        <div className="row py-2" style={{ marginTop: '-35vh' }}>
          <div className="col-10 offset-1">
            <Image src={img71} />
          </div>
        </div>

        <div className="row py-4">
          <div className="col-5 offset-1">
            <p>
              When looking at how the image shared by Macron is treated on Facebook, one can observe that not all versions of the same image are treated equally. For example,
              <span className="text-warning"> one widely circulating version of an image on Facebook has a warning from fact-checking organisations</span>
              , whereas
              {' '}
              <span className="text-secondary"> the same image posted by Macron</span>
              {' '}
              contains no such warning.
              {' '}
            </p>
            <p>This example indicates that a potentially misleading image can have a longer life despite verification labelling and fact-checking practices on digital platforms. Their policies and algorithms can therefore prolong the lifespan of potentially misleading content online.</p>
          </div>
          <div className="col-4">
            <Image classi="border-top border-warning border-5 py-4" src={img81} />
            <Image classi="border-top border-secondary border-5 pt-4" src={img82} />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-5 offset-1 pb-5">
            <Heading3 text="News articles" />
            <p className="pt-3">
              Statements and claims, including misleading ones, can also surface even if they are widely debunked online, especially when news articles continue to cite a misleading claim without correction.
            </p>
            <p>
              As we looked into the media articles promoted  with the 20% oxygen claim on Twitter, a number of articles published by CNN, Cnet, Global News and Arab News have surfaced. All of
              <span className="text-warning"> these articles treated the misleading claim as a confirmed fact</span>
              , and did not add any corrections to the published stories.
            </p>
            <p>
              <span className="text-secondary">Corrected</span>
              {' '}
              the statement after publication
            </p>
            <Image src={img91} />
            <p className="text-end">link</p>
            <p className="pt-3">
              <span className="text-light">Perplexing</span>
            </p>
            <Image src={img92} />
            <p className="text-end">link</p>
          </div>
          <div className="col-4 offset-1 pb-5">
            <Image src={img93} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img94} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img95} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img96} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img97} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img98} />
            <p className="text-end">link</p>
          </div>

          <div className="col-5 offset-1 pt-5">
            <p>
              CNN particularly stood out as their articles consistently supported the claim. When looking at the URLs embedded in all the media articles in our sample, there were 26 unique URLs directed to the CNN website. Among these URLs,
              <span className="text-warning"> 8 stories explicitly promoted the misleading claim.</span>
            </p>
            <Image src={img101} />
            <p className="text-end">link</p>
            <Image src={img102} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img108} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img109} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img110} />
            <p className="text-end">link</p>
          </div>
          <div className="col-4 offset-1 pt-5">
            <Image src={img93} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img103} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img104} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img105} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img106} />
            <p className="text-end">link</p>
            <Image classi="pt-3" src={img107} />
            <p className="text-end">link</p>

          </div>
        </div>

      </div>

      <div className="container-fluid gradient text-white">
        <div className="row py-5">
          <div className="col-2 offset-1">
            <p className="fw-bolder serif">Participate:</p>
          </div>
          <div className="col-3 offset-1">
            🎤  — Add your voice at this link where we collect inputs about this issue story

          </div>
          <div className="col-3 offset-1">
            ✏️ — Read the blog where we share new insights about this issue story
          </div>
        </div>
      </div>

      <NextPrev prev="Prev Issue Story" linkPrev="/second-issue" />
    </Layout>
  );
}
