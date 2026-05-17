import {} from "react";
const items = [
  {
    task: "Выучить реакт",
    icon: "Я",
    isCompleted: true,
  },
  {
    task: "Выучить реакт",
    icon: "Я",
    isCompleted: true,
  },
  {
    task: "Не забивать на английский",
    icon: "Я",
    isCompleted: false,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.icon}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};
