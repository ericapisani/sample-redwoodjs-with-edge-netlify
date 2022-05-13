import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UsPage = () => {
  return (
    <>
      <MetaTags title="Us" description="Us page" />

      
      <img style={{maxHeight: 100 + 'px', maxWidth: 100 + 'px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/240px-Soccer_ball.svg.png" alt="Soccer ball" />

      == Football

      <br/ >
      <img style={{maxHeight: 100 + 'px', maxWidth: 100 + 'px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/American_Football_1.svg/320px-American_Football_1.svg.png" />

      != Football
    </>
  )
}

export default UsPage
