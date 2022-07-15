import React, { useState } from 'react'
import Button from './Button'
import quotes from '../json/quotes.json'


const QuoteBox = () => {

const  arrayColors = [
    "#F3C5FF",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#845EC2",
    "#2C73D2",
    "#0081CF",
    "#0089BA",
    "#008E9B",
    "#008F7A",
    "#FEFEDF",
    ]

const randomColors = () => {
    return Math.floor(Math.random() * arrayColors.length)
}

const randomQuotes = () => {
    return Math.floor(Math.random() * quotes.length)
}
  const [colorRandom, setColorRandom] = useState(arrayColors[randomColors()])
  const [quoteRandom, setquoteRandom] = useState(quotes[randomQuotes()])

  document.body.style.backgroundColor = colorRandom

    const randomGeneral = () => {
        setColorRandom(arrayColors[randomColors() ] )
        setquoteRandom(quotes[randomQuotes() ] ) 

    }

  return (
    <article style={{color: colorRandom}} className='card-quote'>
        <div className='quote-container'>
            <p className='quote'>
               {quoteRandom.quote}
            </p>
        </div>
        <h1 className='autor'>
            {quoteRandom.author} 
        </h1>
        <Button colorRandom={colorRandom} randomGeneral={randomGeneral} />

    </article>
  )
}

export default QuoteBox