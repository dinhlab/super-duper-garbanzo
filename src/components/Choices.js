import ChoiceCard from './ChoiceCard'

const Choices = ({ gameItems, handleGameItemChange }) => {
  return (
    <div className='choices-container'>
      <h2 className='choices-title'>Pick</h2>
      <div className='choices'>
        {gameItems.map((gameItem) => (
          <ChoiceCard
            key={gameItem.id}
            gameItem={gameItem}
            handleGameItemChange={handleGameItemChange}
          />
        ))}
      </div>
    </div>
  )
}

export default Choices
