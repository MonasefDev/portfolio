import TimelineElement from "./TimelineElement";
import "./education.scss";
import { FaUserGraduate } from "react-icons/fa";

function TimeLineComponent({ element }) {
  console.log(element);
  return (
    <div className="h-full w-full p-2 lg:py-5">
      <div className="timeline">
        {element.map((diplome, index) => (
          <TimelineElement
            key={index}
            date={diplome.date}
            index={index + 1}
            header={diplome.header}
            description={diplome.description}
            image={<FaUserGraduate />}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLineComponent;
