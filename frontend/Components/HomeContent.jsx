import React from "react";

const HomeContent = (props) => {
  return (
    <main id="home-content">
      <div className="bg-[#f0f8ff] border-3 border-[#233c2f] rounded-[10px] my-[30px] w-[80%] h-[90%] ml-[5%] mr-[5%] flex flex-row gap-[10%] items-center justify-center mt-[5%] px-[5%] py-[3%] flex-shrink-0">
        <img
          className="w-[80%] h-[45vh] rounded-[5%] border-3 border-black"
          src={props.img.src}
          alt={props.img.alt}
        />
        <div className="flex flex-col gap-[10%] items-center justify-center">
          <h1>{props.title}</h1>
          <a href={props.link} target="_blank" style={{ color: "#dfbb98" }}>
            LET'S GO !!
          </a>
          <h3 className="text-[#233c2f] font-italics">{props.desc}</h3>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
