import coffeeToGo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Title } from "./components/Title/Title";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objKey = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
    }
  };

  const onCountTotalFeedback = () => good + neutral + bad;

  const onCountPositivePercentage = () =>
    Math.round(((good + neutral) * 100) / onCountTotalFeedback());

  return (
    <div className="App">
      <img src={coffeeToGo} className="App-logo" alt="coffeeToGo" />

      <Title title="Please leave feedback">
        <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
      </Title>

      {onCountTotalFeedback(objKey) === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Title title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={onCountTotalFeedback(objKey)}
            positivePercentage={onCountPositivePercentage(objKey)}
          />
        </Title>
      )}
    </div>
  );
}

export default App;
