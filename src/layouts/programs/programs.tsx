import { Heading } from "@/components/heading/heading";
import { Program, ProgramProps } from "@/components/program/program";
import program1 from "@/assets/img/program1.png";
import program2 from "@/assets/img/program2.png";
import program3 from "@/assets/img/program3.png";
import program4 from "@/assets/img/program4.png";
import "./programs.css";

const programs: ProgramProps[] = [
  {
    title: "Flex Muscle",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dicta maiores porro nesciunt eligendi quis?",
    imageUrl: program1,
  },
  {
    title: "Cardio Exercise",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dicta maiores porro nesciunt eligendi quis?",
    imageUrl: program2,
  },
  {
    title: "Basic Yoga",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dicta maiores porro nesciunt eligendi quis?",
    imageUrl: program3,
  },
  {
    title: "Weight Lifting",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dicta maiores porro nesciunt eligendi quis?",
    imageUrl: program4,
  },
];

export const Programs = () => {
  return (
    <section className="programs section">
      <div className="programs__container container">
        <div className="programs__heading">
        <Heading subtitle="Our Program">
          <span>Build your</span> <span>Best Body</span>
        </Heading>
        </div>

        <div className="programs__cards">
          {programs.map((program, index) => (
            <Program
              key={index}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
