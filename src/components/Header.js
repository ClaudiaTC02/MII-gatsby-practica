import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/tech">Tecnología</Link> |{" "}
        <Link to="/sports">Deportes</Link> | <Link to="/health">Salud</Link>
      </nav>
    </header>
  );
};

export default Header;
