import React from "react";
import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle={
        "Donec lacinia urna sit amet metus tempor viverra. Duis vitae diam sit amet ex malesuada sodales iaculis in eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
      }
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Donec in luctus purus. Nunc imperdiet leo sed diam ve
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          ondimentum finibus nisi, nec solli
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          cilisis lacus ornare in. Nam ultrices enim semper, bibend
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
      <img src={codeImage} alt="" className="rounded-lg shadow-lg shadow-thBlue" />

        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
