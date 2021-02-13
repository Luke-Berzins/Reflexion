import "./About.scss"

export default function About(props) {

  return (
    <div id='about'>

      <div className="container">
        <h1 className="mt-4 mb-3">About
          <small> Reflexion</small>
        </h1>

        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid rounded mb-4" src="https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg" alt="" width="750" height="450" />
          </div>
          <div className="col-lg-6">
            <h2>About Reflexion</h2>
            <p>Explore yoga history with this collection of insightful articles from Sadhguru spanning from Adiyogi and the origin of yoga over 15,000 years ago to present day. Gain a deeper understanding of yoga and learn about various masters, gurus, sages and saints throughout the ages.</p>
          </div>
        </div>

        <h2>Our Team</h2>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://ca.slack-edge.com/T2G8TE2E5-U01CYFLFL3U-8bde8aadf2d0-512" alt="Mahsa pic" width="750" height="350" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Manager</h6>
              </div>
              <div className="card-footer">
                <a href="#">mahsa@example.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://ca.slack-edge.com/T2G8TE2E5-U01EXRDMKQT-cb38ed1f2dc8-512" alt="Ryan pic" width="750" height="350" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Manager</h6>
              </div>
              <div className="card-footer">
                <a href="#">ryan@example.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img className="card-img-top" src="https://ca.slack-edge.com/T2G8TE2E5-U01F3Q30MHA-8e4d113aeb3c-512" alt="Luke pic" width="500" height="350" />
              <div className="card-body">
                <h4 className="card-title">Team Member</h4>
                <h6 className="card-subtitle mb-2 text-muted">Manager</h6>
              </div>
              <div className="card-footer">
                <a href="#">luke@example.com</a>
              </div>
            </div>
          </div>
        </div>

        <h2>Our Customers</h2>
        <div className="row">
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt="" width="500" height="300" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt=""  width="500" height="300" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt="" width="500" height="300" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt="" width="500" height="300" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt="" width="500" height="300" />
          </div>
          <div className="col-lg-2 col-sm-4 mb-4">
            <img className="img-fluid" src="https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg" alt="" width="500" height="300" />
          </div>
        </div>
      </div>
    </div>
  )
}
