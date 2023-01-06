import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
          Hi there! My name is <strong>Soufiane Sejjari</strong>  and I am currently completing my professional bachelor's degree in big data. I am passionate about data science and all things related to data analysis. Throughout my studies, I have had the opportunity to work on projects in data analysis, web development, and mobile development, which have helped me to develop a strong foundation in these areas. In my free time, I enjoy staying up to date with the latest trends and technologies in the field. I am excited to continue learning and growing as a data professional, and I am always open to new opportunities and challenges. Thank you for visiting my portfolio!
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
