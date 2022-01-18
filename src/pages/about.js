import Layout from '../components/Layout';
import img1 from '../images/img1.png';
import { Heading1, Heading5 } from '../components/Typography';

export default function Index() {
  return (
    <Layout section={{
      title: 'about',
    }}
    >
      <div className="container-fluid bg-primary ">
        <div className="row ">
          <div className="col-10 offset-1" id="background">
            <h1 className=" serif fw-bolder pt-5">Background</h1>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="The 2019 Amazon rainforest fires " />
          </div>
          <div className="col-6 offset-1">
            <p>
              During the months of August and September 2019, the Amazon rainforest fires captured global attention. Celebrities, politicians and other public figures spoke up and shared their voices and concerns with hashtags on social media. While the Amazon rainforest fires became an international issue in 2019, far fewer debates and news stories have emerged in 2020 despite the situation becoming worse. In 2020, not only did the number of fires show a 61% rise in September compared to the same month in the previous year, but the Pantanal wetlands in Brazil also faced a record high number of fires. The fires in the Amazon are reported to have a strong link with deforestation driven by the global agricultural commodity trade. As the forest loss has significant impacts on soil moisture, the dry land is amplifying the severity of the fires every year. Therefore, the Amazon rainforest fires are not just a single event that happened in the past. They continue to exist as an issue that needs to be addressed globally and locally.
            </p>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Key events and controversies " />
          </div>
          <div className="col-6 offset-1">
            <p>
              The 2019 Amazon rainforest fires made the global news headlines when the smoke plunged Sao Paulo into darkness on 19 August 2019. Yet, a series of interviews with experts and journalists have revealed that there were a number of other events in the lead up to it. Following the annual deforestation data release by INPE, the National Institute for Space Research in Brazil, the Bolsonaro government dismissed Ricardo Magnus Osório Galvão as the INPE’s director on 3 August 2019. The event was followed by the Day of Fire’ (Dia do Fogo) on 10-11 August 2019 which many referred to as an event confidentially planned and illegally organised by the local ranchers and landowners for ‘slash-and-burn’ of the publicly owned forests in the state of Para. The 2019 Amazon rainforest fires were also surrounded by a number of political controversies. As Bolsonaro has widely supported agricultural businesses and industries such as cattle ranching and soybean farming, there was already growing criticism towards the government within Brazil before the fires made it to the international media. In addition, Macron among other politicians responded on social media calling for a discussion of international aid at the G7 meeting. A series of criticisms between Macron and Bolsonaro followed which led to a 'war of words', as the Guardian reported.
              {' '}
            </p>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Media’s response" />
          </div>
          <div className="col-6 offset-1">
            <p>
              According to a number of Brazil-based journalists consulted in this project, environmental issues have not been a popular subject in the Brazilian media. Therefore, the 2019 event was the first time that the Amazon rainforest fires were widely reported nationwide. Many who were involved in reporting pointed out that the political climate has positively influenced them to focus on Amazon issues. Yet, those who have been following the deforestation issues closely and others following political matters indicated the growing difficulties in carrying out their journalistic work in Brazil, due to the limited access and the abundance of false and unverified information provided by the government. According to the consulted journalists, international media also widely reported the event, sending a number of reporters to Brazil and the affected area. While the international media sparked national interests on the issue even further, some were conducting 'parachute journalism' without the background, context nor local contacts. It is also noteworthy that various debunking efforts have been carried out by the international media, verifying the photos, videos and claims that have circulated on social media.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary ">
        <div className="row " id="ResearchMethods">
          <div className="col-10 offset-1">
            <h1 className=" serif fw-bolder pt-5">Research Methods</h1>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-8 offset-1">
            <p>
              We employed “quanti-qualitative” social media analysis, specifically Twitter image and text analysis with digital methods (Rogers, 2013, 2019; Caliandro & Gandini, 2016) and cross-platform image analysis with visual methods (Colombo, 2019; Rose, 2016; Rogers, 2017, Niederer, 2018, 2019; Niederer & Colombo, 2019). Semi-structured interviews with 17 issue experts consisting of Brazilian and international journalists, researchers and representatives from NGOs and fact-checking organisations have been conducted to collect key events including controversial/contentious issues.  Detailed methodological elaboration can be found in the Out of the Flames full report accessible under ‘Resources’.
              {' '}
            </p>
            <p>For the Twitter image analysis, we collected 311,483 tweets containing one of the following hashtags: #ActForTheAmazon, #amazonfires, #AmazonRainforest, #PrayforAmazonia, #SaveTheAmazon, #SOSAmazonia, covering the period of 24th August to 2nd September 2019. This period was chosen because it corresponds to a window of higher engagement on Twitter and other platforms. We then carried out 12 further lines of inquiry to understand the actors, narratives, issues and practices that emerged around key Amazon rainforest fires hashtags on Twitter. </p>
            <p>For the cross-platform image analysis, we collected the most engaged images on five platforms (Twitter, Instagram, Facebook, YouTube and Google Images), covering 24th August to 2nd September 2019. This period corresponds to a period of higher social media activity around the Amazon rainforest fires. Similar queries were used for data extraction to enable cross-platform comparison. </p>
            <p>As an additional exploratory analysis to understand the role of scientific sources in the media coverage circulated on Twitter with a misleading claim, “20% of the world’s oxygen is produced in the Amazon”, we collected 23 freely accessible, English-language media articles, based on the queries “20%” and “oxygen” between 24 August 2019 and 19 March 2020 based on the Twitter dataset. We then manually collected two types of data from the sample, namely the article-level data and source-related data.</p>
            <p>
              By taking an empiricist and participatory style of inquiry, 14 researchers, media, NGOs and forest practitioners with knowledge and expertise about the subject matter were invited to participate in collaborative interpretation of network maps and visualisations.
            </p>
            <p>
              As this website portrays the interpretation with a limited number of issue experts, any additional insights and interpretations from you would enrich our analysis further. If you would like to share with us your inputs, in particular, on the following network maps and visualizations, please do get in touch through
              <a
                href="https://forms.gle/Mk1MeTKPmzMQUk9Q8"
                target="blank"
                className="text-white"
              >
                {' '}
                this form.
                {' '}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary ">
        <div className="row " id="resources">
          <div className="col-10 offset-1">
            <h1 className=" serif fw-bolder pt-5">Resources</h1>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Full report" />
          </div>
          <div className="col-6 offset-1">
            <p>
              link
              {' '}
            </p>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Co-hashtag network visualisation" />
          </div>
          <div className="col-6 offset-1">
            <p>
              <a href="https://medialab.github.io/minivan/#/explorer?bundle=https:%2F%2Fraw.githubusercontent.com%2Ffedericopozzi%2Fefi-amazon-fires%2Fmain%2Fsrc%2Fvisualisations%2FBUNDLE%2520-%2520Amazon%2520Fires%2520co-hashtag%2520network.json%3Ftoken%3DABXT7KIDA37AD6LJIJMUFYLBU5CV2" target="_blank" rel="noreferrer" className="text-white text-decoration-none">click here</a>
            </p>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Top 100 hashtags overtime" />
          </div>
          <div className="col-6 offset-1">
            <a href="https://drive.google.com/drive/folders/11aCuSVZt8nJ4wTho4pTkosjZkBzcg0jH?usp=sharing" target="_blank" rel="noreferrer" className="text-white text-decoration-none">click here</a>
          </div>
        </div>

      </div>

      <div className="container-fluid bg-primary ">
        <div className="row " id="team">
          <div className="col-10 offset-1">
            <h1 className=" serif fw-bolder pt-5">Team and Contributors</h1>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-8 offset-1">
            <p>
              This project is part of the New Ways for Forest Governance (NewGo!), a start-up project of the European Forest InstituteI’s newly established Governance Programme, funded by the German Federal Ministry of Food and Agriculture (BMEL), and has been prepared and coordinated by a core team comprising:
            </p>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="European Forest Institute" />
          </div>
          <div className="col-6 offset-1">
            <p>
              Rina Tsubaki, Communications Manager - Strategic Partnerships, The European Forest Institute
              <br />
              Yitagesu Tekle Tegegne, Governance Forest Governance Team Lead, The European Forest Institute
              <br />
              Georg Winkel, Head of Governance Programme, The European Forest Institute

            </p>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Public Data Lab" />
          </div>
          <div className="col-6 offset-1">
            <p>
              Liliana Bounegru, Cofounder, Public Data Lab
              {' '}
              <br />
              Jonathan Gray, Cofounder of Public Data Lab

            </p>
          </div>
        </div>

        <div className="row pt-2">
          <div className="col-3 offset-1">
            <Heading5 classi="" text="Density Design Lab" />
          </div>
          <div className="col-6 offset-1">
            <p>
              Gabriele Colombo, Density Design Lab, Politecnico di Milano
              <br />
              Federico Pozzi, Density Design Lab, Politecnico di Milano

            </p>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-8 offset-1">
            <p>The team would like to acknowledge the following experts for their expertise, insights and support:</p>
            <p>
              <li> Alessandra Monnerat, Estadão Verifica</li>

              <li>Alex Held, Senior Expert, Resilience Programme, European Forest Institute</li>

              <li>Ana Magalhães, Journalism Coordinator, Repórter Brasil</li>

              <li>Bruno Fávero, Fact Checker, Aos Fatos</li>

              <li>Carla Jimenez, El País</li>

              <li>Ciaran Nugent, Forestry Inspector, Irish Forest Service, Department of Agriculture, Food & Marine</li>

              <li>Claudio Angelo, Communications Manager, Observatório do Clima</li>

              <li>
                Gustavo Faleiros, Founder, InfoAmazonia
              </li>

              <li>
                Gülin Çavuş, Editor-in-Chief, Teyit
              </li>

              <li>
                Ignacio Amigo, Freelance Science Journalist
              </li>

              <li>
                Isabela Dias, Freelance Journalist
              </li>

              <li>
                Juliana Holanda, PhD candidate, University of Warwick
              </li>

              <li>
                Lindon Pronto, Senior Expert - Vegetation Fire Management, Resilience Programme, European Forest Institute
              </li>
              <li>
                Marcio Pimenta, Freelance Photographer
              </li>

              <li>Maria José Braga, President, National Federation of Journalists in Brazil (FENAJ)</li>

              <li>Miguel Vilela, Digital Producer, National Geographic Brazil</li>

              <li>Nadia Pontes, Brazil Correspondent, Deutsche Welle</li>

              <li>
                Peter Moore, Forestry Officer, Forest Fire Management & Disaster Risk Reduction, FAO
              </li>

              <li>Tessa Oliver, Project Manager, LandWorks</li>

              <li>
                Thais Espinosa, Correspondent, Amazônia Real
              </li>

              <li>Thais Lazzeri, Investigative Journalist</li>

            </p>
            <p>We would like to thank MA students from the 2019-2020 edition of the Digital Methods for Internet Studies module at the Department of Digital Humanities, King’s College London for joining us in exploratory work on this topic ahead of the start of this project.</p>
          </div>
        </div>

      </div>

    </Layout>
  );
}
