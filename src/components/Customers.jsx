import React from "react";
import PageSection from "./PageSection";
import {
  FaApple,
  FaFacebook,
  FaAmazon,
  FaGoogle,
  FaSnapchat,
} from "react-icons/fa";

const Customers = () => {

const facts=[
    {
        id:1,
        title:'$49m',
        subtitle:'was and broken pillas rustling thy'
    },
    {
        id:2,
        title:'57%',
        subtitle:'Much my quaint dream mortals of.'
    },
    {
        id:3,
        title:'3 months faster',
        subtitle:'whose in from oer and a the is ghastly'
    },
    {
        id:4,
        title:'7 new countries',
        subtitle:'door the beating door me unto that.'
    },
]

const icons =[
    {
        id:1,
        title:'Apple',
        icon: <FaApple size={25} />
    },
    {
        id:2,
        title:'Google',
        icon: <FaGoogle size={25} />
    },
    {
        id:3,
        title:'SnapChat',
        icon: <FaSnapchat size={25} />
    },
    {
        id:4,
        title:'Amazon',
        icon: <FaAmazon size={25} />
    },
    {
        id:5,
        title:'Facebook',
        icon: <FaFacebook size={25} />
    },
]

  return (
    <PageSection
      name="customers"
      title="Customers"
      subtitle={
        "Donec lacinia urna sit amet metus tempor viverra.malesuada sodales iaculis in eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
      }
    >
        <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
            {facts.map(({id,title,subtitle})=>(
            <div key={id} className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg">
                <h1 className="text-3xl font-bold mt-2">{title}</h1>
                <p>{subtitle}</p>
            </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-6 ">
            {icons.map(({id,icon,title})=>(
                <div className="flex items-center capitalize p-4 rounded-lg " key={id}>
                   {icon}
                   <p className="ml-2">{title}</p>
                </div>
            ))}

        </div>
        </>
    </PageSection>
  );
};

export default Customers;
