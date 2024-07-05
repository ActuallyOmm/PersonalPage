import React from "react";
import Image from "next/image";
const ProjectTile = ({ title, description, skills, id }) => {
  const skillsArray = Object.entries(skills).map(
    ([skill, level]) => `${skill}: ${level}`
  );
  return (
    <>
      <div
        key={id}
        className="relative rounded-xl dark:bg-customPeach mx-auto p-2 sm:w-92 size-auto flex flex-col overflow-hidden auto-cols-auto"
      >
        <Image
          className="flex justify-center items-center  w-12 h-12  rounded-full"
          src="/cat.png"
          alt=""
          width="128"
          height="128"
        ></Image>
        <h2 className="projectTitle">{title}</h2>
        <p className="projectDesc ">{description}</p>
        <br></br>
        <p className="projectDesc ">
          <b> Skills: </b>
          {skills}
        </p>
      </div>
    </>
  );
};

export default ProjectTile;
