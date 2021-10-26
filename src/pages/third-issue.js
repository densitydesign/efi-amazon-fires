import { Link } from 'gatsby';
import Layout from '../components/Layout';
import {
  GraphQuote, Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';

import NextPrev from '../components/NextPrev';
import Image from '../components/Image';
import img1 from '../images/first-issue/1-intro@2x.png';
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

export default function secondIssue() {
  const carousel = [
    img21, img22, img23, img24, img25,
  ];
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
          </div>
        </div>
      </div>

    </Layout>
  );
}
