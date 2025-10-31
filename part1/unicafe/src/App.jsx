import { useState } from 'react'

const Button = (props) => {
  const {onClick, text} = props
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) =>{
  return(
      <tr>
        <td>{text} {value}</td>
      </tr>
  )

}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  const average = (good - bad) / (good + bad + neutral)
  const positiveReviews = (good) / (good + bad + neutral)
  const all = good + bad + neutral

  if(all === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}/>
          <StatisticLine text={"neutral"} value={neutral}/>
          <StatisticLine text={"bad"} value={bad}/>
          <StatisticLine text={"all"} value={all}/>
          <StatisticLine text={"average"} value={average}/>
          <StatisticLine text={"positive"} value={positiveReviews}/>
        </tbody>
      </table>

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = {good: good, neutral: neutral, bad:bad}

  const goodReview = () => {
    setGood(good + 1)
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
  }

  const badReview = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodReview} text={"good"}/>
      <Button onClick={neutralReview} text={"neutral"}/>
      <Button onClick={badReview} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={stats.good} bad={stats.bad} neutral={stats.neutral}/>
    </div>
  )
}

export default App