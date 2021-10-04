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
      descr1: 'When looking at the hashtags that emerged around the Amazon rainforest fires, one can observe various issues associated with and dealt with by forest governance, involving local and international political, business and other public figures. ',
      descr2: 'This issue story portrays a selection of insights collected through the initial expert consultation  to elicit debates and gather additional interpretations. It provides  observations and findings of clusters of forest governance issues and insights into how they have been brought together with the other hashtags associated with Amazon rainforest fires. ',
      link: '',
    },
    {
      src: chap2,
      title: 'The multifaceted role of science beneath the surface',
      descr1: 'When looking at the role of science in the online debates, one can observe a multi-faceted approach to mobilise  science and scientific perspectives. On one hand, it shows how the scientific debate is almost absent or marginal. Science-related voices and perspectives  become relevant only after the “peak” and are present only at the periphery. ',
      descr2: 'On the other hand, some specific scientific voices  received a significant amount of visibility in the media articles that have been promoted with the misleading claim on social media. This issue story exposes the marginality and diversity of scientific discourses, actors and sources in the online debate',
      link: '',
    },
    {
      src: chap3,
      title: 'Tracing online recycling practices ',
      descr1: 'The Amazon rainforest fires have been widely picked up by a number of political actors, celebrities, and athletes including the French President Macron, Leonardo DiCaprio and Cristiano Ronaldo. ',
      descr2: 'This issue story surfaces instances of recycled media and claims related to the Amazon rainforest fires over time, tracing the life cycles of some of these content. It collates top hashtags, top domain and most engaged with images over time to narrate the rhythm and pace of transformation in the 10 days period under analysis and beyond. ',
      link: '',
    },
  ];
  return (
    <div className="container-fluid ">

      {
                            homeIndex.map(({
                              src, title, descr2, descr1, link,
                            }, index) => (
                              <Link to={link} className="linkHome">
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
                            ))
                        }

    </div>
  );
}
