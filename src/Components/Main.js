import React, { useEffect } from "react";
import Typewriter from "../Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <body>
      <div className="container mt-5 mb-5">
        <div className="row px-3 intro-con">
          <div className="col-lg-6">
            <p className="joyy">Hello! , my name is</p>
            <h1 className="omo"> Omoyemwen Joy Okunzuwa,</h1>
            <h4 className="iam">I am a</h4>
            <h3 className="fronte">
              F
              <Typewriter
                text="rontend website developer..."
                delay={100}
                infinite
              />{" "}
            </h3>
            <p className="dave">
              Frontend developer with an exceptional skill in developing
              interesting and interactive userinterface using HTML, CSS,
              JAVASCRIPT, BOOTSTRAP, REACT. I am passionate about providing
              solutions to users by building accessible webpages.I like to craft
              solid and scalable frontend products with great user experiences.
            </p>
          </div>
          <div
            className="col-lg-6 pic-sec"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <img
              src="./Images/IMG_6540 3.jpg"
              className="d-block w-50 m-auto img-fluid imgprofile"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row text-center logo-con">
          <h2 className="omo mt-5 mb-5">My skills</h2>
          <div className="col-lg-2 py-3">
            <img src="./Images/htmlnew.png" alt="" className="w-75" />
            <h6>HTML</h6>
          </div>
          <div className="col-lg-2 py-3">
            <img src="./Images/cssnew.png" alt="" className="w-50 img-fluid" />
            <h6>CSS</h6>
          </div>
          <div className="col-lg-2 py-3">
            <img src="./Images/javanew.png" alt="" className="w-75 img-fluid" />
            <h6>JAVASCRIPT</h6>
          </div>
          <div className="col-lg-2 py-3">
            <img
              src="./Images/bootnew.png"
              alt=""
              className="w-100 img-fluid"
            />
          </div>
          <div className="col-lg-2 py-3">
            <img
              src="./Images/reactnew.png"
              alt=""
              className="w-100 img-fluid"
            />
          </div>
          <div className="col-lg-2 py-3">
            <img src="./Images/nodejs.png" alt="" className="img-fluid w-75" />
          </div>
        </div>

        <div className="row logo-conn py-5 text-center">
          <div className="col-lg-3"></div>
          <div className="col-lg-2">
            <img
              src="./Images/git.jpeg"
              alt=""
              className="img-fluid w-50 py-3"
            />
            <h6>GIT</h6>
          </div>
          <div className="col-lg-2">
            <img
              src="./Images/github.png"
              alt=""
              className="img-fluid w-50 py-3"
            />
            <h6>GITHUB</h6>
          </div>
          <div className="col-lg-2">
            <img
              src="./Images/typescript.png"
              alt=""
              className="img-fluid w-50 py-3"
            />
            <h6>TYPESCRIPT</h6>
          </div>
        </div>
      </div>


      <div className="container mb-5">
        <h2 className="omo mt-5 text-center mb-3">My Projects</h2>
        <h6 className="mb-5 text-center iam">Click and enjoy...</h6>
        <div className="row">

          <div className="col-lg-4">
           <a href="https://perfy-project2.netlify.app/" className="prolink">
           <div
              className="card text-white mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project one</div>
              <div className="card-body">
                <h5 className="card-title">Stikingly Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript and Bootstrap.
                </p>
              </div>
            </div>
           </a>
          </div>

          <div className="col-lg-4">
           <a href="https://perfy-project3.netlify.app/" className="prolink">
           <div
              className="card text-white mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project Two</div>
              <div className="card-body">
                <h5 className="card-title">Keryn Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript and Bootstrap
                </p>
              </div>
            </div>
           </a>
          </div>

          <div className="col-lg-4">
           <a href="https://surprisemeella.netlify.app/" className="prolink">
           <div
              className="card text-white mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project Three</div>
              <div className="card-body">
                <h5 className="card-title">Surprise Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript and Bootstrap
                </p>
              </div>
            </div>
           </a>
          </div>

        </div>
         
         <div className="row mt-4">

         <div className="col-lg-4">
           <a href="https://perfy-website.netlify.app/" className="prolink">
           <div
              className="card text-white  mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project Four</div>
              <div className="card-body">
                <h5 className="card-title">School Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript and Bootstrap Four webpages.
                </p>
              </div>
            </div>
           </a>
          </div>

          <div className="col-lg-4">
           <a href="https://envisioperfy.onrender.com/" className="prolink">
           <div
              className="card text-white  mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project Five</div>
              <div className="card-body">
                <h5 className="card-title">Envisio Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript, react and Bootstrap.
                </p>
              </div>
            </div>
           </a>
          </div>

          <div className="col-lg-4">
           <a href="https://perfyboutique.netlify.app/" className="prolink">
           <div
              className="card text-white mb-3 project1"
              style={{maxMidth:"18rem;"}}
            >
              <div className="card-header proo">Project Six</div>
              <div className="card-body">
                <h5 className="card-title">Boutique Website</h5>
                <p className="card-text">
                  Built with Html, Css, JavaScript, react and Bootstrap.
                </p>
              </div>
            </div>
           </a>
          </div>

         </div>
           <h6 className="mt-4 text-center iam">Working on lots more!</h6>
      </div>
       
       <div className="container mt-5 mb-5">
       <h2 className="text-center mb-5">Contact me!</h2>
        <div className="row">
            <div className="col-lg-6">
            <div className="text-center">
              <img src="./Images/contact.jpeg" alt="" className="m-auto w-50 img-fluid" />
              </div>
            </div>

           <div className="col-lg-6 mt-3 icons">
            <a href="https://wa.me/2347013671225/">
             <h3><i className="fa fa-whatsapp iconimg"></i></h3> </a>

             <a href="https://joyperfected@gmail.com">
             <h3><i className="fa fa-envelope me-5 ms-5 iconimg"></i></h3>
             </a>
             
             <a href="https://ng.linkedin.com/in/joy-okunzuwa-5497aa235">
             <h3><i className="fa fa-linkedin iconimg"></i></h3>
             </a>

           </div>

        </div>
       </div>
        
    </body>
  );
}

export default Main;
