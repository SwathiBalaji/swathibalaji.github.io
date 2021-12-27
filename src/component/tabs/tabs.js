import './tabs.css'

import React, { Component } from "react";
import { Col, Divider, Image, Row, Tooltip } from "antd"
import typing from '../../videos/typing2.mp4'
import { Magnifier } from "react-image-magnifiers";
import wireframeVid from '../../videos/wireframeVid.mp4'

import styleguide from '../../images/styleguide.svg'
import kunal from '../../images/Kunal Nair.png'
import lia from '../../images/Lia Kim.png'
import moodboard from '../../images/moodboard.png'
import wireframe from '../../images/wireframe.png'
import iconDesign from '../../images/icon-design.png'
import iconUi from '../../images/icon-ui.svg'
import uides from '../../images/ui.svg'
import uides2 from '../../images/ui2.svg'

import AOS from 'aos'
import "aos/dist/aos.css";

import 'antd/dist/antd.css';
import fig1 from '../../images/tabsux/fig1.png'
import fig2 from '../../images/tabsux/fig2.png'
import fig3 from '../../images/tabsux/fig3.png'
import fig4 from '../../images/tabsux/fig4.png'
import divider from '../../images/divider.svg'
import {
    PlusOutlined,
    MinusOutlined,
    ZoomInOutlined
} from '@ant-design/icons';

import { Collapse } from 'antd';
import ProgressBar from "react-scroll-progress-bar";

const { Panel } = Collapse;

AOS.init({
    duration: 80
});

class tabs extends Component {


    render() {
        return (
            
            <div>
                <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
                <ProgressBar bgcolor="#303030" duration="2" height="5px" />
                <div className='banner'>

                    <div className="title">Tabs</div>

                    <div className="sub-title">A social news network</div></div>


                {/* <div className='sticky'><div style={{paddingBottom: "5px"}}>UI Design, UX Research, Logotyping</div><hr/></div> */}
                <div className='banner'>
                    <video src={typing} width="850"
                        controls={null}
                        loop={true}
                        muted={true}
                        autoplay="true" />

                    <div className="header-content">Tabs is a social media app that focuses on delivering
                        customized news from all over the world.</div>
                </div>

                <div className='overview'>
                    <div className="sub-heading">Overview</div>
                    <div className="content">Tabs offers a comprehensive case study of existing newsletter platforms.
                        Along with that, it offers a multi-faceted solution for the same. It
                        takes components of existing systems like following, social media layout
                        for reading, sharing, and saving news channels and news tags.</div>
                </div>

                <div><img src={divider} alt='divider' className='divider' /></div>
                <div className="problem-statement">
                    <div className="sub-heading">Problem Statement</div>


                    <table>
                        <tr>
                            <th className="ps-heading">Outwitted</th>
                            <th className="ps-content" >Despite news influencing important changes worldwide,
                                there has been a decline in news consumption via online journalism. In contrast,
                                social media platforms have attracted consumers in the millions.</th>

                            <th className="ps-content" >The advanced UI/UX systems present in social media
                                platforms are a fundamental reason for their success. They offer short-form content
                                consumption, updated trending content, a mobile-centric experience, and easy
                                integration with AI analytics.</th>

                            <th className="ps-content" >Social media uses advertising as its primary monetization model.
                                This gives the content creators more control and the consumers more flexibility.</th>

                        </tr>
                        <tr>
                            <td className="ps-heading" style={{ fontWeight: "bold" }}>Outdated</td>
                            <td className="ps-content">News apps have outdated design components and obsolete user
                                experience approaches. The UI for online journalism has not evolved from the early 2000s
                                cluttered maximalism appearance. This proves difficult to navigate, thus restricting the users.</td>
                            <td className="ps-content">Sticking to a blog-like user experience strategy inhibits
                                the market from evolving beyond that. Companies also focus more on the maintenance,
                                marketing, and growth of the news website which is rarely how people procure news these days.</td>
                            <td className="ps-content">A disjoint subscription model offers less scope for monetization
                                and target penetration. A symbiotic and independent monetization model will consistently drive the usage.</td>

                        </tr>
                    </table></div>
                <div><img src={divider} alt='divider' className='divider' /></div>

                <div className='moodboard'>
                    <div className="sub-heading">Moodboard</div>
                    <img alt='moodboard' src={moodboard} width="850px" />
                </div>
                <div><img src={divider} alt='divider' className='divider' /></div>

                <div className='wireframe'>
                    <div className="sub-heading">Wireframe</div>
                    <div className='content' style={{ fontStyle: "italic", fontSize: "18px", textAlign: "center" }}><ZoomInOutlined style={{ fontSize: "22px", paddingRight: "5px" }} />please click on image to magnify</div>
                    <Magnifier imageSrc={wireframe} style={{ width: "850px", height: "auto" }} renderOverlay={false} /></div>


                <div className="caseStudy" >
                    <Collapse bordered={false} ghost expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ fontSize: "20px" }} /> : <PlusOutlined style={{ fontSize: "20px" }} />}>
                        <Panel header="Case Study" key="1" className='sub-heading' style={{textAlign: "left"}}>
                            <div className="things" style={{ width: "850px", padding: "80px", backgroundColor: "#FCF8EF", fontSize: "18px" }}>

                                <div className="sub-sub-heading">Introduction</div>
                                <div >Social media has become an important part of our lives. From local news to international affairs, we rely on online media to be aware of the world around us. Tabs is a comprehensive solution that combines news sharing and social media interface. It aims to offer a platform for easy and unbiased news consumption.<Tooltip title="https://www.digitalnewsreport.org/survey/2020/overview-key-findings-2020/">[1]</Tooltip></div>
                                <br /><hr /><br />
                                <div className="sub-sub-heading">Existing System</div>
                                <div>Online journalism saw a huge spike in the last decade. From sports, culture, arts, and politics we have the world’s news one swipe away(Fig. 1). Spanning wide and catering to many, online portals like Newyork Times, Bloomberg, Economic Times, Washington Post are a few popular examples. Online payment for these portals has significantly increased in countries like USA and Norway.<br /><br />
                                    <img alt='figure 1' src={fig1} width="600px"></img><p className="caption">Fig.1 Trend in news consumption</p>

                                    Parallelly, social media has seen a big rise in consumption. 4.48 billion people currently use social media worldwide. The average user engages with an average of 6.6 various social media platforms. <Tooltip title="https://backlinko.com/social-media-users">[2]</Tooltip>.
                                    It has the power to hold the attention of people from all age groups, genders, economic backgrounds, and ethnicities(Fig. 3)<br /><br />
                                    <img alt='figure 2' src={fig2} width="320px"></img><p className="caption">Fig.2 Social media active users</p>

                                    Despite looking good on paper, the interaction in online journalism has seen a decline in the last few years. The subscription model proves to be a great disadvantage for many. <Tooltip title="https://www.pewresearch.org/journalism/fact-sheet/newspapers/">[3]</Tooltip>.
                                    It has reduced the consumption in portals per year and the viewership time.<br />
                                    <img alt='figure 3' src={fig3} width="600px"></img><p className="caption">Fig.3 Average minutes per visit of online newspaper portals</p>

                                    One of the most important intersection points we have to highlight is consuming news using social media. A large number of people are perfectly content with the news they can access for free and we observe a very high proportion of non-subscribers (40% in the USA and 50% in the UK) who say that nothing could persuade them to pay.
                                    The consumer interface of news portals is not youthful and artistically economic. Those between 18–24 have a weak connection with websites and apps and are more than twice as likely to prefer to access news via social media(Fig. 2). News updates happen in real-time on social media. Users can see the most relevant information about that time.</div><br />
                                <img alt='figure 4' src={fig4} width="600px"></img><p className="caption">Fig.4 Holistic analysis of social media used for news consumption</p>
                                <br /><hr /><br />
                                <div className="sub-sub-heading">Proposed System</div>
                                <div>Tabs is a propitious solution. Tabs main focal point is that it provides news from different organisations in one place. Reporters can upload articles whenever they want to. The Org accounts can view statistics regarding views, clicks, shares, etc. Users can follow tags, organizations, or have content curated on their behalf. The Explore page offers the trending news according to their locality. Users can share and save posts as well. Apart from that, Tabs surpasses the subscription model by providing free advertisements as a means of income.</div>
                            </div>
                        </Panel>
                        <Panel header="Persona" key="2" className='sub-heading' style={{textAlign: "left"}}>
                            <div className="things" style={{ width: "850px", padding: "80px", backgroundColor: "#FCF8EF", fontSize: "18px" }}>
                                <div style={{ textAlign: "center", lineHeight: "8px" }}>
                                    <img alt='kunal' src={kunal} width="100px"></img>
                                    <p />
                                    <p>Kunal Nair, 54</p>
                                    <p>Senior Manager in Banglore, India</p>
                                </div>

                                <Row>
                                    <Col style={{ width: "320px" }}><ul>
                                        <div className="sub-sub-heading">Goals</div>
                                        <li>Need to keep up with the world news</li>
                                        <li>Need clean navigation and a consistent interface to make work easier!</li>
                                    </ul></Col>
                                    <Col style={{ paddingLeft: "20px", width: "360px" }}><ul>
                                        <div className="sub-sub-heading">Pain Points</div>
                                        <li>Time-consuming to search for content in different locations</li>
                                        <li>Not able to get content for myself, rather more general</li>
                                        <li>I need the news updated in a timely manner</li>
                                    </ul></Col>
                                </Row>

                                <div className="sub-sub-heading">Day in Life</div>
                                <div> Kunal wakes up around 5 am every morning. He works as an engineering manager for Microsoft’s Outlook team.
                                    Skillful at getting the right kind of work from the right kind of people, he is a true corporate manager,
                                    through and through.<br />

                                    Every morning, he wakes up to a hot coffee and morning yoga class. Since the newspaper has not come on time yet,
                                    he pulls out his iPad and reads the news online. Economic times and the Hindu have cluttered text that makes
                                    it a little difficult for him to read peacefully. Later in the morning, standup was an exacting affair. A few
                                    ice breakers about South Indian heroes and metro roads were shared. Kunal looked forward to this part of the
                                    meeting the most. The rest of the day was clockwork. News spread around that their CEO was visiting India, and
                                    everyone watched it in the big plasma with an exciting lul. Then, Kunal took to Twitter to share his thoughts
                                    and see how it has affected what is trending. On the way back home, Kunal turns on the radio to get local
                                    weather and navigation route information.<br />

                                    After getting back home, Kunal helps his kids with their homework. Chintu, who is 12, excitedly talks
                                    about the new ISRO mission. Wondering why he missed that out while reading his daily, Kunal makes a mental
                                    note to be more thorough tomorrow as he ends the day to the drone of reality TV.
                                </div>

                                <br />
                                <hr />
                                <br />


                                <div style={{ textAlign: "center", lineHeight: "8px" }}>
                                    <img alt='lia' src={lia} width="100px"></img>
                                    <p />
                                    <p>Lia Kim, 22</p>
                                    <p>Marketing Student Seoul, South Korea</p>
                                </div>

                                <Row>
                                    <Col style={{ width: "320px" }}><ul>
                                        <div className="sub-sub-heading">Goals</div>
                                        <li>Need curated content that is trending locally and internationally</li>
                                        <li>Need minimalistic UI for long usage</li>
                                        <li>Dark themed, modern UI is preferred</li>
                                    </ul></Col>
                                    <Col style={{ paddingLeft: "20px", width: "360px" }}><ul>
                                        <div className="sub-sub-heading">Pain Points</div>
                                        <li>Unable to keep up with relevant current affairsin social media</li>
                                        <li>Not able to share information that is accessible to all</li>
                                    </ul></Col>
                                </Row>

                                <div className="sub-sub-heading">Day in Life</div>
                                <div>  Lia wakes up around 8 am every morning. She studies International Journalism at SNU and part-times as social
                                    media marketer for Kay, a small business that makes fine jewelry. Skillful at navigating online circles and
                                    pitching winning ideas, she looks forward to being the trailblazer for a new generation of creators.<br />

                                    To wad off her drowsiness, she scrolls through Instagram for a few minutes in bed. Local news indicated that
                                    a forest fire has left no remorse in affected areas in her neighboring country. Getting late for college, she
                                    quickly gets ready while watching the local weather and dust levels play out on the TV. She is informed that a
                                    road has been diverted due to construction. She drops a quick message to inform her lead that she will craft
                                    a post to stand in solidarity for the victims of the forest fire on the brand social media pages. During the
                                    rest of the day, she mindlessly scrolls through Instagram and Facebook during her free time.<br />

                                    The day had dissolved into a rainy evening and she scrolled through Instagram while waiting for her metro.
                                    The trending tabs had BTS and Parasite on the front pages of the world stage again. She scrolls past the
                                    latest trends and memes alike. Tired from a long day of work, she has a quick dinner at the dorms before
                                    falling asleep.
                                </div>

                            </div>
                        </Panel>
                    </Collapse>
                </div>


                <div className='styleguide'>
                    <div className="sub-heading">Style Guide</div>
                    <img alt='moodboard' src={styleguide} width="850px" style={{ padding: "100px", backgroundColor: "black" }} />
                </div>

                <div><img src={divider} alt='divider' className='divider' /></div>

                <div className='proposedSystem'>
                    <div className="sub-heading">Tabs</div>
                    <div className="content">
                        I strongly believe that users need to have precedence and control over what they see. It is important to see the right news at the right time. It is important to know of a local forest fire in some circumstances and about the stock market in others. Navigation, especially for e-news portals needs to have quick and accurate delivery. Newspapers may not be able to reach every whistle-stop but social platforms can. My main goal through this project is to leverage such a powerful resource to uplift and bolster online journalism.


                        <Divider orientation="left">UI</Divider>
                        I take into account several aspects while choosing the design system. The target audience, the use case, and the form factor are a few that I consider. My target audience is between the age of 15 to 45. The main use case is to provide the news in a compact, familiar, and accurate manner. In this project, I focus on the mobile-based application design but I maintain the extensibility for all components. One of the biggest mistakes that designers make is ignoring the life expectancy of the design. Hence I stay within the boundaries of soft UI- using curved borders, muted shadows, adequate spacing, etc. To attract my users, I give the design a sporty, buoyant touch. I make the system dark-themed, add gradient button backgrounds, and card view components. I arrange them using a generic social media wireframe.

                        <Divider orientation="left">UX</Divider>
                        When it comes to interactions, I go by the rulebook. My main goal is to make the platform usable, useful, and desirable and the content findable, credible, and valuable. User accounts can follow organizations, tags (Tabbed), or see relevant hot news in the Explore and Trending pages. The Home page shows the card view list of content published by the news networks users follow. The whole post can be seen by tapping into each card.
                        Here, users can see the number of views, share, or save the post. Posts are only published and maintained by the news network accounts (Org account). Reporter accounts connect journalists to their organization where they will be listed as a reporter. They can publish posts via the straightforward content creation interface. They can add quotes, attach multimedia and add tags. Furthermore, these accounts have access to important insight regarding post reads, profile visits, shares, etc. This system makes it easy to extract valuable performance metrics using AI.

                        <Divider orientation="left">Monetization Model</Divider>
                        In my opinion, news needs to be available to all. By adding a price tag, we make it a commodity whereas I view it as a necessity. The UX Market study highlights how the subscription model has done more harm than good for news organizations. Consequently, the advertisement model is an ideal fit. The increase in the number of content creators worldwide is exemplary of that. The two types of ads that I inject in the infancy of the application are native and affiliate ads. Native ads make for a consistent user interface. Affiliate marketing is a valuable alternative source of advertisement. This is introduced in slow doses to maintain a positive user experience.
                        The subscription model does not hold the content creators accountable. The glamorization of news in an attempt to attract users has backfired. People find it hard to trust online journalism. It has also been the source of several avoidable anxieties. The advertisement model will open up the companies to feedback and healthy competition. This is the right step towards honest and credible journalism.

                    </div>

                </div>

                <div><img src={divider} alt='divider' className='divider' /></div>

                <div className="sub-heading">Prototype</div>
                <img alt='ui design' src={uides} className="ui-img" />
                <div className='ui' style={{ paddingTop: "50px" }}><img width="850px" alt='ui design 2' src={uides2} className='content'></img>
                    <Row className="content" style={{ paddingTop: "40px" }}>
                        <Col><a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" rel='noreferrer' target="_blank">Click here for User Interaction</a></Col>
                        <Col style={{ paddingLeft: "30px" }}><a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" target="_blank" rel='noreferrer'>Click here for Newsletter Interaction</a></Col>
                    </Row></div>

                <div><img src={divider} alt='divider' className='divider' /></div>
                <div className='iconDes'>
                    <div className="sub-heading">Logo Design</div>

                    <div className="content">
                        <img alt='icon design' src={iconUi} width="850px" style={{paddingBottom: "20px"}}></img>
                        The following are the main factors that I took into account while making the logo for Tabs.
                        <Divider orientation="left">Brevity</Divider>
                        I maintain the usage of the whole word and not a single letter or symbol for the logo. This is to subconsciously familiarize the user with the brand. Future iterations will restrict the logo to just the “T”. No other lines or borders are present to make the logo as simple and compact as possible.

                        <Divider orientation="left">Personality</Divider>
                        The logo and the name of the application are inspired by a common English phrase- “Keeping Tabs”. We keep tabs on what we find relevant. We also keep several tabs open on our computers because we want to revisit them sometime soon. Similarly, Tabs is a platform where you can curate the news you want to read. The logo was inspired by the UI skeleton that we use to represent walls of text.
                        
                        <Divider orientation="left">Clarity and Readability</Divider>
                        The color story, curved edges, and text style endorse the consistency of the application. The entities are placed at the right distance to provide clarity and readability. It is also scalable for all intents and purposes.
                    </div>
                </div>

                <div><img src={divider} alt='divider' className='divider' /></div>


                <div className='closerLook'>
                    <div className="sub-heading" >Closer Look</div>
                    <Row className="content">
                        <Col style={{ padding: "20px", paddingTop: "0px", paddingLeft: "0px" }}><span><Image style={{ width: "390px" }} src={iconDesign}></Image></span></Col>
                        <Col style={{ padding: "20px", paddingTop: "0px", paddingLeft: "0px" }}><video src={wireframeVid} width="390px" controls={true} loop={true} muted={true} /></Col>
                    </Row>

                </div>

            </div>

        );
    }
}

export default tabs;