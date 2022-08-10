import React from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Perfil() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="container" data-aos="zoom-in">
      <section id="hero" className="row justify-content-center mt-5">
        <div className="col-6 text-center">
          <Image
            className="img-fluid rounded-circle"
            width="200"
            height="200"
            src="/avatar.jpeg"
            alt="avatar"
          ></Image>
        </div>
        <div className="col-12 text-center">
          <div className="d-flex justify-content-center gap-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rafael-henrique-pereira-37b155232/"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/RafaelPereira7L"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/_raffp"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <h2>Rafael H. Pereira</h2>
          <p className="lead font-bold">WEB DEVELOPER</p>
          <p className="text-center col-8 mx-auto">
            I am 19 years old and currently studying Systems Analysis and
            Development at the Pontifical Catholic University of Minas Gerais!
            📚🙏
          </p>
        </div>
      </section>
    </div>
  );
}
