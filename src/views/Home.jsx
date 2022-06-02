// import 
import React, { useEffect,useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import background from '../assests/background-image.svg';
import Loader from '../components/Loader';

const Home = ({handleLogout}) => {
    // console.log("user in home ",user)
    const [ loading, setLoading ] = useState(false);
    useEffect(()=>{
        setLoading(true);
        
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      },[])

    if(loading){
        return <Loader/>
    }else{
        return (
            <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button 
                    onClick={handleLogout}
                    >
                        Logout</button>
                </nav>
                <div className="hero-body">
                
                <div>
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col" style={{backgroundImage: `url(${background})`}}>
                                One of three columns
                            </div>
                            <div className="col">
                                One of three columns
                            </div>
                        </div>
                    </div>
                </div>
                    <PowerBIEmbed
                        embedConfig = {{
                            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                            id: undefined,
                            embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTUwOWVjZTYtNWNlMi00YjBlLThmOGYtNmNiNDdkZjQ5OGEzIiwidCI6ImFhYzBjNTY0LTZjNWUtNGIwNS04ZGMzLTQwODA4N2Y3N2Y3NiIsImMiOjEwfQ%3D%3D',
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
    
                        eventHandlers = { 
                            new Map([
                                ['loaded', function () {console.log('Report loaded');}],
                                ['rendered', function () {console.log('Report rendered');}],
                                ['error', function (event) {console.log(event.detail);}]
                            ])
                        }
                
                        cssClassName = { "Embed-container" }
    
                        getEmbeddedComponent = { (embeddedReport) => {
                            window.report = embeddedReport ;
                        }}
                    />
                </div>
            </section>
        )
    }
    
}

export default Home;