import './tabs.css'

import React, { Component, Fragment } from "react";
import 'antd/dist/antd.css';
import fig1 from '../../images/tabsux/fig1.png'
import fig2 from '../../images/tabsux/fig2.png'
import fig3 from '../../images/tabsux/fig3.png'
import fig4 from '../../images/tabsux/fig4.png'
import { Row, Col, Image, Tooltip } from 'antd';
import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class tabsux extends Component {


    render() {
    return (
        <div style={{width: "400px"}}>
            <div className="header-content"><Link to="/tabs"><ArrowLeftOutlined style={{color: "black"}} /></Link>  UX Case Study</div>
            <div className="sub-sub-heading">Introduction</div>
                <div className="content" style={{padding: "0px", fontWeight: "normal"}}>Social media has become an important part of 
                our lives. From local news to international affairs, we rely on online media to be aware of the world around us. Leveraging 
                the necessity in such a situation, Tabs is a comprehensive solution that combines news sharing and social media interface. <Tooltip title="https://www.digitalnewsreport.org/survey/2020/overview-key-findings-2020/">[1]</Tooltip></div>

            <div className="sub-sub-heading">Existing System</div>
                <div className="content" style={{padding: "0px", fontWeight: "normal"}}>Online journalism saw a huge spike in the last 
                decade. From sports, culture, arts, and politics we have the world’s news one swipe away(Fig. 1). Spanning wide and catering to
                many, online portals like Newyork Times, Bloomberg, Economic Times, Washington Post are a few popular examples. Online payment 
                for these portals has significantly increased in countries like USA and Norway. Direct Message and Mail communication is also a 
                facet that has been growing.<br/><br/>
                <img src={fig1} width="600px"></img><p className="caption">Fig.1 Trend in news consumption</p>
                
                Parallelly, social media has seen a big rise in consumption. 4.48 billion people currently use social media worldwide. The 
                average social media user engages with an average of 6.6 various social media platforms <Tooltip title="https://backlinko.com/social-media-users">[2]</Tooltip>.
                Due to the curation and the entertainment that social media offers, it is able to grab the attention of people from all age 
                groups, genders, economic backgrounds, and ethnicities(Fig. 2).<br/><br/>
                <img src={fig2} width="320px"></img><p className="caption">Fig.2 Social media active users</p>

                Despite the promising numbers, the interaction in online journalism has seen a decline in the last few years (Fig. 3).  The 
                subscription model proves to be a great disadvantage for many <Tooltip title="https://www.pewresearch.org/journalism/fact-sheet/newspapers/">[3]</Tooltip>. 
                It has reduced the consumption in portals per year and the viewership time as well.<br/>
                <img src={fig3} width="600px"></img><p className="caption">Fig.3 Average minutes per visit of online newspaper portals</p>

                One of the most important unions of these two channels is consuming news using social media. The following are the reasons why:
                <ul><li>A large number of people are perfectly content with the news they can access for free and we observe a very high proportion of 
                non-subscribers (40% in the USA and 50% in the UK) who say that nothing could persuade them to pay(Fig. 4).</li>
 
                <li>The consumer interface is not preferred by younger generations. Those aged 18–24 (so-called Generation Z) have a weak connection 
                    with websites and apps and are more than twice as likely to prefer to access news via social media. This also offers a deeper 
                    connection to the audience.</li>

                <li>News updates happen in real-time on social media. Users are able to see the most relevant information pertaining to that time 
                    in a curated fashion. The below graph is a stellar example of the information presented.</li></ul></div><br/>
                <img src={fig4} width="600px"></img><p className="caption">Fig.4 Holistic analysis of social media used for news consumption</p>

                <div className="sub-sub-heading">Proposed System</div>
                <div className="content">The solution is a social media online news mobile 
                application called Tabs. It checks all the boxes that are currently unchecked. Tabs focuses only on providing news from different 
                platforms. Reports can upload articles whenever they want to. The Journal accounts can also view statistics regarding views, clicks, 
                shares, etc. Users can follow tags, newsletters, or have content curated on their behalf. The explore page offers the trending news
                according to their locality. Users are able to share and save in an easy manner as well. Tabs surpasses the subscription model by 
                providing free advertisements for the Journals to monetize.</div>
        </div>
    );
    }
};

export default tabsux;