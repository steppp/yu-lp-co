import './style.css'

export type LpCounterProps = {
  amount: number
  playerName: string
} & React.PropsWithChildren

function LpCounter(props: LpCounterProps) {
  console.debug({ props })

  return <div className='counterContainer'>
    <div className='counterWrapper'>
      <div className='playerLabelWrapper'>
        <span className='playerLabelText'>
          { props.playerName }
        </span>
      </div>
      <div className='playerLpWrapper'>
        <span className='playerLpText'>
          { props.amount }
        </span>
      </div>
    </div>
  </div>
}

export default LpCounter