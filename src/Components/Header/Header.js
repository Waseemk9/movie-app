import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers"



const Header = () => {
    return ( 
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVWnXvXKT6FU1Kfw0qpYAQa0NVAJrH2Cy-Q&usqp=CAU"/></Link>
                <Link to="movie/login" style={{textDecoration: "none" }}><span>Login</span></Link>
                <Link to="movie/search"style={{textDecoration: "none" }}><span>Search</span></Link>
                <form onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Search for Movie" autofocus required />
                <button type="submit">Go</button>    
                </form>
                <Link to="movie/movies"style={{textDecoration: "none" }}><span>Movies</span></Link>
            </div>
        </div>
    )
    
}
export default Header


  
  
  
  
