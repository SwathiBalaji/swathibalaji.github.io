import './tabs.css'

import React, { Component } from "react";
import { Image, Tooltip } from "antd"
import { Magnifier } from "react-image-magnifiers";
import { Link } from 'react-router-dom';

import styleguide from '../../images/tabs/styleguide.svg'
import james from '../../images/tabs/james.png'
import lia from '../../images/tabs/lia.png'
import moodboard from '../../images/tabs/moodboard.png'
import wireframe from '../../images/tabs/wireframe.png'
import iconDesign from '../../images/tabs/icon-design.png'
import iconUi from '../../images/tabs/icon-ui.svg'
import uides2 from '../../images/tabs/ui2.svg'
import single from '../../images/single.png'

import AOS from 'aos'
import "aos/dist/aos.css";

import 'antd/dist/antd.css';
import fig1 from '../../images/tabsux/fig1.png'
import fig2 from '../../images/tabsux/fig2.png'
import fig3 from '../../images/tabsux/fig3.png'
import fig4 from '../../images/tabsux/fig4.png'
import divider from '../../images/divider.svg'
import {
    ZoomInOutlined
} from '@ant-design/icons';

import ProgressBar from "react-scroll-progress-bar";
import Header from '../Header/header';
import Footer from '../Footer/footer';

AOS.init({
    duration: 80
});

class Tabs extends Component {
    
    componentDidMount() {
        this.setState({isLoading: false})
        window.scrollTo(0, 0)
      }

render() {
    return (
        <div>
                <link href="//db.onlinewebfonts.com/c/bb25f84423b9515a1d475d02d2de6462?family=Bell+MT" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" href="https://use.typekit.net/qdb6vxy.css"></link>
                <ProgressBar bgcolor="#303030" duration="2" height="5px" />

                <Header></Header>

                <div className='banner' style={{ paddingBottom: "2%" }}>
                    <div className="title">Tabs - a social news network</div>
                    <span style={{padding: "10px", paddingLeft: "0px"}}><img alt='single' src={single} style={{width: "25px"}}></img></span> 
                    <span style={{color: "green"}}>Personal Project</span>
                    &nbsp; <span style={{color: "grey"}}>December 2019</span>
                </div>

                <div className='things'>
                    Tabs offers a comprehensive case study of existing newsletter platforms. Along with that, it offers a multi-faceted solution for the same. It takes parts of existing systems like following, social media layout for reading, sharing, and saving news channels and news tags.
                    <img src={divider} alt='divider' className='divider' />

                <div className="sub-heading">Problem Statement</div>
                <div className='sub-sub-heading'>Outwitted</div>
                <ul>
                    <li>Despite news influencing important changes worldwide,
                                there has been a decline in news consumption via online journalism. In contrast,
                                social media platforms have attracted consumers in the millions.</li>
                     <li>The advanced UI/UX systems present in social media
                                platforms are a fundamental reason for their success. They offer short-form content
                                consumption, updated trending content, a mobile-centric experience, and easy
                                integration with AI analytics.</li>
                    <li>Social media uses advertising as its primary monetization model.
                                This gives the content creators more control and the consumers more flexibility.</li>
                </ul>
                <div className='sub-sub-heading'>Outdated</div>
                <ul>
                    <li>News apps have outdated design components and obsolete user
                                experience approaches. The UI for online journalism has not evolved from the early 2000s
                                cluttered maximalism appearance. This proves difficult to navigate, thus restricting the users.</li>
                    <li>Sticking to a blog-like user experience strategy inhibits
                                the market from evolving beyond that. Companies also focus more on the maintenance,
                                marketing, and growth of the news website which is rarely how people procure news these days.</li>
                    <li>A disjoint subscription model offers less scope for monetization
                                and target penetration. A symbiotic and independent monetization model will consistently drive the usage.</li>
                </ul>
                <img src={divider} alt='divider' className='divider' />

                    <div className="sub-heading">Moodboard</div>
                    <Image alt='moodboard' src={moodboard}/>                    
                
                    <img src={divider} alt='divider' className='divider' />

                    <div className="sub-heading" style={{ paddingBottom: "0px" }}>Wireframe</div>
                    <div style={{ fontStyle: "italic", fontSize: "15px", textAlign: "center" }}><ZoomInOutlined style={{ fontSize: "12px", paddingRight: "5px" }} />please click on image to magnify</div>
                    <Magnifier imageSrc={wireframe}  renderOverlay={false} />
                    <img src={divider} alt='divider' className='divider' />
               
                    <div className="sub-heading">Market Study</div>
                    <div className="sub-sub-heading">Introduction</div>
                    <div >Social media has become an important part of our lives. From local news to international affairs, we rely on online media to be aware of the world around us. Tabs is a comprehensive solution that combines news sharing and social media interface. It aims to offer a platform for easy and unbiased news consumption.<Tooltip title="https://www.digitalnewsreport.org/survey/2020/overview-key-findings-2020/">[1]</Tooltip></div>
                    <br/>
                    <div className="sub-sub-heading">Existing System</div>
                    <div>Online journalism saw a huge spike in the last decade. From sports, culture, arts, and politics we have the world’s news one swipe away(Fig. 1). Spanning wide and catering to many, online portals like Newyork Times, Bloomberg, Economic Times, Washington Post are a few popular examples. Online payment for these portals has significantly increased in countries like USA and Norway.<br /><br />
                    <Image alt='figure 1' src={fig1}/><p className="caption">Fig.1 Trend in news consumption</p>

                    Parallelly, social media has seen a big rise in consumption. 4.48 billion people currently use social media worldwide. The average user engages with an average of 6.6 various social media platforms. <Tooltip title="https://backlinko.com/social-media-users">[2]</Tooltip>.
                    It has the power to hold the attention of people from all age groups, genders, economic backgrounds, and ethnicities(Fig. 3)<br /><br />
                    <Image alt='figure 2' src={fig2} /><p className="caption">Fig.2 Social media active users</p>

                    Despite looking good on paper, the interaction in online journalism has seen a decline in the last few years. The subscription model proves to be a great disadvantage for many. <Tooltip title="https://www.pewresearch.org/journalism/fact-sheet/newspapers/">[3]</Tooltip>.
                    It has reduced the consumption in portals per year and the viewership time.<br />
                    <Image alt='figure 3' src={fig3} /><p className="caption">Fig.3 Average minutes per visit of online newspaper portals</p>

                    One of the most important intersection points we have to highlight is consuming news using social media. A large number of people are perfectly content with the news they can access for free and we observe a very high proportion of non-subscribers (40% in the USA and 50% in the UK) who say that nothing could persuade them to pay.
                    The consumer interface of news portals is not youthful and artistically economic. Those between 18–24 have a weak connection with websites and apps and are more than twice as likely to prefer to access news via social media(Fig. 2). News updates happen in real-time on social media. Users can see the most relevant information about that time.</div><br />
                    <Image alt='figure 4' src={fig4} /><span className="caption">Fig.4 Holistic analysis of social media used for news consumption</span>
                     <br/><br/>                
                    <div className="sub-sub-heading">Proposed System</div>
                    <div>Tabs is a propitious solution. Tabs main focal point is that it provides news from different organisations in one place. Reporters can upload articles whenever they want to. The Org accounts can view statistics regarding views, clicks, shares, etc. Users can follow tags, organizations, or have content curated on their behalf. The Explore page offers the trending news according to their locality. Users can share and save posts as well. Apart from that, Tabs surpasses the subscription model by providing free advertisements as a means of income.</div>

                    <img src={divider} alt='divider' className='divider' />

                    <div className="sub-heading">User Persona</div>
                    <Image src={james}/>
                    <br /><br />
                    <Image src={lia}/>
                
                    <img src={divider} alt='divider' className='divider' />
   
                    <div className="sub-heading">Style Guide</div>
                    <Image alt='styleguide' src={styleguide} style={{ padding: "100px", backgroundColor: "black" }} />

                    <img src={divider} alt='divider' className='divider' />
                
                    <div className="sub-heading">Tabs</div>
                    
                    I strongly believe that users need to have precedence and control over what they see. It is important to see the right news at the right time. It is important to know of a local forest fire in some circumstances and about the stock market in others. Navigation, especially for e-news portals needs to have quick and accurate delivery. Newspapers may not be able to reach every whistle-stop but social platforms can. My main goal through this project is to leverage such a powerful resource to uplift and bolster online journalism.

                    <div className='sub-sub-heading'>UI</div>
                    I take into account several aspects while choosing the design system. The target audience, the use case, and the form factor are a few that I consider. My target audience is between the age of 15 to 45. The main use case is to provide the news in a compact, familiar, and accurate manner. In this project, I focus on the mobile-based application design but I maintain the extensibility for all components. One of the biggest mistakes that designers make is ignoring the life expectancy of the design. Hence I stay within the boundaries of soft UI- using curved borders, muted shadows, adequate spacing, etc. To attract my users, I give the design a sporty, buoyant touch. I make the system dark-themed, add gradient button backgrounds, and card view components. I arrange them using a generic social media wireframe.

                    <div className='sub-sub-heading'>UX</div>
                    When it comes to interactions, I go by the rulebook. My main goal is to make the platform usable, useful, and desirable and the content findable, credible, and valuable. User accounts can follow organizations, tags (Tabbed), or see relevant hot news in the Explore and Trending pages. The Home page shows the card view list of content published by the news networks users follow. The whole post can be seen by tapping into each card.
                    Here, users can see the number of views, share, or save the post. Posts are only published and maintained by the news network accounts (Org account). Reporter accounts connect journalists to their organization where they will be listed as a reporter. They can publish posts via the straightforward content creation interface. They can add quotes, attach multimedia and add tags. Furthermore, these accounts have access to important insight regarding post reads, profile visits, shares, etc. This system makes it easy to extract valuable performance metrics using AI.
                   
                    <div className='sub-sub-heading'>Monetization Model</div>
                    In my opinion, news needs to be available to all. By adding a price tag, we make it a commodity whereas I view it as a necessity. The UX Market study highlights how the subscription model has done more harm than good for news organizations. Consequently, the advertisement model is an ideal fit. The increase in the number of content creators worldwide is exemplary of that. The two types of ads that I inject in the infancy of the application are native and affiliate ads. Native ads make for a consistent user interface. Affiliate marketing is a valuable alternative source of advertisement. This is introduced in slow doses to maintain a positive user experience.
                    The subscription model does not hold the content creators accountable. The glamorization of news in an attempt to attract users has backfired. People find it hard to trust online journalism. It has also been the source of several avoidable anxieties. The advertisement model will open up the companies to feedback and healthy competition. This is the right step towards honest and credible journalism.
                    <img src={divider} alt='divider' className='divider' />
   
        

                <div className="sub-heading">Prototype</div>
                <Image  alt='ui design 2' src={uides2}/>
 
                <a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" rel='noreferrer' target="_blank" className='protolink'>Click here for User Interaction</a>
                <a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" target="_blank" rel='noreferrer' className='protolink'>Click here for Newsletter Interaction</a>
                  
                <div><img src={divider} alt='divider' className='divider' /></div>
                
                <div className="sub-heading">Logo Design</div>
                    
                <Image src={iconDesign}/>
                <Image alt='icon design' src={iconUi}/>
                <br/>
                The following are the main factors that I took into account while making the logo for Tabs.
                
                <div className='sub-sub-heading'>Brevity</div>
                I maintain the usage of the whole word and not a single letter or symbol for the logo. This is to subconsciously familiarize the user with the brand. Future iterations will restrict the logo to just the “T”. No other lines or borders are present to make the logo as simple and compact as possible.

                <div className='sub-sub-heading'>Personality</div>
                The logo and the name of the application are inspired by a common English phrase- “Keeping Tabs”. We keep tabs on what we find relevant. We also keep several tabs open on our computers because we want to revisit them sometime soon. Similarly, Tabs is a platform where you can curate the news you want to read. The logo was inspired by the UI skeleton that we use to represent walls of text.

                <div className='sub-sub-heading'>Clarity and Readability</div>
                The color story, curved edges, and text style endorse the consistency of the application. The entities are placed at the right distance to provide clarity and readability. It is also scalable for all intents and purposes.
                                    
                <div><img src={divider} alt='divider' className='divider' /></div>
                
                <div className="sub-heading" >Closer Look</div>
                <iframe title='tabs' src="https://drive.google.com/file/d/1aATZUCpY7QigC-FZr5YaowD4_rpyPc_O/preview" width="auto" allow="autoplay"></iframe>                    
            </div>

            { /*<div className='sticky'><div style={{paddingBottom: "5px"}}>UI Design, UX Research, Logotyping</div><hr/></div> */}

            <div className='closerLook'>
                <br/>
                <span className='tags'>UX Research</span> 
                <span className='tags'>UI Design</span>    
                <span className='tags'>Design System</span> 
            </div>

            <br/><br/>
            <div className='things'>
                See other projects<br/>
                <Link className='see-more' style={{color: "magenta"}} to='/casestudy'>Case Study</Link>
                &nbsp;<Link className='see-more' style={{color: "gold"}} to='/hewandfrost'>Hew and Frost</Link>
                &nbsp;<Link className='see-more' style={{color: "green"}} to='/terrarium'>Terrarium</Link>
            </div>
<Footer></Footer>
        </div>

    ); }
}

export default Tabs;