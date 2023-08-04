import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import spalcevideo from '../images/splash-video-new.mp4';
import bannerimg from '../images/bannerimg.webp';
import blackimg from '../images/sava-text-testimonial-1.png';
import posterimg from '../images/AdobeStock_141156360_PosterImage.webp';
import firstblockimg from '../images/lastslide-two.png';
import thirdblockimg from '../images/lastslidebottom.png';

import secondvideo from '../images/second-video.mp4';


export function FullPageScroll() {
    return (
        <>
            <div id="well" className="well">
                <section className="panelscroll relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div className="flex flex-col items-center justify-center video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                        <video src={spalcevideo} type="video/mp4" playsInline poster={posterimg} autoPlay muted loop className="min-w-full min-h-full absolute object-cover"></video>
                        <Zoom>
                            <img alt="bannerimg" className="bannerimg animate__animated animate__zoomIn animate__delay-3s" src={bannerimg} />
                        </Zoom>
                        <Fade bottom>
                            <div className="bottombannertext animate__animated animate__fadeInLeft animate__delay-3s">
                                <h2>creative concepts+ <span>brand consultancy</span></h2>
                            </div>
                        </Fade>
                    </div>
                </section>

                <section className="panelscroll videosection relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <header>
                        <div className="hadermain">
                            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75">
                                <defs>
                                    <clipPath id="clipPath">
                                        <rect height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect>
                                    </clipPath>
                                </defs>
                                <g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2">
                                    <g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1" id="Group_1">
                                        <path transform="translate(0 0)" d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9" data-name="Path 1" id="Path_1"></path>
                                    </g>
                                </g>
                            </svg></div>
                            <div className="headercall">
                                <a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a>
                                <a className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a>
                            </div>
                        </div>
                    </header>
                    <div className="flex w-11/12 mb-0 items-center items-centerhd">
                        <div className="w-3/5 fullwidthhd">
                            <Fade left>
                                <div className="videobox">
                                    <video src={secondvideo} type="video/mp4" autoPlay muted loop className="min-w-full min-h-full object-cover"></video>
                                </div>
                            </Fade>
                        </div>
                        <div className="w-2/5 fullwidthhd">
                            <div className="textdescription">
                                <Fade right>
                                    <p>Capturing. Tickling the senses. To provoke and play with powerful emotions. Envy, Lust, Pride…
                                        Focussed on perfection. The never-ending chase towards stronger Brand Experience, Brand
                                        Attitude, Brand Attachment and Brand Equity. Proven drivers of conversion, loyalty, retention
                                        and sales. Brand experts. Design by trade. Creators of immersive customer journeys. Builders of
                                        brands.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
                    </footer>
                </section>


                <section className="panelscroll bg-black relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <header>
                        <div className="hadermain">
                            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75">
                                <defs>
                                    <clipPath id="clipPath">
                                        <rect fill="#fff" height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1">
                                        </rect>
                                    </clipPath>
                                </defs>
                                <g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2">
                                    <g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1"
                                        id="Group_1">
                                        <path fill="#fff" transform="translate(0 0)"
                                            d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9"
                                            data-name="Path 1" id="Path_1"></path>
                                    </g>
                                </g>
                            </svg></div>
                            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a
                                className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
                        </div>
                    </header>

                    <div className="flex w-full mb-0 items-center">
                        <div className="w-2/5">
                            <Fade left>
                                <div className="textdescription-third">
                                    <p>The journey. Where does it start? Where should it convert? Down the rabbit hole. “The customer is
                                        always right”, but “people don’t know what they want before they see it.” We design effective
                                        and converting customer journeys, that customers love. Online, in-store, digital and offline, we
                                        take the essence of the brand, deeply analyze the consumer, and map out a journey that leads to
                                        more conversion and sales.</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="w-3/5">
                            <img alt="bannerimg" className="min-w-full min-h-full object-cover" src="https://cdn.shopify.com/s/files/1/0741/4464/5438/files/sava-text-testimonial-1.png?v=1684497282" />
                        </div>
                    </div>

                    <footer>
                        <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
                    </footer>
                </section>


                <section
                    className="panelscroll fullimgsection fullimgsectionmain relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <header>
                        <div className="hadermain">
                            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75">
                                <defs>
                                    <clipPath id="clipPath">
                                        <rect height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1"></rect>
                                    </clipPath>
                                </defs>
                                <g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2">
                                    <g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1"
                                        id="Group_1">
                                        <path transform="translate(0 0)"
                                            d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9"
                                            data-name="Path 1" id="Path_1"></path>
                                    </g>
                                </g>
                            </svg></div>
                            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a
                                className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
                        </div>
                    </header>
                    <div className="textdescription-third">
                        <Fade top>
                            <p>The vision and narrative of a brand should be felt and seen throughout any customer journey. We help
                                brands with finger-licking content to emphasize the message. We offer art direction and work with the
                                best people in the creative industry. Designers, photographers, social engineers, coders, filmmakers,
                                you name it.</p>
                        </Fade>
                    </div>
                    <footer>
                        <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
                    </footer>
                </section>


                <section
                    className="panelscroll panelscroll bg-black fullimgsection lastfullslide relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div className="videoboxlastpage"><video playsInline loop muted autoPlay type="video/mp4"
                        src="https://cdn.shopify.com/videos/c/o/v/20632fe8fdc64e1e9a9f30112e0f0607.mp4"
                        className="min-w-full min-h-full object-cover"></video></div>
                    <header>
                        <div className="hadermain">
                            <div className="headerlogo"><svg viewBox="0 0 75 46.313" height="46.313" width="75">
                                <defs>
                                    <clipPath id="clipPath">
                                        <rect fill="#fff" height="46.313" width="75" data-name="Rectangle 1" id="Rectangle_1">
                                        </rect>
                                    </clipPath>
                                </defs>
                                <g transform="translate(-230 -0.2)" data-name="Group 2" id="Group_2">
                                    <g clipPath="url(#clipPath)" transform="translate(230 0.2)" data-name="Group 1"
                                        id="Group_1">
                                        <path fill="#fff" transform="translate(0 0)"
                                            d="M74.6,36.589a26.732,26.732,0,0,0-15.026-7.5,1.336,1.336,0,0,0-.386,2.643,24.084,24.084,0,0,1,12.518,5.808,24.623,24.623,0,0,1-31.083,1.116A27.272,27.272,0,0,0,64.375,11.9a1.342,1.342,0,0,0-.39-.95,1.27,1.27,0,0,0-.975-.393,26.758,26.758,0,0,0-15.638,5.121,1.336,1.336,0,0,0,1.569,2.162A24.112,24.112,0,0,1,61.657,13.27,24.6,24.6,0,0,1,40.422,35.982,27.155,27.155,0,0,0,38.4.388a1.356,1.356,0,0,0-1.9,0A26.729,26.729,0,0,0,29,15.413a1.336,1.336,0,0,0,2.643.387A24.1,24.1,0,0,1,37.452,3.282a24.084,24.084,0,0,1,5.991,16.46,24.511,24.511,0,0,1-5.034,14.481A27.144,27.144,0,0,0,11.975,10.559a1.335,1.335,0,0,0-1.355,1.335v2.479c0,.043,0,.088.007.135a26.9,26.9,0,0,0,4.714,12.669,1.335,1.335,0,0,0,2.41-.534,1.325,1.325,0,0,0-.221-1A24.224,24.224,0,0,1,13.291,14.3V13.282A24.082,24.082,0,0,1,29.1,20.7a24.438,24.438,0,0,1,6.639,13.719A27.14,27.14,0,0,0,.4,36.5a1.328,1.328,0,0,0-.4.947,1.342,1.342,0,0,0,.391.952l1.747,1.747a1.3,1.3,0,0,0,.106.1,26.965,26.965,0,0,0,16.994,6.036h.052A26.91,26.91,0,0,0,33,42.524a1.336,1.336,0,0,0-1.363-2.3,24.241,24.241,0,0,1-12.338,3.381h-.068A24.29,24.29,0,0,1,3.985,38.213l-.724-.723a24.414,24.414,0,0,1,33.089,1l0,0h0l.008.007a27,27,0,0,0,19.111,7.816h0A27.02,27.02,0,0,0,74.6,38.488a1.335,1.335,0,0,0,0-1.9"
                                            data-name="Path 1" id="Path_1"></path>
                                    </g>
                                </g>
                            </svg></div>
                            <div className="headercall"><a className="headermail" href="mailto:hi@nakite.studio">hi@nakite.studio</a> <a
                                className="headercall" href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></div>
                        </div>
                    </header>
                    <div className="textdescription-third flex w-full mb-0 items-center">
                        <div className="last-page">
                            <div className="last-page-left">
                                <Fade left>
                                    <h5>Intrigued?</h5>
                                </Fade>
                            </div>
                            <div className="last-page-right">
                                <Fade right>
                                    <address>
                                        Nakité <br /> Singel 63 <br />1012 VD Amsterdam <br /> The Netherlands
                                    </address>
                                    <ul>
                                        <li><a href="tel:+31(0)202443252">+31 (0)20 244 32 52</a></li>
                                        <li><a href="mailto:hi@nakite.studio">hi@nakite.studio</a></li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p>© Copyright 2023 Nakité BV, all rights reserved.</p>
                    </footer>
                </section>
            </div>
        </>
    );
};


