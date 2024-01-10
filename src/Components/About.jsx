import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <h1 className="text-2xl font-bold text-center mt-2 mb-5 border-b-2 border-indigo-500">
          About Me
        </h1>
        <p className="text-md md:text-lg">
          I am a passionate frontend developer with experience in building
          innovative and scalable web applications.
          <br />
          <br />
          My educational background includes a Bachelor of Engineering degree in
          Computer Engineering from K.S.Institute of Technology
        , Bangalore.
          <br />
          <br />I have experience working as a
          <span className=" font-semibold mx-2 text-indigo-700 decoration-indigo-600">
            Frontend Developer Intern
          </span>
          at Samartha info solutions where I led the design initiative for a sophisticated User Dashboard based on IoT, utilizing Figma for the design process. My focus was on prioritizing user experience, resulting in a clean and aesthetically pleasing interface. The implementation involved engineering a responsive Analytics Dashboard for an IoT platform using ReactJS and TailwindCSS. To ensure a seamless front-end experience, I incorporated various UI libraries. For analytical representations, I utilized ChartJS, creating visually informative data displays. Additionally, I employed Leaflet.js to map active IoT devices, offering valuable geographical insights into their locations. This comprehensive approach aimed to deliver a user-centric and visually compelling solution for effective IoT device management.
          <br />
          
        </p>
      </div>
    </div>
  );
};

export default About;
