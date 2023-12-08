import React from "react";

const ProjectTable = () => {
  const projects = [
    {
      name: "FRANCE.TV",
      about: "VISUAL IDENTITY",
      inquiries: "BROADCAST DESIGN",
      year: "2019",
    },
    {
      name: "EUROSPORT TOKYO 2020",
      about: "BRANDING",
      inquiries: "BROADCAST DESIGN",
      year: "2020",
    },
    {
      name: "JPOG",
      about: "BRANDING",
      inquiries: "FOOTBALL TEAM",
      year: "2022",
    },
    {
      name: "RUSH HOUR",
      about: "EXHIBITION",
      inquiries: "STREET PHOTOGRAPHY",
      year: "2021",
    },
    {
      name: "BENIN.TV",
      about: "VISUAL IDENTITY",
      inquiries: "BROADCAST DESIGN",
      year: "2018",
    },
    {
      name: "MISTER FREEZE NEXT LEVEL",
      about: "CREATIVE DIRECTION",
      inquiries: "STREET ART",
      year: "2016",
    },
    {
      name: "PARIS — ROUBAIX",
      about: "VISUAL IDENTITY",
      inquiries: "RACING",
      year: "2018",
    },
    {
      name: "ARTE HIP HOP",
      about: "ART DIRECTION",
      inquiries: "TV PROGRAM",
      year: "2022",
    },
    {
      name: "ARTE MULTIFACE",
      about: "ART DIRECTION",
      inquiries: "TV SHOW 2023",
      year: "2023",
    },
    {
      name: "PEACOCK SOCIETY",
      about: "BRANDING",
      inquiries: "FESTIVAL",
      year: "2020",
    },
    {
      name: "FOR ETERNITY",
      about: "VISUAL IDENTITY",
      inquiries: "METAVERSE",
      year: "2019",
    },
    {
      name: "THALASSA",
      about: "BRANDING",
      inquiries: "TV SHOW",
      year: "2017",
    },
    {
      name: "MANIFESTO",
      about: "VISUAL IDENTITY",
      inquiries: "FASHION STORE",
      year: "2015",
    },
    {
      name: "DICE",
      about: "VISUAL IDENTITY",
      inquiries: "RESTAURANT",
      year: "2016",
    },
  ];
  return (
    <table className=" w-full h-[50%] table-auto text-sm text-white ">
      <thead>
        <tr className="">
          <th className="text-left font-normal">GREGORY TEMPLE TATE</th>
          <th className="text-left font-normal">ABOUT</th>
          <th className="text-left font-normal">INQUIRIES</th>
          <th className="text-left font-normal"></th>
        </tr>
      </thead>
      <tbody className="">
        {projects.map((project, index) => (
          <tr
            key={index}
            className="border-b-[0.5px] border-color-white pb-10 mb-10"
          >
            <td>{project.name}</td>
            <td>{project.about}</td>
            <td>{project.inquiries}</td>
            <td>{project.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
