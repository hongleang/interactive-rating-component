import { Container } from "./components/styles/Container"
import { Card } from "./components/styles/Card"
import { GlobalStyle } from "./components/styles/Global"
import Rating from "./components/Rating/Rating"
import { Button } from "./components/styles/Button"
import { useState } from "react"
import RatingCard from "./components/RatingCard/RatingCard"
import ThankyouCard from "./components/ThankyouCard/ThankyouCard"

function App() {
  const [submit, setSubmit] = useState(false);
  const onSubmit = () => setSubmit(true);

  const rating = [1, 2, 3, 4, 5];
  const [selectedRate, setSelectedRate] = useState<number>(0);

  return (
    <>
      <GlobalStyle />
      <Container>
        {!submit ? <RatingCard {...{ onSubmit, rating, selectedRate, setSelectedRate }} /> : <ThankyouCard {...{ rating, selectedRate }} />}
      </Container>
    </>
  )
}

export default App
