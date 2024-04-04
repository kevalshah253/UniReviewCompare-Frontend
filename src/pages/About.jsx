import React from "react";
import aboutData from "../data/aboutData";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mt-5">
        {aboutData.map((aboutItem) => (
            <div className="about-card mb-4" key={aboutItem.id}>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{aboutItem.category}</h5>
                <p className="card-text">{aboutItem.aboutTheContent}</p>
                </div>
            </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default About;
