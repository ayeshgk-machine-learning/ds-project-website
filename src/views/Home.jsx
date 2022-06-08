// import 
import React, { useEffect, useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// import background from '../assests/background-image.svg';
// import background from '../../assests/robin-worrall-FPt10LXK0cg-unsplash.jpg';

import Loader from '../components/Loader';

// import './home.css'
import Navbar from '../components/navbar';

const Home = () => {
    // console.log("user in home ",user)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

    if (loading) {
        return <Loader />
    } else {
        return (
            <section className="hero">
                {/* <nav>
                    <h2>Welcome</h2>
                    <button
                        onClick={handleLogout}
                    >
                        Logout</button>
                </nav> */}
                <Navbar />

                <div className="hero-body overflow-hidden" style={{ paddingTop: '5rem' }}>

                    <section>


                        {/* <div className="col" style={{ backgroundImage: `url(${background})` }}>
                                    One of three columns
                                </div> */}
                        <div className="row " style={{
                            backgroundImage: 'url(https://i.ibb.co/w77kFTS/Header-Image-Customer-Churn-10-Advanced-Tips-for-Prediction-Prevention-in-2022.webp)',
                            backgroundSize: '100% 100%',
                            height: '100vh',
                            backgroundRepeat: 'no-repeat',

                        }}>
                            <div className="col-md-6 text-warning" ></div>
                            <div className="col-md-6 text-warning  bg-dark opacity-75">
                                <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', flexDirection: 'column' }}>
                                    <p className='h1 w-75' style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Customer <span style={{ color: '#ECCA00' }}>Churn</span> Dashboard</p>
                                    <p className='h1 w-75' style={{ fontSize: '1rem', color: 'white', fontWeight: 'bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <PowerBIEmbed
                        embedConfig={{
                            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                            id: undefined,
                            embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNzMxN2IxMDEtN2I2MC00N2Y1LTk0YWYtM2Y4YjE4NjhkNjJmIiwidCI6ImFhYzBjNTY0LTZjNWUtNGIwNS04ZGMzLTQwODA4N2Y3N2Y3NiIsImMiOjEwfQ%3D%3D&embedImagePlaceholder=true&pageName=ReportSection03eaea840b517421400e',
                            accessToken: undefined,
                            tokenType: models.TokenType.Embed,
                            settings: {
                                panes: {
                                    filters: {
                                        expanded: false,
                                        visible: true
                                    }
                                },
                                // background: models.BackgroundType.Transparent,
                            }
                        }}

                        eventHandlers={
                            new Map([
                                ['loaded', function () { console.log('Report loaded'); }],
                                ['rendered', function () { console.log('Report rendered'); }],
                                ['error', function (event) { console.log(event.detail); }]
                            ])
                        }

                        cssClassName={"Embed-container"}

                        getEmbeddedComponent={(embeddedReport) => {
                            window.report = embeddedReport;
                        }}
                    />
                </div>
            </section>
        )
    }

}

export default Home;