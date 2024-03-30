// Write your code here
// Write your code here
import {useState} from 'react'
import {UnlockContainer, Image, Heading, Button} from './styledComponents'

function Unlock() {
  const [state, setState] = useState(false)

  const onClickButton = e => {
    e.preventDefault()
    setState(prevState => !prevState)
  }
  return (
    <UnlockContainer>
      {state ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      {state ? (
        <Heading>Your Device is Unlocked</Heading>
      ) : (
        <Heading>Your Device is Locked</Heading>
      )}
      {state ? (
        <Button type="button" onClick={onClickButton}>
          Lock
        </Button>
      ) : (
        <Button type="button" onClick={onClickButton}>
          Unlock
        </Button>
      )}
    </UnlockContainer>
  )
}
export default Unlock
