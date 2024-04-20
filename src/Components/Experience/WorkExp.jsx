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
const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://samarthainfo.com/" target="_blank">
                <Avatar
                  size="xl"
                  src={company}
                  alt="user 1"
                />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color="blue-gray">
              Samartha InfoSolutions
              </Typography>
              <Typography className=" my-2" color="gray">
                Frontend Developer Intern <br /> Jul 2023 - Sep 2023
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul color="gary" className="list-disc font-sans ml-5 text-gray-800">
              <li>Engineered a responsive Analytics Dashboard for an IoT platform using ReactJS and 
                TailwindCSS and also Employed various UI libraries for a seamless front-end experience.</li>
              
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
