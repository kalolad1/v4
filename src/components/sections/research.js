import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledResearchSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .research-item li {
     margin-bottom: 12px;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const Research = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
    <StyledResearchSection id="research" ref={revealContainer}>
      <h2 className="numbered-heading">Research</h2>

      <div className="inner">
        <StyledText>
          <div className="research-item">
            <h4>Manuscripts</h4>
            <ol>
              <a href="https://pubmed.ncbi.nlm.nih.gov/35781252/"><li>Alexander P. Clark, Siyu Wei, <strong>Darshan Kalola</strong>, Trine Krogh-Madsen, David J. Christini. An in silico-in vitro pipeline for drug cardiotoxicity screening identifies ionic proarrhythmia mechanisms. British Journal Pharmacology. 2022.</li></a>
              <li>Hojun Yoo, Sudeep Peddireddy, <strong>Darshan Kalola</strong>, Douglas J. Opler. Experiences of psilohuasca use as reported on online internet forums. <i>Submitted to Journal of Psychoactive Drugs in March 2022.</i></li>
            </ol>
            <br/>

            <h4>Abstracts</h4>
            <ol>
              <a href="https://pubmed.ncbi.nlm.nih.gov/35781252/"><li>Alexander P. Clark, Siyu Wei, <strong>Darshan Kalola</strong>, Trine Krogh-Madsen, David J. Christini. An in silico-in vitro pipeline for drug cardiotoxicity screening identifies ionic proarrhythmia mechanisms. British Journal Pharmacology. 2022.</li></a>
              <li><strong>Darshan Kalola</strong>, Sudeep Peddireddy, Temitope Ali, Sree Chinta, Allison Dinar, Ozlem Gunal, Petros Levounis. Youtube as a source of information for binge eating disorder. <i>Submitted to Urban Health Symposium, 2022.</i></li>
              <li>Temitope Ali, <strong>Darshan Kalola</strong>, Sudeep Peddireddy, Allison Dinar, Ozlem Gunal, Petros Levounis. Evaluating the Impact of Stigmatized Search Queries When Using Youtube as a Source of Information for Substance Use Disorder. <i>Submitted to Urban Health Symposium, 2022.</i></li>
              <li><strong>Darshan Kalola</strong>, Rocheny Noziere, Mehdi Lemdani, Sree Chinta, Allison Dinar, Ozlem Gunal, Petros Levounis. Curation Of Mental Health Keyword Search Amongst Social Media Platforms. <i>Submitted to Urban Health Symposium, 2022.</i></li>
              <li><strong>Darshan Kalola</strong>, Aretha Zhu, Arjun Gupta, Navya Pendyala, Ishani Patel, Miriam Habiel. AI-Based Sentiment Analysis Of Postoperative Experiences Of Various Refractive Surgeries As Reported On An Online Internet Forum. <i>Submitted to ASCRS, 2022.</i></li>
            </ol>
            <br/>

            <h4>Presentations</h4>
            <ol>
              <li><strong>Darshan Kalola</strong>, John DeGood. Analysis of electronic health records feature sets. Celebration of Computing. December 2019.</li>
              <li><strong>Darshan Kalola</strong>, Trine Krogh-Madsen, David Christini. Induced pluripotent cardiac stem cell modeling with genetic algorithms. Weill Cornell/Memorial Sloan Kettering Computational Biology Summer Symposium. August 2019.</li>
              <li><strong>Darshan Kalola</strong>, Jun Huang, Nick Post. Use of deep neural networks for photoplethysmography based biometric authentication. Google Artificial Intelligence Healthcare All Hands. March 2019.</li>
              <li style={{marginBottom: "0"}}><strong>Darshan Kalola</strong>, Dmitris Papamichail. Computational tools for de novo gene design. Celebration of Computing. April 2018.</li>
            </ol>
          </div>
        </StyledText>
      </div>
    </StyledResearchSection>
  );
};

export default Research;
