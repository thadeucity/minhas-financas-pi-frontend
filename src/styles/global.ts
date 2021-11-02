import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-gray000: #ffffff;
    --clr-gray150: #E0E0E0;
    --clr-gray200: #d8d8d8;
    --clr-gray400: #AAAAAA;
    --clr-gray500: #999999;
    --clr-gray600: #777777;
    --clr-gray700: #555555;
    --clr-gray800: #333333;
    --clr-alert-red: #ed4337;

    --clr-primary: #ADEA1F;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,
  img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u,
  i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, main,
  menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // Custom values
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body, input, textarea, select, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
`;
