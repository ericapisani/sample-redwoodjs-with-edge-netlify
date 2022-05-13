import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

class HomePage extends React.Component {
  async componentDidMount() {
    const response = await fetch(`${process.env.BASE_URL}/geolocation`)
    const body = await response.json()

    if (body.country === 'CA') {
      navigate(routes.canada())
    } else if (body.country === 'GB') {
      navigate(routes.uk())
    }
  }

  render() {
    return (
      <>
        <MetaTags title="Home" description="Home page" />

        <h1>Hi friend!</h1>
      </>
    )
  }
}

export default HomePage
