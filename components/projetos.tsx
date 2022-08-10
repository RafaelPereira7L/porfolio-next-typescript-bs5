import React from 'react';
import Image from 'next/image';

export default function Projetos() {
  return (
    <section className="mt-5" id="projects" data-aos="fade-up">
      <h3 className="text-center text-info">{'<projects />'}</h3>
      <p className="text-center mt-0 m-5">
        Some projects made by me and also deployed on the web for that you can
        see and test.
      </p>
      <div className="row mx-2 pt-0">
        <div className="col-lg-4 col-sm-12 col-12 pt-2" data-aos="zoom-in">
          <div className="card rounded-3">
            <Image
              src="/fblogin.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Facebook Login Page Clone</h5>
              <div className="card-body">
                <p className="card-text">Made using React.JS.</p>
                <small className="text-info">2021</small>
              </div>
              <a
                target="_blank"
                href="https://rafaelpereira7l.github.io/facebook-login-clone/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-out">
          <div className="card rounded-3">
            <Image
              src="/jsonplaceholder.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">JSONPLACEHOLDER API on React.JS</h5>
              <div className="card-body">
                <p className="card-text">Made using React.JS.</p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="https://rafaelpereira7l.github.io/react-api-jsonplaceholder/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-in">
          <div className="card rounded-3">
            <Image
              src="/agenda.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Contacts List Fullstack</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using EJS, Node.JS, Express and MongoDB.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="https://still-brushlands-28775.herokuapp.com/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-out">
          <div className="card rounded-3">
            <Image
              src="/weatherapp.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Weather APP</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using Next.JS, TypeScript, TailwindCSS and WeatherAPI.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="http://weather-app-kappa-inky.vercel.app/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-in">
          <div className="card rounded-3">
            <Image
              src="/erecicla.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">E-RECICLA</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using HTML5, CSS3, JavaScript and Bootstrap5.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="https://e-recicla.netlify.app/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-out">
          <div className="card rounded-3">
            <Image
              src="/pomodoro.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Pomodoro APP</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using Next.JS, TypeScript and TailwindCSS.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="https://pomodoro-app-nine-rho.vercel.app/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-in">
          <div className="card rounded-3">
            <Image
              src="/yugioh.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">YugiohCard APP</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using Next.JS, TypeScript, TailwindCSS and YGOPRODeck
                  API.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="https://yugioh-cards-nextjs.vercel.app/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 pt-2" data-aos="zoom-out">
          <div className="card rounded-3">
            <Image
              src="/gainz.jpg"
              width={1920}
              height={1080}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Health APP(GAINZ)</h5>
              <div className="card-body">
                <p className="card-text">
                  Made using Next.JS, TypeScript and TailwindCSS.
                </p>
                <small className="text-info">2022</small>
              </div>
              <a
                target="_blank"
                href="http://gainz-app.vercel.app/"
                className="btn btn-info rounded-3"
                rel="noreferrer"
              >
                Go to project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
