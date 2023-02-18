import { useState, useEffect } from 'react'
import Result from './Result'
import Display from './Display'
import Choices from './Choices'
import { getRandomGameItem, calculateWinner } from '../game-logic'

const gameItems = [
  {
    imgUrl: '/images/rock.png',
    id: 0,
    name: 'Rock',
    beat: 'Scissors'
  },
  {
    imgUrl: '/images/paper.png',
    id: 1,
    name: 'Paper',
    beat: 'Rock'
  },
  {
    imgUrl: '/images/scissors.png',
    id: 2,
    name: 'Scissors',
    beat: 'Paper'
  }
]
const Main = () => {
  const [result, setResult] = useState('...')
  const [playerGameItem, setplayerGameItem] = useState(null)
  const [computerGameItem, setComputerGameItem] = useState(null)

  const handleGameItemChange = (gameItem) => {
    setplayerGameItem({ ...gameItem })
  }

  useEffect(() => {
    if (playerGameItem) {
      const computerNewItem = getRandomGameItem(gameItems)
      setComputerGameItem({ ...computerNewItem })
      setResult(calculateWinner(playerGameItem, computerNewItem))
    }
  }, [playerGameItem])

  return (
    <div className='container'>
      <div className='main'>
        <Choices
          gameItems={gameItems}
          handleGameItemChange={handleGameItemChange}
        />
        <Display />
        <Result
          user1GameItem={playerGameItem}
          user2GameItem={computerGameItem}
          result={result}
        />

      </div>
    </div>
  )
}

export default Main
