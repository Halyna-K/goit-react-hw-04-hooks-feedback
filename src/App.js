import coffeeToGo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Title } from "./components/Title/Title";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";
import { Statistics } from "./components/Statistics/Statistics";

export class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPositivePercentage: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = (e) => {
    e.preventDefault();
    const name = e.target.name;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  onCountTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  onCountPositivePercentage = () => {
    const { good, neutral, bad } = this.state;

    const positivePercentage = Math.round(
      ((good + neutral) * 100) / (good + neutral + bad)
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback, onCountTotalFeedback, onCountPositivePercentage } =
      this;
    const objKey = Object.keys(this.state);

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
}

export default App;
