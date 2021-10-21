import Layout from '../components/Layout';
import {
  GraphQuote, Heading1, Heading3, Heading4, Quote,
} from '../components/Typography';
import Image from '../components/Image';
import img1 from '../images/second-issue/1-intro.png';
import img2 from '../images/second-issue/2-top.png';
import img3 from '../images/second-issue/3-focus2.png';
import img4 from '../images/second-issue/4-sentinel.png';
import img41 from '../images/second-issue/4-nasa.png';
import img42 from '../images/second-issue/4-science.png';
import img43 from '../images/second-issue/4-united.png';
import img5 from '../images/second-issue/5-tweets.png';
import img51 from '../images/second-issue/5-parm.png';
import img52 from '../images/second-issue/5-strachan.png';
import img53 from '../images/second-issue/5-daniel.png';
import img61 from '../images/second-issue/6-legend.png';
import img6 from '../images/second-issue/6-main.png';
import img62 from '../images/second-issue/6-focus1.png';
import img7 from '../images/second-issue/7-profstr.png';
import img8 from '../images/second-issue/8-main.png';
import img81 from '../images/second-issue/8-legend.png';
import img9 from '../images/second-issue/9-main.png';
import img91 from '../images/second-issue/9-tweet.png';

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
        <div className="row justify-content-between py-5">
          <div className="col-3 offset-1">
            <p>
              {' '}
              <span className="text-warning"> #sentinel2 (329 tweets)</span>
              : the majority of tweets referred to this tweet by @CopernicusEU, the EU Earth Observation Programme (1).  It called for more attention on the fires in Africa which were happening simultaneously. Notably, #africafires emerged in the top hashtags in the peak period of the Amazon rainforest fires.
            </p>
            <Image src={img4} />
          </div>
          <div className="col-3 px-5">

            <p>
              <span className="text-light">#nasa (323 tweets)</span>
              : Top tweets with this hashtag referred to NASA’s scientist Douglas Morton,  with his interview on Russia Today in Spanish (3). Another tweet was an endorsement for Douglas Morton by another academic (3).
              {' '}
            </p>
            <Image src={img41} />
          </div>
          <div className="col-3">
            <p>
              <span className="text-indigo">#unitedbehindscience (215 tweets)</span>
              : The majority of tweets quoted the tweet by @borisherrmann, a German offshore sailor and skipper of Team Malizia (a zero-carbon boat on which Greta Thunberg was sailing to New York at the time) (3). He tweeted a GIF of a live map with the hashtag #amazonfires. The hashtag #malizia also appeared on the top hashtag list.
            </p>
            <Image src={img43} />

          </div>
          <div className="col-1" />
          <div className="col-3 offset-1 pt-4">
            <p>
              <span className="text-secondary">#sciencematters (217 tweets)</span>
              : the majority of tweets with this hashtag promoted a tweet by @DrGJackBrown, a physician who has frequently appeared on CNN (2).
              <p />
            </p>
            <Image src={img42} />
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-4 offset-1">
            <Heading3 classi="pb-3" text="Scientific voices emerge at the top only after the spike " />
          </div>
          <div className="col-6">
            Scientific voices gathered visibility only after the spike when the number of tweets started to decrease in the peak period between 24 August to 2 September 2019. . As shown below, a few science-related tweets appeared at the top as the overall number of retweets slowed down. These tweets were from the users claiming to have a scientific or research background, namely
            {' '}
            <span className="text-secondary"> @astro_luca (astronaut)</span>
            ,
            {' '}
            <span className="text-indigo">@BiologistDan (biologist)</span>
            , and
            {' '}
            <span className="text-warning">@ProfStrachan (energy policy)</span>
            .
          </div>

        </div>
        <div className="row align-items-center pb-5">
          <div className="col-7 offset-1">
            <GraphQuote classi="py-5" emoticon="📉" text="Top 10 tweets per day for number of retweets" />
            <Image src={img5} />
            <div className="row py-4 justify-content-between">
              <div className="col-3"><Image src={img51} /></div>
              <div className="col-3"><Image src={img52} /></div>
              <div className="col-3"><Image src={img53} /></div>

            </div>
          </div>
          <div className="col-3">
            <p>
              <span className="text-secondary">A tweet by Luca Parmitano (@astro_luca), an Italian astronaut</span>
              {' '}
              of the European Space Agency, emerged on the top retweet list on 29-30 August 2019, receiving more than 850 retweets. His tweet included aerial images of the Amazon fires.
            </p>
            <p>
              <span className="text-warning">A tweet by @ProfStrachan, the most active and influential account</span>
              {' '}
              based on the number of tweets and mentions over the 10-day period, appeared at the top once the peak started to cease. One of his tweets referred to a Guardian article featuring the executive secretary of the UN convention on biological diversity.
            </p>
            <p>
              <span className="text-indigo">Another tweet from a science-related account that appeared after the peak period was from @BiologistDan</span>
              , an account claiming to be a biologist. The tweet points out the link between cattle farming and the fires.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-6 offset-1">
            <Heading3 classi="pb-3" text="Scientific accounts found themselves at the periphery of the Twitter conversation" />
            <p>
              Twitter activity does not necessarily succeed in bringing different kinds of actors into sustained new engagements with each other. In particular, scientists and researchers were not only the least visible, but also not engaged with other clusters of actors.
            </p>
            <p>
              While most scientific actors did not come into contact with other most mentioned accounts,
              {' '}
              <span className="text-warning">@profstrachan</span>
              , an account representing an academic specialised in energy policy and environmental management found itself at the centre of Twitter engagement.
            </p>
          </div>
          <div className="col-4 h-100 align-self-end">
            <Image src={img61} />
          </div>
          <div className="col-9 offset-1 pb-3" style={{ marginTop: '-2vh' }}>
            <Image src={img6} />
          </div>
          <div className="offset-8 col-3 " style={{ marginTop: '-35vh' }}>
            <p>
              Far from the centre, there are a few scientist names, namely
              <span className="text-secondary">  @Erika_Berenguer</span>
              , a tropical forest ecologist at the University of Oxford,
              {' '}
              <span className="text-secondary"> @AnaPDAguiar</span>
              , a researcher at the Stockholm Resilience Centre specialised in land use models and scenarios. Further to the right,
              <span className="text-secondary"> @nasajpl</span>
              {' '}
              (NASA Jet Propulsion Laboratory) along with
              {' '}
              <span className="text-secondary"> @Space_Station</span>
              {' '}
              (the International Space Station),
              {' '}
              <span className="text-secondary"> @copernicuseu and @copernicusems</span>
              {' '}
              (the EU Earth Observation Programme) can be observed.
            </p>

          </div>
          <div className="col-4 offset-1 pt-5">
            <p>
              <span className="text-indigo">@AnaPDAguiar</span>
              a researcher closely positioned to @Erika_Berenguer tweeted with scientific insights on the increase in the number of fires in the Amazon. It stated that the increase of fires in 2019 has taken place in the period after the deforestation control actions have been put in place. It points out a simple comparison without context can lead to a wrong conclusion.
            </p>
            <Image classi="pt-3" src={img62} />
          </div>
          <div className="col-4 offset-2 pt-5">
            <p>
              <span className="text-light">@Erika_Berenguer</span>
              was one of the few scientists to surface in our data collections.  With a background in tropical forest ecology, the researcher is currently with Oxford University and Lancaster. The top tweet mentioning her account directed to a tweet with a video of a BBC Newsnight interview.
            </p>
            <Image classi="pt-3" src={img1} />
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-7 offset-1">
            <Heading3 classi="pb-3" text="Scientific actors were mostly peripheral, but a single researcher account found a way to become influential. " />
          </div>
          <div className="col-4 offset-1">
            <p>
              <span className="text-secondary"> @profstrachan</span>
              {' '}
              has also appeared as the single most active scientific account among the top 20 users who posted the highest numbers of tweets.
            </p>
            <p>This account is also the most “influential” user in this set, receiving the highest number of mentions more than any other top accounts. </p>
          </div>
          <duv className="col-5 offset-1">
            <Image src={img7} />
          </duv>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5  ">
        <div className="row gradient py-5 align-items-center">
          <div className="col-10 offset-1 py-3 ">
            <Heading4 classi="pb-4" text="2 — The role of science in media articles promoted on Twitter with misleading claims" />
            <Heading3 classi="pb-3" text="Media treats scientific voices as the key sources when debunking " />
          </div>

        </div>
        <div className="row">
          <div className="col-7 offset-1">
            <GraphQuote classi="py-3" emoticon="📉" text="Most prominent sources in media articles promoted with a misleading claim on Twitter, resized by number of mention" />
            <Image src={img8} />
          </div>
          <div className="col-2 offset-1">
            <Image src={img81} />
            <p className="pt-5">
              Out of 23 freely accessible, English-language media articles circulated with the misleading claim “20% of the world’s oxygen is produced in the Amazon” on Twitter,
              <span className="text-secondary"> there were 6 articles which debunked the claim. These articles were published by Forbes, National Geographic, BBC, Science News, Atlantic and Asiaville News.</span>
              {' '}
            </p>
            <p>
              When compared to stories which treated the misleading claim as (potentially) correct, they had the tendency to
              {' '}
              <span className="text-warning">refer to scientific sources more than the articles taking different positions.</span>
              {' '}
            </p>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-5 offset-1">
            <Heading3 text="Some scientists got it wrong and (yet) received media’s attention " />
          </div>
          <div className="col-4 offset-1">
            <p>Scientists, especially those who are not specialised in the Amazon-related issues, can get it wrong. In our sample of 23 articles, there were two scientific sources who referred to the misleading claim as (potentially) accurate. </p>
          </div>
          <div className="col-6 offset-1">
            <Image src={img9} />
          </div>
          <div className="col-3 offset-1 pt-5">
            <p>
              <span className="text-light">Scott Kelly</span>
              , a former NASA astronaut and an engineer, appeared in a National Geographic article as someone who promoted a misleading claim. His tweet, quoted in the article, states, “The #AmazonRainforest produces more than 20% of the world's oxygen. We need O2 to survive!”
            </p>
            <Image src={img91} />
          </div>
          <div className="col-6 offset-1">
            <p>
              There was also a
              <span className="text-warning"> senior research fellow in economics at the United Nations University</span>
              , who repeatedly appeared in an Arab News article.  In the article, the source mentions, “The Amazon is often referred to as the lungs of the planet, perhaps providing 20 percent of the world’s oxygen”. The article then repeats the claim multiple times, treating it as a confirmed fact.
              {' '}
            </p>
          </div>
        </div>
      </div>

    </Layout>
  );
}
