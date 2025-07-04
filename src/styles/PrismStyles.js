import { css } from 'styled-components';

const prismColors = {
  bg: `#f8f9fa`,
  lineHighlight: `#e9ecef`,
  blue: `#1a73e8`,
  purple: `#8e24aa`,
  green: `#0d904f`,
  yellow: `#e6a700`,
  orange: `#f57c00`,
  red: `#d32f2f`,
  grey: `#5f6368`,
  comment: `#9aa0a6`,
  text: `#202124`,
};

// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs

const PrismStyles = css`
  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: ${prismColors.bg};
    color: ${prismColors.text};
    border-radius: var(--border-radius);
    margin: 2em 0;
    padding: 1.25em;
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    border: 1px solid var(--lightest-navy);
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--fz-sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    padding-top: 2em;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${prismColors.bg};
    color: ${prismColors.grey};
    border: 1px solid var(--lightest-navy);
    border-bottom: none;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${prismColors.lineHighlight};
    border-left: 2px solid var(--green);
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  /* Language badges */
  .gatsby-highlight pre[class*='language-']::before {
    background: var(--lightest-navy);
    color: var(--lightest-slate);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    position: absolute;
    top: 0;
    right: 1.5em;
    padding: 0.25em 0.5em;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    content: attr(data-language);
    text-transform: uppercase;
  }

  /* Override PrismJS styles */
  .token.operator,
  .token.keyword,
  .token.tag {
    color: ${prismColors.purple};
  }

  .token.selector,
  .token.selector .class,
  .token.function {
    color: ${prismColors.blue};
  }

  .token.attr-name,
  .token.keyword {
    color: ${prismColors.purple};
  }

  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${prismColors.orange};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${prismColors.green};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
    font-style: italic;
  }

  .token.punctuation {
    color: ${prismColors.grey};
  }

  .token.builtin,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${prismColors.blue};
  }

  .token.operator {
    background: transparent;
  }

  .token.atrule,
  .token.inserted {
    color: ${prismColors.green};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export default PrismStyles;
