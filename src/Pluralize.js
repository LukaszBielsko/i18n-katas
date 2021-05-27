import React, { useState } from "react";
import translate from "./i18nProvider/translate";

const Pluralize = () => {

  const [counter, setCounter] = useState(0)

  const handleUp = () => {
    setCounter(counter => counter + 1)
  }

  const handleDown = () => {
    setCounter(counter => counter === 0 ? 0 : counter - 1)
  }

  return (
    <div >
      <div>
        <button onClick={handleDown}>less</button>
        <button onClick={handleUp}>more</button>
      </div>
      {translate('computer', "no default computers available", { count: counter })}
    </div>
  )
}

export default Pluralize