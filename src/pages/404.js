import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <p>Sorry! No page found.</p>
      <Link to="/">Back to Home Page</Link>
    </main>
  )
}

export default NotFoundPage
