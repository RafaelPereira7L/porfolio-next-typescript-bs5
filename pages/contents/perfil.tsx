/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Perfil() {
    return (
        <div className="container">
        <section id="hero" className="row justify-content-center mt-5">
            <div className="col-6 text-center">
                
                <Image className="img-fluid rounded-circle" width="200" height="200" src="/avatar.jpeg" alt="avatar"></Image>
            </div>
            <div className="col-12 text-center">
                <div className="d-flex justify-content-center gap-3">
                    <a target="_blank" href="https://www.linkedin.com/in/rafael-henrique-pereira-37b155232/" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/RafaelPereira7L" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a target="_blank" href="https://instagram.com/_raffp" rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
                <h2>Rafael H. Pereira</h2>
                <p className="lead">Front-end Developer</p>
                <p className="text-center">I have 18 years old and currently I'm studying Systems Analysis and Development at the Pontifical Catholic University of Minas Gerais! 📚🙏</p>
            </div>
        </section>
        </div>
    )
}