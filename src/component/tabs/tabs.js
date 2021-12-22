import './tabs.css'

import React, { Component } from "react";
import { Col, Image, Modal, Row, Tooltip } from "antd"
import typing from '../../videos/typing2.mp4'
import { Magnifier } from "react-image-magnifiers";
import wireframeVid from '../../videos/wireframeVid.mp4'
import header from '../../images/header-image.svg'
import styleguide from '../../images/styleguide.svg'
import kunal from '../../images/Kunal Nair.png'
import lia from '../../images/Lia Kim.png'
import moodboard from '../../images/moodboard.png'
import wireframe from '../../images/wireframe.png'
import iconDesign from '../../images/icon-design.png'
import iconUi from '../../images/icon-ui.svg'
import uides from '../../images/ui.svg'
import uides2 from '../../images/ui2.svg'

import 'antd/dist/antd.css';
import fig1 from '../../images/tabsux/fig1.png'
import fig2 from '../../images/tabsux/fig2.png'
import fig3 from '../../images/tabsux/fig3.png'
import fig4 from '../../images/tabsux/fig4.png'

class tabs extends Component {



    state = {
        moodboardModalStatus: false, wireframeModalStatus: false, uxResearchStatus: false,
        personaModalStatus: false

    }


    showMoodboardModal = () => {

        this.setState({ moodboardModalStatus: true });

    }

    showWireframeModal = () => {

        this.setState({ wireframeModalStatus: true });

    }

    showUxResearchModal = () => {

        this.setState({ uxResearchStatus: true });
    }

    showPersonaModal = () => {

        this.setState({ personaModalStatus: true });
    }

    render() {
        return (
            <div>
                <div className="body">
                    <Image src={header} preview={false} style={{ width: "110px", paddingTop: "50px" }}></Image>

                    <div className="title">Tabs.</div>

                    <div className="sub-title">A social news network</div>

                    <video src={typing} width="850" style={{ paddingBottom: "50px" }}
                        controls={null}
                        loop={true}
                        muted={true}
                        autoplay="true" />
                    <div className="header-content">Tabs is a social media app that focuses solely on
                        delivering curated news from all over the world.</div>

                    <div>
                        <div className="sub-heading">Overview</div>
                        <div className="content">Tabs offers a comprehensive case study of existing newsletter platforms.
                            Along with that, it offers a multi-faceted solution for the same. It
                            takes components of existing systems like following, social media layout
                            for reading, sharing, and saving news channels and news tags.</div>

                        <div className="content" style={{ width: "1200px" }}>
                            <div className="sub-heading">Problem Statement</div>

                            <div className="problem-statement">
                                <table>
                                    <tr>
                                        <th className="ps-heading">Outwitted</th>
                                        <th className="ps-content" >Outdated Design and User experience.
                                            Cluttered maximalism has been an age-old trend in online journalism
                                            UI that has not changed. Difficulty in navigation leads to limited usage.</th>

                                        <th className="ps-content" >Sticking to a blog-like user experience
                                            refuses the online journalism market to evolve beyond that. Apart from
                                            that, the usual web-centric experiences offer little extensibility.</th>

                                        <th className="ps-content" >A disjoint subscription model offers
                                            less scope for monetization and target penetration. A symbiotic
                                            and independent monetization model will consistently drive the usage.</th>

                                    </tr>
                                    <tr>
                                        <td className="ps-heading" style={{ fontWeight: "bold" }}>Outnumbered</td>
                                        <td className="ps-content">Since the onslaught of social media,
                                            there has been a decline in news consumption from online newspapers.
                                            This can be witnessed across all age ranges.</td>
                                        <td className="ps-content">Social media offers short-form consumption
                                            options, updated trending content, a mobile-centric experience,
                                            and easy integration with AI analytics.</td>
                                        <td className="ps-content">Furthermore, social media uses advertising
                                            as their sole monetization model. This gives the writers and readers
                                            freedom over their content.</td>

                                    </tr>
                                </table></div></div>

                        <div className="content" style={{ paddingTop: "30px" }}>
                            <Row>
                                <Col>
                                    <div className="sub-heading-button" onClick={this.showMoodboardModal}>Moodboard</div>
                                    <Modal width="1200px"
                                        visible={this.state.moodboardModalStatus}
                                        footer={null} closable={false}
                                        onCancel={() => this.setState({ moodboardModalStatus: false })}>
                                        <img alt='moodboard' src={moodboard} width="1150px" />
                                    </Modal>

                                </Col>

                                <Col style={{ paddingLeft: "50px" }}>
                                    <div className="sub-heading-button" onClick={this.showWireframeModal}>Wireframe</div>
                                    <Modal width="1400px"
                                        visible={this.state.wireframeModalStatus}
                                        footer={null} closable={false}
                                        onCancel={() => this.setState({ wireframeModalStatus: false })}>
                                        <Magnifier imageSrc={wireframe} style={{ width: "1350px", height: "550px" }} renderOverlay={false} />
                                    </Modal>

                                </Col>

                                <Col style={{ paddingLeft: "50px" }}>
                                    <div className="sub-heading-button" onClick={this.showUxResearchModal}>Case Study</div>
                                    <Modal width="1000px"
                                        visible={this.state.uxResearchStatus}
                                        footer={null} closable={false}
                                        centered
                                        onCancel={() => this.setState({ uxResearchStatus: false })}
                                    >
                                        <div className="content" style={{ width: "700px" }}>
                                            <div className="header-content" style={{ width: "300px", paddingBottom: "40px" }}><div className="mark">UX Market Study</div></div>
                                            <div className="sub-sub-heading">Introduction</div>
                                            <div>Social media has become an important part of
                                                our lives. From local news to international affairs, we rely on online media to be aware of the world around us. Leveraging
                                                the necessity in such a situation, Tabs is a comprehensive solution that combines news sharing and social media interface. <Tooltip title="https://www.digitalnewsreport.org/survey/2020/overview-key-findings-2020/">[1]</Tooltip></div>

                                            <div className="sub-sub-heading">Existing System</div>
                                            <div>Online journalism saw a huge spike in the last
                                                decade. From sports, culture, arts, and politics we have the world’s news one swipe away(Fig. 1). Spanning wide and catering to
                                                many, online portals like Newyork Times, Bloomberg, Economic Times, Washington Post are a few popular examples. Online payment
                                                for these portals has significantly increased in countries like USA and Norway. Direct Message and Mail communication is also a
                                                facet that has been growing.<br /><br />
                                                <img alt='figure 1' src={fig1} width="600px"></img><p className="caption">Fig.1 Trend in news consumption</p>

                                                Parallelly, social media has seen a big rise in consumption. 4.48 billion people currently use social media worldwide. The
                                                average social media user engages with an average of 6.6 various social media platforms <Tooltip title="https://backlinko.com/social-media-users">[2]</Tooltip>.
                                                Due to the curation and the entertainment that social media offers, it is able to grab the attention of people from all age
                                                groups, genders, economic backgrounds, and ethnicities(Fig. 2).<br /><br />
                                                <img alt='figure 2' src={fig2} width="320px"></img><p className="caption">Fig.2 Social media active users</p>

                                                Despite the promising numbers, the interaction in online journalism has seen a decline in the last few years (Fig. 3).  The
                                                subscription model proves to be a great disadvantage for many <Tooltip title="https://www.pewresearch.org/journalism/fact-sheet/newspapers/">[3]</Tooltip>.
                                                It has reduced the consumption in portals per year and the viewership time as well.<br />
                                                <img alt='figure 3' src={fig3} width="600px"></img><p className="caption">Fig.3 Average minutes per visit of online newspaper portals</p>

                                                One of the most important unions of these two channels is consuming news using social media. The following are the reasons why:
                                                <ul><li>A large number of people are perfectly content with the news they can access for free and we observe a very high proportion of
                                                    non-subscribers (40% in the USA and 50% in the UK) who say that nothing could persuade them to pay(Fig. 4).</li>

                                                    <li>The consumer interface is not preferred by younger generations. Those aged 18–24 (so-called Generation Z) have a weak connection
                                                        with websites and apps and are more than twice as likely to prefer to access news via social media. This also offers a deeper
                                                        connection to the audience.</li>

                                                    <li>News updates happen in real-time on social media. Users are able to see the most relevant information pertaining to that time
                                                        in a curated fashion. The below graph is a stellar example of the information presented.</li></ul></div><br />
                                            <img alt='figure 4' src={fig4} width="600px"></img><p className="caption">Fig.4 Holistic analysis of social media used for news consumption</p>

                                            <div className="sub-sub-heading">Proposed System</div>
                                            <div>The solution is a social media online news mobile
                                                application called Tabs. It checks all the boxes that are currently unchecked. Tabs focuses only on providing news from different
                                                platforms. Reports can upload articles whenever they want to. The Journal accounts can also view statistics regarding views, clicks,
                                                shares, etc. Users can follow tags, newsletters, or have content curated on their behalf. The explore page offers the trending news
                                                according to their locality. Users are able to share and save in an easy manner as well. Tabs surpasses the subscription model by
                                                providing free advertisements for the Journals to monetize.</div>
                                        </div>
                                    </Modal>

                                </Col>

                                <Col style={{ paddingLeft: "50px" }}>
                                    <div className="sub-heading-button" onClick={this.showPersonaModal}>User Persona</div>
                                    <Modal width="1000px"
                                        visible={this.state.personaModalStatus}
                                        footer={null} closable={false}
                                        centered
                                        onCancel={() => this.setState({ personaModalStatus: false })}
                                    >
                                        <div className="header-content" style={{ width: "300px", paddingBottom: "40px" }}><div className="mark">User Persona</div></div>
                                        <div className="content" style={{ width: "800px", fontSize: "17px", fontWeight: "normal" }}>
                                            <div style={{ textAlign: "center", lineHeight: "8px" }}>
                                                <img alt='kunal' src={kunal} width="100px"></img>
                                                <p />
                                                <p>Kunal Nair, 54</p>
                                                <p>Senior Manager in Banglore, India</p>
                                            </div>

                                            <Row>
                                                <Col style={{ width: "400px" }}><ul>
                                                    <div className="sub-sub-heading">Goals</div>
                                                    <li>Need to keep up with the world news</li>
                                                    <li>Need clean navigation and a consistent interface to make work easier!</li>
                                                </ul></Col>
                                                <Col style={{ paddingLeft: "20px", width: "400px" }}><ul>
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
                                                <Col style={{ width: "400px" }}><ul>
                                                    <div className="sub-sub-heading">Goals</div>
                                                    <li>Need curated content that is trending locally and internationally</li>
                                                    <li>Need minimalistic UI for long usage</li>
                                                    <li>Dark themed, modern UI is preferred</li>
                                                </ul></Col>
                                                <Col style={{ paddingLeft: "20px", width: "400px" }}><ul>
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
                                    </Modal>

                                </Col>
                            </Row>


                        </div>
                        <div className="sub-heading" style={{ paddingBottom: "30px" }}>Style Guide</div>
                        <span className="content"><Image src={styleguide} preview={false} style={{ width: "850px", padding: "100px", backgroundColor: "black" }}></Image></span>

                        <div className="sub-heading" style={{ paddingBottom: "30px" }}>User Persona</div>

                        <div>
                            <div className="sub-heading">Proposed System</div>
                            <div className="content">
                                As mentioned in the problem statement- Maximalism Clutter UI is an outdated way to keep the user’s attention.
                                Nowadays, less is more is the mantra. Apart from that, the most basic need for PaaS is now curation.
                                My main aim was to work towards something that is <b>compact and informative</b>. I wanted to make the UI modern and timeless.
                                Design systems like neumorphism have run their course. Studies also show that users of a wide age range find it comforting
                                to stick to soft UI. Along with that, I wanted to make sure that the <b>fast-paced youthful inspiration</b> is seen in the system
                                design by having gradients and dark UI.

                                <br /><br />
                                I also wanted to make sure that the user has <b>precedence and control over what they see</b>. It is important to see the right
                                news at the right time. It is important to know about a local forest fire in some cases and important to know about the stock
                                market in others. Immediate and least effort navigation needs to be provided for content that the user deems useful.

                                <br /><br />
                                Finally, I thought the subscription model had little to offer to newsletter platforms. I thought the advertisement model would be
                                an ideal fit for Tabs. Not only was I planning to cater to everyone, but I was personally driven to <b>increase honest and widespread
                                    news coverage</b>. To have different newsletters subscribe to a single platform provides users a plethora of information they can
                                choose from. Resulting user metrics will provide great insight for journalists to understand what kind of news people like and will
                                push themselves to push themselves out of age-old principles and welcome news sharing via trending tabs and social media reposts.

                            </div>



                        </div>

                        <div>
                            <div className="sub-heading" style={{ paddingBottom: "70px" }}>UI Design</div></div>
                        <div><img alt='ui design' src={uides} className="ui-img" />
                            <img alt='ui design 2' style={{ paddingTop: "100px", width: "1200px" }} src={uides2}></img></div>
                        <Row className="content" style={{ paddingTop: "40px" }}>
                            <Col><a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" rel='noreferrer' target="_blank">Click here for User Interaction</a></Col>
                            <Col style={{ paddingLeft: "30px" }}><a href="https://xd.adobe.com/view/305788b6-ba6f-45b4-9833-e11b99455078-6504/" target="_blank" rel='noreferrer'>Click here for Newsletter Interaction</a></Col>
                        </Row>


                        <div className="sub-heading" style={{ paddingBottom: "30px" }}>Icon Design</div>

                        <div className="content">
                            <img alt='icon design' src={iconUi} width="850px"></img>
                            <Col style={{ paddingTop: "40px" }}>
                                <Row><span style={{ fontWeight: "bold" }}>Personality&nbsp;</span><span>My main aim was to replicate real-life interactions. The Icon was
                                    inspired by news snippets arranged to make a T shape. Effectively placed with “abs”, the users are able to recognize the purpose and
                                    the intent behind the logo.</span></Row>
                                <br></br>
                                <Row><span style={{ fontWeight: "bold" }}>Brevity&nbsp;</span><span>The Icon is minimalistic and intends to provide the most direct meaning.
                                    Since the application is newly founded, I believe that using the logo with the name is an effective way for marketing. It is also
                                    possible to derive minimalistic logos in future iterations.</span></Row>
                                <br></br>
                                <Row><span style={{ fontWeight: "bold" }}>Consistency, Clarity, and Readability&nbsp;</span><span>The color story, curved edges, and text
                                    style are maintained consistently. The entities are placed at the right distance to provide clarity and readability. It is also scalable
                                    for all intents and purposes.</span></Row>
                            </Col>
                        </div>


                    </div>

                    <div style={{ paddingBottom: "150px" }}>
                        <div className="sub-heading" >Closer Look</div>
                        <Row className="content">
                            <Col style={{ padding: "20px", paddingTop: "0px", paddingLeft: "0px" }}><span><Image style={{ width: "400px" }} src={iconDesign}></Image></span></Col>
                            <Col style={{ padding: "20px", paddingTop: "0px", paddingLeft: "0px" }}><video src={wireframeVid} width="400px" controls={true} loop={true} muted={true} /></Col>
                        </Row>

                    </div>

                </div>
            </div>
        );
    }
}

export default tabs;