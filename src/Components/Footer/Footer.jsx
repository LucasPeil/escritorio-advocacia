import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h1 style={{ color: 'white', letterSpacing: '0.6rem' }}>
        <a style={{ textDecoration: 'none', color: 'white' }} href="#capa">
          {' '}
          Escritório ADVOGADOS
        </a>
      </h1>
      <span style={{ color: 'white' }}>
        &copy; 2022 Escritório Advogados. Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
