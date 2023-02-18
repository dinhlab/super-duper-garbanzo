const Result = ({ result, user1GameItem, user2GameItem }) => {
  return (
    <div className='result-container'>
      <h1 className='result-header'>Result</h1>
      <div className='result-wrapper'>
        {user1GameItem && <span><img alt='game-item' src={user1GameItem.imgUrl} /></span>}
        <span className='result'>{result}</span>
        {user2GameItem && <span><img alt='game-item' src={user2GameItem.imgUrl} /></span>}
      </div>
    </div>
  )
}

export default Result
