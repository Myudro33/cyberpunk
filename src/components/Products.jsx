import React from "react";
import PageSection from "./PageSection";
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Nunc sit amet tellus sed erat commodo tristique quis eu tellus. In in turpis porta, varius erat et, maximus lacus. Nulla vehicula efficitur neque ac dignissim. Maecenas convallis libero eu turpis pulvinar egestas at ac erat. Pellentesque ornare sagittis metus eu imperdiet",
    },
    {
      id: 2,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload to orbit",
      subtitle:
        "Nunc sit amet tellus sed erat commodo tristique quis eu tellus. In in turpis porta, varius erat et, maximus lacus. Nulla vehicula efficitur neque ac dignissim. Maecenas convallis libero eu turpis pulvinar egestas at ac erat. Pellentesque ornare sagittis metus eu imperdiet",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "robotics",
      subtitle:
        "Nunc sit amet tellus sed erat commodo tristique quis eu tellus. In in turpis porta, varius erat et, maximus lacus. Nulla vehicula efficitur neque ac dignissim. Maecenas convallis libero eu turpis pulvinar egestas at ac erat. Pellentesque ornare sagittis metus eu imperdiet",
    },
    {
      id: 4,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "advanced electronics",
      subtitle:
        "Nunc sit amet tellus sed erat commodo tristique quis eu tellus. In in turpis porta, varius erat et, maximus lacus. Nulla vehicula efficitur neque ac dignissim. Maecenas convallis libero eu turpis pulvinar egestas at ac erat. Pellentesque ornare sagittis metus eu imperdiet",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Products"
      subtitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies nisi nec ligula tincidunt vulputate. Curabitur blandit, enim eu ultricies fringilla,"
      }
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, title, subtitle, icon }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
