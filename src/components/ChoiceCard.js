const ChoiceCard = ({ gameItem, handleGameItemChange }) => {
  const { imgUrl, name } = gameItem
  return (
    <img
      onClick={() => {
        handleGameItemChange(gameItem)
      }}
      className='choice'
      src={imgUrl}
      alt={name}
    />
  )
}
export default ChoiceCard
