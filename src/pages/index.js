import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Message from "../components/Message";
import Social from "../components/Social";

import "../main.css";
import backgroundUrl from "../images/background.jpg";

export default ({ data }) => {
    const { title, header, message, color, titleFont, messageFont, socialUrls } = data.site.siteMetadata;
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="description" content={`${title} | ${message}`} />
                <title>{title}</title>
                <link rel="stylesheet" href={`https://fonts.googleapis.com/css?family=${titleFont}|${messageFont}`} />
            </Helmet>
            <Header text={header} color={color} font={titleFont} />
            <Message text={message} color={color} font={messageFont} />
            <Social urls={socialUrls} color={color} />
        </div>
    )
};

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      header
      message
      color
      titleFont
      messageFont
      socialUrls
    }
  }
}
`;
