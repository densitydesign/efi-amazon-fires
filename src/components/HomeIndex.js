import '../scss/style.scss';
import { Link } from 'gatsby';
import chap1 from '../images/chap1.png';
import chap2 from '../images/chap2.png';
import chap3 from '../images/chap3.png';
import { Heading4 } from './Typography';

export default function HomeIndex() {
  const homeIndex = [
    {
      src: chap1,
      title: 'Emerging forest governance issues through hashtags\n',
      descr1: 'Hashtags can act as indicators of  issues and concerns of different publics on social media. They can serve as an entry point to explore how people connect different subject matters to each other in the wake of a global event. Through the Twitter analysis on the 2019 Amazon rainforest fires, we have identified various forest governance issues through a series of conversations with forest governance experts and journalists, many of whom followed the event closely during the peak period.   ',
      descr2: 'This Issue Story portrays a collection of ‘global talking points’ that emerged through hashtags when the Amazon fires became international news. ',
      link: '/first-issue',
    },
    {
      src: chap2,
      title: 'Exploring the role of science online beneath the surface',
      descr1: 'As information crowds the space online, did scientific voices play any role? From a series of analyses, it is possible to identify multiple ways where science and scientific perspectives were mobilised. While in many cases, scientific voices were almost absent, marginal, present at the periphery or only after the “peak”, some specific scientific voices received a significant amount of credit and visibility on social media and media articles. ',
      descr2: 'This Issue Story exposes which scientific voices emerged online and how to depict the role science played in online engagement around the 2019 Amazon rainforest fires.',
      link: '/second-issue',
    },
    {
      src: chap3,
      title: 'Tracing online recycling practices ',
      descr1: 'From the fires to flooding making international headlines, various types of mis- and disinformation surface online. In the case of the 2019 Amazon rainforest fires, celebrities, politicians and protestors voiced their opinions with striking images and videos. Some of these objects were later debunked as materials from past unrelated events. In addition, media articles repeatedly promoted a misleading claim of “20% of global oxygen is produced in the Amazon\'\' despite being widely challenged.',
      descr2: 'This Issue Story depicts different ‘media recycling practices’ that have been identified in the case study by tracing the life cycle of these materials and their different usages online.',
      link: 'third-issue',
    },
  ];
  return (
    <div className="container-fluid ">

      {
                            homeIndex.map(({
                              src, title, descr2, descr1, link,
                            }, index) => (
                              <div className="row h-100">
                                <Link to={link} className="linkHome" key={index}>
                                  <div className="row py-5 gradient align-items-center fadeIndex" style={{ height: '70vh' }}>
                                    <div className="col-4 offset-1">
                                      <img src={src} className="img-fluid " alt="..." />
                                    </div>
                                    <div className="col-5 offset-1">
                                      <Heading4 className=" pb-3" text={title} />
                                      <p>{descr1}</p>
                                      <p>{descr2}</p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))
                        }

    </div>
  );
}
