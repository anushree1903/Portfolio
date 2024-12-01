import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import company from "../Experience/images/company.png"
import company2 from "../Experience/images/company2.png"
import company1 from "../Experience/images/company1.jpeg"
const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
           <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
             
                <Avatar
                  size="xl"
                  src={company2}
                  alt="user 1"
                />
             
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color="blue-gray">
              Brightchamps
              </Typography>
              <Typography className=" my-2" color="gray">
              Associate Graphic Designer <br /> Aug 2024 - Present
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul color="gary" className="list-disc font-sans ml-5 text-gray-800">
              <li>During my internship, I designed educational modules for grades 1 to 12 using Figma and Photoshop.
                This project allowed me to develop a cohesive design system for consistency across all grade levels, enhancing my skills in UI/UX design and graphic Design, visual storytelling, and user-focused content creation.</li>
              
            </ul>
          </TimelineBody>
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
             
                <Avatar
                  size="xl"
                  src={company1}
                  alt="user 1"
                />
             
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color="blue-gray">
              Brithat InfoTech Private Limited
              </Typography>
              <Typography className=" my-2" color="gray">
                UI/UX Designer Intern <br /> Jul 2023 - Sep 2023
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul color="gary" className="list-disc font-sans ml-5 text-gray-800">
              <li>During my internship, I designed a responsive user interface for Edzer using Figma,
                which improved user engagement by 20% and reduced errors by 40%.
                I created a design system for consistency and developed key pages
                like Blogs, About, and Contact, enhancing my skills in UI/UX design, prototyping, and user testing.</li>
              
            </ul>
          </TimelineBody>
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
             
                <Avatar
                  size="xl"
                  src={company}
                  alt="user 1"
                />
             
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color="blue-gray">
              Samartha InfoSolutions
              </Typography>
              <Typography className=" my-2" color="gray">
                UI/UX Designer Intern <br /> Jul 2023 - Sep 2023
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul color="gary" className="list-disc font-sans ml-5 text-gray-800">
              <li>At Samartha Info Solutions, I led the design of a sophisticated IoT User Dashboard using Figma, focusing on user experience and visual clarity.
                I designed a responsive Analytics Dashboard.
                This approach resulted in a user-centric and visually compelling solution for IoT device management.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
