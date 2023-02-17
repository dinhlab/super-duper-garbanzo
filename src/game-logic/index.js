export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length)
  return gamesItems[index]
}

export const calculateWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.name === user2GameItem.name) return 'Draw'
  else if (user1GameItem.beat === user2GameItem.name) return 'Win'
  else return 'Lost'
}
