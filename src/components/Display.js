import Player from './Player'

const Display = () => {
  return (
    <div className='display'>
      <Player avatarUrl='/images/player.png' name='Player' />
      <div className='fight'>VS</div>
      <Player avatarUrl='/images/computer.png' name='Computer' />
    </div>
  )
}
export default Display
