import LpCounter from '../LpCounter'
import './style.css'

function LpCountersArea() {
  return <div className='countersArea'>
    <div className='countersAreaWrapper'>
      <LpCounter amount={ 8000 } playerName='Player 1' />
      <LpCounter amount={ 8000 } playerName='Player 2'/>
    </div>
  </div>
}

export default LpCountersArea