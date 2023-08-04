import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
function Main() {
  return (
    <div class='f'>
    <div class="container">
        <h1>Welcome to PANACE.AI</h1>
        <Link to={{pathname:"/Login"}}>
        <button class="get-started-btn">Get Started</button>
        </Link>
    </div>
    </div>
  )
}
export default Main