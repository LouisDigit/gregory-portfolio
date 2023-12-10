"use client";

import React, { useState } from "react";

const ProjectTable = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  const projects = [
    {
      name: "FRANCE.TV",
      about: "VISUAL IDENTITY",
      inquiries: "BROADCAST DESIGN",
      year: "2019",
      image: "project-1",
    },
    {
      name: "EUROSPORT TOKYO 2020",
      about: "BRANDING",
      inquiries: "BROADCAST DESIGN",
      year: "2020",
      image: "project-2",
    },
    {
      name: "JPOG",
      about: "BRANDING",
      inquiries: "FOOTBALL TEAM",
      year: "2022",
      image: "project-3",
    },
    {
      name: "RUSH HOUR",
      about: "EXHIBITION",
      inquiries: "STREET PHOTOGRAPHY",
      year: "2021",
      image: "project-1",
    },
    {
      name: "BENIN.TV",
      about: "VISUAL IDENTITY",
      inquiries: "BROADCAST DESIGN",
      year: "2018",
      image: "project-2",
    },
    {
      name: "MISTER FREEZE NEXT LEVEL",
      about: "CREATIVE DIRECTION",
      inquiries: "STREET ART",
      year: "2016",
      image: "project-3",
    },
    {
      name: "PARIS — ROUBAIX",
      about: "VISUAL IDENTITY",
      inquiries: "RACING",
      year: "2018",
      image: "project-1",
    },
    {
      name: "ARTE HIP HOP",
      about: "ART DIRECTION",
      inquiries: "TV PROGRAM",
      year: "2022",
      image: "project-2",
    },
    {
      name: "ARTE MULTIFACE",
      about: "ART DIRECTION",
      inquiries: "TV SHOW 2023",
      year: "2023",
      image: "project-3",
    },
    {
      name: "PEACOCK SOCIETY",
      about: "BRANDING",
      inquiries: "FESTIVAL",
      year: "2020",
      image: "project-1",
    },
    {
      name: "FOR ETERNITY",
      about: "VISUAL IDENTITY",
      inquiries: "METAVERSE",
      year: "2019",
      image: "project-2",
    },
    {
      name: "THALASSA",
      about: "BRANDING",
      inquiries: "TV SHOW",
      year: "2017",
      image: "project-3",
    },
    {
      name: "MANIFESTO",
      about: "VISUAL IDENTITY",
      inquiries: "FASHION STORE",
      year: "2015",
      image: "project-1",
    },
    {
      name: "DICE",
      about: "VISUAL IDENTITY",
      inquiries: "RESTAURANT",
      year: "2016",
      image: "project-2",
    },
  ];

  const handleHover = (image: string) => {
    if (image !== "") {
      setBackgroundImage(`url('/assets/projects/${image}.jpg')`);
    } else {
      setBackgroundImage("");
    }
  };
  return (
    <div
      className="w-full pt-8 px-8 bg-black h-[100vh] relative bg-cover transition duration-500 ease-in-out fade-transition"
      style={backgroundImage !== "" ? { backgroundImage: backgroundImage } : {}}
    >
      <div className="overflow-auto h-[50%]">
        <table className="w-full h-full table-auto text-xs text-white">
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                onMouseEnter={() => handleHover(project.image)}
                onMouseLeave={() => handleHover("")}
                className="border-b-[0.5px] border-color-white cursor-pointer py-10 group"
                data-background={project.image}
              >
                <td className="h-9 w-1/3  group-hover:translate-x-5 transition ease-in-out duration-300">
                  {project.name}
                </td>
                <td className="h-9 w-1/3">{project.about}</td>
                <td className="h-9 w-1/3">
                  <div className="w-full flex justify-between">
                    <p>{project.inquiries}</p>
                    <p>{project.year}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
