import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Captivative Videos",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "/CaptivativeVideos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    aosDelay: "0",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "/SafeTransactions",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    aosDelay: "500",
  },
  {
    name: "Experiaence Reality",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "/ExperiaenceReality",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    aosDelay: "1000",
  },
];

function Features() {
  return (
    <>
      <div className="container p-14 sm:py-0 sm:min-h-[600px]">
        <div>
          <h1 className="text-3xl mb-12 sm:text-4xl font-semibold text-center">
            Why Choose Us
          </h1>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div className="text-center group space-y-3 py-8 sm:space-y-6 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white group-hover:text-black rounded-lg duration-300">
                <div className="grid place-items-center">{data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                  href={data.link}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
