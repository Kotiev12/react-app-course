import { Button } from "../Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>level: 1</div>
        <div>Not complited</div>
      </div>

      <h5 className={cls.cardTitle}>ЧТо такое JSX</h5>
      <div className={cls.cardAnswers}>
        <label>short answer:</label>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam. sit amet consectetur adipisicing elit.
          Aspernatur, nam.
        </p>
      </div>

      <Button onClick={() => {}}>View</Button>
    </div>
  );
};
