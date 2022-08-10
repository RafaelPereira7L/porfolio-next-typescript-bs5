import React from 'react';

export default function Stacks() {
  return (
    <section className="mt-5" data-aos="fade-up" id="techs">
      <h3 className="text-center text-success">{'<technologies />'}</h3>
      <p className="text-center mt-0 m-5 mb-2">
        My stacks and technologies that I am currently using and learning
      </p>
      <div className="container text-center d-flex justify-content-center mt-5 flex-wrap w-100 gap-5 col-12">
        <div
          className="card rounded-3 border-secondary mb-3 col-lg-4 col-md-6 col-sm-12"
          data-aos="zoom-in"
        >
          <div className="card-header">FRONTEND</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                HTML5
                <span className="badge bg-warning rounded-2">2 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CSS
                <span className="badge bg-info rounded-2">2 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                React.JS/Next.JS
                <span className="badge bg-info rounded-2">1 year</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Bootstrap
                <span className="badge bg-success rounded-2">1,5 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                TailwindCSS
                <span className="badge bg-dark rounded-2">6 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                SASS
                <span className="badge bg-danger rounded-2">2 months</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card rounded-3 border-secondary mb-3 col-lg-4 col-md-6 col-sm-12"
          data-aos="zoom-out"
        >
          <div className="card-header">BACKEND</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Node.JS
                <span className="badge bg-success rounded-2">1 year</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Express.JS
                <span className="badge bg-dark rounded-2">6 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Nest.JS
                <span className="badge bg-danger rounded-2">4 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                PHP
                <span className="badge bg-info rounded-2">1 month</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Strapi
                <span className="badge bg-dark rounded-2">1 month</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card rounded-3 border-secondary mb-3 col-lg-4 col-md-6 col-sm-12"
          data-aos="zoom-out"
        >
          <div className="card-header">LANGUAGES</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                JavaScript
                <span className="badge bg-warning rounded-2">2 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                TypeScript
                <span className="badge bg-info rounded-2">4 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Java
                <span className="badge bg-danger rounded-2">1 year</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Python
                <span className="badge bg-info rounded-2">2 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                C#
                <span className="badge bg-dark rounded-2">7 months</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card rounded-3 border-secondary mb-3 col-lg-4 col-md-6 col-sm-12"
          data-aos="zoom-in"
        >
          <div className="card-header">DATABASES & DEVOPS</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                MongoDB
                <span className="badge bg-success rounded-2">6 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                MySQL
                <span className="badge bg-dark rounded-2">2 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                PostgreSQL
                <span className="badge bg-info rounded-2">2 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Git
                <span className="badge bg-warning rounded-2">2 years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Heroku
                <span className="badge bg-primary rounded-2">6 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Vercel
                <span className="badge bg-dark rounded-2">4 months</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Docker
                <span className="badge bg-info rounded-2">1 month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
