import React from "react";
import Rain from "../public/rain.jpg";
import Sunny from "../public/sunny.jpg";
import Cloudy from "../public/cloudy.jpg";
import Image from "next/image";


const Background = (data) => {
  const backDrop = [
    {
      name: "Rain",
      background: Rain,
    },
    {
      name: "Sunny",
      background: Sunny,
    },
    {
      name: "Cloudy",
      background: Cloudy,
    },
  ];
  const pic = backDrop.find((el) => el.name === data.weatherDescription.weather[0].main) ?.background;
  return(
   <div className="-z-10">
    <Image
    className="object-cover w-full min-h-screen"
    src={pic}
    key={pic} />
    </div>
  )
};

export default Background;
