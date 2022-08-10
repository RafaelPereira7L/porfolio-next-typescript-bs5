import React from 'react';

const Footer = () => {
  const scrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="scrollTop top fixed-bottom text-end p-4 text-info"
        data-aos="fade-left"
      >
        <i className="bi bi-arrow-up-circle-fill" onClick={scrollTop}></i>
      </div>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
        <p className="text-center text-primary">
          Feito por Rafael H. Pereira 🤗 - Foi utilizado Next.JS, TypeScript e
          Bootstrap5.
        </p>
      </footer>
    </>
  );
};

export default Footer;
