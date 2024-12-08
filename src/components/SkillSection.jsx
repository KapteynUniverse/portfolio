import Image from "./Image";
import List from "./List";

function SkillSection(props) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image src={props.src} style="w-16 " />
      <h3 className="font-serif text-2xl my-2 tracking-wide capitalize">
        {props.title}
      </h3>
      <List items={props.items} />
    </section>
  );
}

export default SkillSection;
