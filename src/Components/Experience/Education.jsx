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
import ksit from "./images/ksit.png"

const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src={ksit}
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              K.S.Institute of Technology
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="gray" className="font-semibold text-gray-600">
              Computer Science and Engineering
              <br />
              Bachelor of Engineering - BE, <br /> 2020 - 2024
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://www.static-contents.youth4work.com/university/Documents/Colleges/collegeLogo/20230127131629.png?v=20230127131629"
                alt="user 2"
              />
            </TimelineIcon>
            

            <Typography variant="h5" color="blue-gray">
              RNS Pre University College
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-semibold text-gray-600">
              Higher Secondary School, Science <br /> 2018 - 2020
            </Typography>
            
          </TimelineBody>
          
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://carmelschool.edu.in/_next/static/images/carmel-intrologo-99510a416e0cd9cb6952bd3c97d27973.png.webp"
                alt="user 2"
              />
            </TimelineIcon>
            

            <Typography variant="h5" color="blue-gray">
              Carmel School
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-semibold text-gray-600">
              X Grade,  <br /> 2018 
            </Typography>
            
          </TimelineBody>
          
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
