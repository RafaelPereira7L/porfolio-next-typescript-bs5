/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Projetos() {
    return (
        <section className="pt-5 mt-4" data-aos="fade-up">
            <h3 className="text-center">Projects</h3>
            <p className="text-center mt-0 m-5">Some projects made by me and also deployed on the web for that you can see and test.</p>
            <div className="row p-4 pt-0" data-aos="fade-up">
                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Login and Register Front-end Page</h5>
                            <div className="card-body">
                            <p className="card-text">Made using HTML5, CSS3 and JavaScript.</p>
                            <small className="text-info">2021</small>
                            </div>
                            <a target="_blank" href="https://rafaelpereira7l.github.io/Login-Register/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Facebook Login Page Clone</h5>
                            <div className="card-body">
                            <p className="card-text">Made using React.JS.</p>
                            <small className="text-info">2021</small>
                            </div>
                            <a target="_blank" href="https://rafaelpereira7l.github.io/facebook-login-clone/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">JSONPLACEHOLDER API on React.JS</h5>
                            <div className="card-body">
                            <p className="card-text">Made using React.JS.</p>
                            <small className="text-info">2022</small>
                            </div>
                            <a target="_blank" href="https://rafaelpereira7l.github.io/react-api-jsonplaceholder/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Contacts List Fullstack</h5>
                            <div className="card-body">
                            <p className="card-text">Made using EJS, Node.JS, Express and MongoDB.</p>
                            <small className="text-info">2022</small>
                            </div>
                            <a target="_blank" href="https://still-brushlands-28775.herokuapp.com/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Nest.JS TODO API</h5>
                            <div className="card-body">
                            <p className="card-text">Made using Node.JS, Nest.JS, TypeScript and MongoDB.</p>
                            <small className="text-info">2022</small>
                            </div>
                            <a target="_blank" href="https://nest-todolist-api.herokuapp.com/tasks" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">Weather APP</h5>
                            <div className="card-body">
                            <p className="card-text">Made using Next.JS, TypeScript, TailwindCSS and WeatherAPI.</p>
                            <small className="text-info">2022</small>
                            </div>
                            <a target="_blank" href="http://weather-app-kappa-inky.vercel.app/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 col-12 pt-2">
                    <div className="card rounded-3">
                        <div className="card-body text-center">
                            <h5 className="card-title">E-RECICLA</h5>
                            <div className="card-body">
                            <p className="card-text">Made using HTML5, CSS3, JavaScript and Bootstrap5.</p>
                            <small className="text-info">2022</small>
                            </div>
                            <a target="_blank" href="https://e-recicla.netlify.app/" className="btn btn-info rounded-3" rel="noreferrer">Go to project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}