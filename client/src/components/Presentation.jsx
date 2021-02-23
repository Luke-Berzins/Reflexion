import "./Presentation.scss"

export default function About(props) {

  return (

    <div id="presentation" className="animate__animated animate__fadeIn">
       <div id="us">
          <div className="useGroup col-lg-4 mb-4 animate__animated animate__fadeIn">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://ca.slack-edge.com/T2G8TE2E5-U01CYFLFL3U-8bde8aadf2d0-512" alt="Mahsa pic" width="750" height="350" />
              <div className="card-body">
                <h4 className="card-title">Mahsa Arabameri</h4>
                <h6 className="card-subtitle mb-2 text-muted">Developer</h6>
              </div>
              <div className="card-footer">
                <a href="https://github.com/Mahsa1990a">Mahsa's Github</a>
              </div>
            </div>
          </div>
          <div className="useGroup col-lg-4 mb-4 animate__animated animate__fadeIn animate__slow">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://ca.slack-edge.com/T2G8TE2E5-U01EXRDMKQT-cb38ed1f2dc8-512" alt="Ryan pic" width="750" height="350" />
              <div className="card-body">
                <h4 className="card-title">Ryan MacFarlane</h4>
                <h6 className="card-subtitle mb-2 text-muted">Developer/Yoga Instructor</h6>
              </div>
              <div className="card-footer">
                <a href="https://github.com/rjlmacfarlane">Ryan's GitHub</a>
              </div>
            </div>
          </div>
          <div className="useGroup col-lg-4 mb-4 animate__animated animate__fadeIn animate__slower">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://i.imgur.com/Ma67rrI.png" alt="Luke pic" width="500" height="350" />
              <div className="card-body">
                <h4 className="card-title">Luke Berzins</h4>
                <h6 className="card-subtitle mb-2 text-muted">Developer</h6>
              </div>
              <div className="card-footer">
                <a href="https://github.com/Luke-Berzins">Luke's GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="breakline"><p></p></div>
        <div className="tech">

          <img className="techImage"src='techstack.png' alt="transition" className="rotate"/>
        </div>

      </div>

  )
}

