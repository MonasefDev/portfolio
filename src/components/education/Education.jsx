import TimelineElement from "./TimelineElement";
import "./education.scss";
import { FaUserGraduate } from "react-icons/fa";
import dev from "../../developer.json";

function Education() {
  return (
    <div className="h-full w-full p-2 lg:py-5">
      <div className="timeline">
        {dev.about.education.map((diplome, index) => (
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

export default Education;
