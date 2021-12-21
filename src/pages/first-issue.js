import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import {
  Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';
import img1 from '../images/first-issue/1-intro@2x.png';
import img2 from '../images/first-issue/2-intro.png';
import img3 from '../images/first-issue/3-bolsVsMacr.png';
import img4 from '../images/first-issue/4-rightVsLeft.png';
import img5 from '../images/first-issue/5-proAgainst@2x.png';
import img6 from '../images/first-issue/prova.png';
import img7 from '../images/first-issue/7-prova.png';
import img8 from '../images/first-issue/8-deforestationDrivers.png';
import img9 from '../images/first-issue/9-linking@2x.png';
import img10 from '../images/first-issue/10-all.png';
import img11 from '../images/first-issue/11-full@2x.png';
import Image from '../components/Image';
import NextPrev from '../components/NextPrev';

export default function firstIssue() {
  return (
    <Layout section={{
      title: 'Governance Issue',
    }}
    >
      <div className="container-fluid bg-primary py-5 ">
        <div className="row">
          <div className="col-6 offset-1 py-4">
            <Heading1 text="Emerging forest governance issues through hashtags" />
          </div>
        </div>
        <div className="row align-items-top">
          <div className="col-4 offset-1">
            <p className="pb-2 serif">
              Forest governance deals with a wide range of issues from deforestation to global trade, from land use to sustainable financing. We were curious to know which forest governance issues surfaced on social media in relation to the 2019 Amazon forest fires, and which became a global talking point. We looked at how these issues surfaced in relation to the fires.
            </p>
            <p className="py-2 serif">
              Looking at how the hashtags associated with Amazon fires on Twitter relate to each other*, one can observe different voices, concerns and positioning around a wide variety of forest governance issues, involving international and national political, business and other public figures.
            </p>
            <p className="py-2 serif">
              This issue story depicts a selection of insights collected through a series of conversations with forest governance experts and journalists, many of whom followed the event closely during the peak period.  when the event became a global issue.
            </p>

          </div>
          <div className="col-5 offset-1 mt-n5">
            <div className="row">
              <Image src={img1} classi="mt-n5" />
            </div>

          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-4 offset-1">
            <Quote classi="py-5" text="*We collected Twitter data covering the period of 24th August to 2nd September 2019 (10 days) using the following hashtags: #ActForTheAmazon, #amazonfires, #AmazonRainforest, #PrayforAmazonia, #SaveTheAmazon, and #SOSAmazonia. We then looked at what hashtags were associated with these in tweets, and observed different voices, concerns and positioning around a wide variety of forest governance issues, involving international and national political, business and other public figures." />

          </div>
          <div className="col-3 offset-1">
            <p className="py-2 serif">
              Hashtags can act as an indicator of the issues and concerns of different publics and social media users. It can help us understand how different issues are associated with the main event, including which actors have been brought up with those issues.
            </p>
          </div>
          <div className="col-2">
            <Image src={img2} classi="col-5" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="1 — Constellation of narratives supporting and opposing Bolsonaro and/or Macron" />
          </div>
          <div className="col-lg-5 col-10 offset-1">
            <Image src={img3} />
          </div>
          <div className="col-lg-4 col-10 offset-1">
            <Heading3 classi="pb-3" text="Bolsonaro vs Macron: War of Words" />
            <p>
              One of the most visible clusters was associated with the
              {' '}
              <span className="text-secondary">Brazilian President Bolsonaro</span>
              {' '}
              and the series of events and exchanges between him and the
              {' '}
              <span className="text-warning">French President Macron</span>
              , referred to as the ‘war of words’ by The Guardian.
            </p>
            <p>When the Amazon rainforest fires became international news, Macron tweeted the need to address the Amazon rainforest fires at the G7 meeting on 22 August 2019, receiving support from the Canadian Prime Minister Trudeau. Bolsonaro then criticised Macron for using the Brazilian issue for personal political gain, saying that suggesting a discussion of the issue without Brazil's involvement showed a colonial mentality in the 21st century. </p>
            <p>At the same time, Bolsonaro supposedly mocked the French first lady in a Facebook post, to which Macron responded that this was “disrespectful” during the G7 press conference. Brazil then rejected $20 million in aid offered by G7 countries, followed by Twitter exchanges between the former US President Trump and Bolsonaro showing support to each other. </p>
          </div>
        </div>
        <div className="row pt-2 pb-3 align-items-center">
          <div className="col-4 offset-1">
            <p>
              When looking at the network, the hashtags
              {' '}
              <span className="text-warning">denouncing Bolsonaro or showing support for Macron</span>
              {' '}
              were more visible than the hashtags that are either
              {' '}
              <span className="text-secondary">supporting Bolsonaro or criticising Macron</span>
              . In particular, as most hashtags criticising Bolsonaro were in Portuguese, Brazilian perspectives against Bolsonaro have surfaced more prominently in the English language Twitter space.
            </p>
            <p>
              While the hashtags
              <span className="text-secondary"> critical towards Macron and showing support to Bolsonaro</span>
              {' '}
              were scattered across the network, not forming any clusters of their own, the hashtags
              {' '}
              <span className="text-warning">against Bolsonaro</span>
              {' '}
              were positioned closely with other hashtags criticising Bolsonaro.
            </p>
          </div>
          <div className="col-5 offset-1">
            <Image src={img4} />
          </div>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-10 offset-1 position-relative">
            <Image src={img5} />

            <p className="position-absolute col-3" style={{ top: '5%', left: '5%' }}>
              <span className="text-warning"> These hashtags </span>
              {' '}
              were identified as the hashtags against Bolsonaro or pro-Macron.
            </p>

            <p className="position-absolute col-3" style={{ bottom: '25%', right: '0%' }}>
              <span className="text-secondary"> These hashtags </span>
              {' '}
              were identified as the hashtags against Macron or pro-Bolsonaro (in all languages).
            </p>

          </div>
        </div>

        <div className="row py-5">
          <div className="row">
            <div className="col-lg-5 col-10 offset-1">
              <Heading3 classi="pb-3" text="The hashtags against Bolsonaro portray voices and concerns from the State of Pará and Rio de Janeiro to Peru" />
              <p>
                When zooming into
                {' '}
                <span className="text-warning">#forabolsonaro</span>
                , one of the most popular hashtags against Bolsonaro with over 2300 tweets, the top tweet was a tweet by Dilma Bolada, a fictional character who became a social media influencer  during  the terms of Dilma Rousseff, the former Brazilian president. With 1.1 million followers, the account called for protests  in various cities in Brazil. Another tweet posted a video claiming to show the fires reaching a residential street in the state of Para, one of the Brazilian states with  an increasing deforestation rate. There was also a tweet with a video of protests at the Brazilian embassy in Peru, using hashtags that criticise Bolsonaro and Ricardo Salles, the former Brazilian Environment Minister.
              </p>
            </div>
            <div className="col-3 offset-2">
              {/* <Image classi="" src={img61} /> */}
            </div>
            <div className="col-10 offset-1 margine-top">
              <Image classi="pb-5" src={img6} />
            </div>
            <div className="col-lg-5 col-10 offset-1 margine-top">
              <p>
                Dilma Bolada’s account was also visible when looking into the hashtags
                {' '}
                <span className="text-warning">#panelaco</span>
                {' '}
                and
                {' '}
                <span className="text-warning">#panelaço</span>
                . Panelaco is a form of protest which was originally used against the former Dilma government and was later taken over by the protestors against Bolsonaro. The social media influencer’s account tweeted calling for a balcony protest by banging pots and pans at their window using a photo of the former president Dilma holding a pan and sharing a video of panelaço in Rio de Janeiro. One of these tweets was also shared by the Brazilian Labour Party Senator Humberto Costa and the former Health Minister.
              </p>
            </div>
            <div className="col-3 offset-2 mt-n5">
              {/* <Image classi=" " src={img64} /> */}
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="row mb-n5">
            <div className="col-lg-5 col-10 offset-1">
              <Heading3 classi="pb-3" text="While not as prominent as those against him, voices supporting Bolsonaro were also present" />
              <p>
                When zooming into pro-Bolsonaro hashtags it is possible to identify tweets from pro-Bolsonaro accounts, many of which are suspended on Twitter. For instance,
                <span className="text-secondary"> #MacronLiar</span>
                {' '}
                was used to criticise the NGOs presence in the Amazon. The narrative corresponds to Bolsonaro’s statement on 21 August 2019 accusing them of setting the fires.
              </p>
            </div>
            <div className="col-3 offset-2">
              {/* <Image classi="py-3" src={img71} /> */}
            </div>
          </div>
          <div className="row margine-top-2">
            <div className="col-10 offset-1">
              <Image classi="py-3" src={img7} />
            </div>
            <div className="col-lg-5 col-10 offset-1 margine-top-2">
              <p className="py-3">
                Another pro-Bolsonaro hashtag,
                {' '}
                <span className="text-secondary">  #vivabolsonaro</span>
                , was used in a tweet by a columnist of Breitbart, an American far-right news site. The tweet included a link to the Breitbart’s article “Delingpole: Amazon Fires – A Big, Fat Nothingburger of a #FakeNews Scare Story”. The article criticised the news from the mainstream media as “fake news” and twisted the narrative to portray alternative ways to interpret the scientific insights. Interestingly, to do so, the article used a mix of references ranging from tweets from suspended accounts to those from scientists.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="2 - The global North-South link: from deforestation drivers and consumer responsibilities, to international trade and crimes in the forests " />
          </div>
          <div className="col-lg-5 col-10 offset-1">
            <Heading3 classi="pb-3" text="Linking deforestation with consumer responsibilities" />
            <p>
              Some people who tweeted with trending Amazon fires-related hashtags made the connection between
              deforestation and consumer responsibilities. As shown below, a number of
              {' '}
              <span className="text-light ">
                deforestation drivers
                {' '}
                such as #cattleranching, #beef, #soybeans and #palmoil
                {' '}
              </span>
              {' '}
              were brought up in close proximity to the
              {' '}
              <span className="text-warning">
                {' '}
                deforestation hashtags
                {' '}
                including #stopdeforestation, #amazondeforestation, #defunddeforestation.
              </span>
              {' '}
              A number of hashtags also referred to consumer practices around meat or beef, such as #gowithoutbeef, #govegan, and #stopeatingmeat.
            </p>
          </div>
          <div className="col-lg-5 col-10 offset-1">
            <Image src={img8} />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-10 offset-1">
            <Heading3 classi="pb-3" text="Linking deforestation with business, investment, trade, economy and crimes" />
            <p>
              There were also
              {' '}
              <span className="text-light"> business, investment, economy and trade-related hashtags</span>
              {' '}
              forming different clusters. Specific company names such as Minerva, one of the biggest meat processing companies in the world, and Blackrock, the leading investment firm criticised for investing in deforestation also emerged. Some referred to tradewars (i.e. #tradewars) and Mercosur (i.e. #eumercosur, #stopmercosur), while others brought up the CEOs name (#stephenschwarzman, #jeffbezos).
              {' '}
              <span className="text-secondary"> There is also a cluster on the top left where #taxpayer, #bank and #cocoa sit close to #trumpaskidsincage and #liarinchief.</span>
            </p>

            <p>
              {' '}
              At the centre bottom, one can also identify a cluster where
              <span className="text-warning"> #financing, #highway, and #transport</span>
              {' '}
              appear next to
              {' '}
              <span className="text-warning">#responsible</span>
              . These hashtags were brought together with
              {' '}
              <span className="text-warning">#farmers</span>
              , indicating the link with agricultural activities. #responsible was also brought together with #mercosur, a trade bloc.
            </p>

            {/* <Image classi="border-secondary border-1" src={img91} /> */}
          </div>
          <div className="col-lg-5 col-10 offset-1">
            <Image src={img9} />
            <div className="row py-3">
              <div className="col-8">

                {/* <Image src={img92} /> */}
              </div>
            </div>

          </div>
        </div>
        <div className="row pt-5">
          <div className="col-5 offset-1 mmb-n5">
            <Heading3 classi="pb-3" text="Linking deforestation with contested agricultural practices" />
            <p className="py-3">
              Hashtags such as #gmo, #glyphosate, and #glifosato are associated  with #climatechange, #bolsonaro and #brazil. A company name, #monsanto and #boycott were brought together with #gmo and #glyphosate. In the case of #gmo, the following hashtags have been tweeted together: #deforestation, #plantatree, #forestfires, #bees, #agribusiness, #soybeans, #reforestation, and #protest.
            </p>
          </div>
          <div className="col-10 offset-1 margine-top-2">
            <Image src={img10} />
          </div>
          <div className="col-5 offset-1" style={{ marginTop: '-10vh' }}>

            <p>These hashtags (#gmo, #glyphosate, and #glifosato) were positioned closely with #crimeagainsthumanity and #stopdeforestation. For instance, #crimeagainsthumanity was brought together with #ecocide, #GOP (the US Republican party), #environment and hashtags against Bolsonaro and Ricardo Salles.</p>
            <p>There was also a cluster referring to crime,misconduct and conflict, including hashtags such as #warcrime, #corruption, #pollution, #tradewar, #landgrabbing, sitting closely with #leather, #europe, and #cop24. </p>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-6 offset-1 mmb-n5">
            <Heading3 classi="pb-3" text="Linking the Amazon Fires with rights-related issues " />
            <p>
              {' '}
              <span className="text-warning">Rights-related issues</span>
              {' '}
              have also been brought up, namely #animalrights, #landrightsnow, #indigenousirghts, #humanrights and #defendindigenousrights.
            </p>
          </div>
          <div className="col-8 offset-2 mt-n5">
            <Image src={img11} />
          </div>
        </div>
      </div>

      <div className="container-fluid gradient text-white">
        <div className="row py-5">
          <div className="col-2 offset-1">
            <AnchorLink to="/about#ResearchMethods" className="text-white text-decoration-none"><p className="fw-bolder serif">Read more about our research methods:</p></AnchorLink>

          </div>
          <div className="col-2 offset-1">
            <h6>🎤  — Add your voice at this link where we collect inputs about this issue story</h6>

          </div>
          <div className="col-2 offset-1">
            <h6>✏️ — Read the blog where we share new insights about this issue story</h6>
          </div>
          <div className="col-2 ps-4">
            <a href="https://medialab.github.io/minivan/#/explorer?bundle=https:%2F%2Fraw.githubusercontent.com%2Ffedericopozzi%2Fefi-amazon-fires%2Fmain%2Fsrc%2Fvisualisations%2FBUNDLE%2520-%2520Amazon%2520Fires%2520co-hashtag%2520network.json%3Ftoken%3DABXT7KIDA37AD6LJIJMUFYLBU5CV2" target="_blank" rel="noreferrer" className="text-white text-decoration-none"><h6>🔎 — Explore the interactive network</h6></a>
          </div>
        </div>
      </div>

      <NextPrev
        next="Next Issue Story >"
        linkNext="/second-issue"
      />
    </Layout>
  );
}
