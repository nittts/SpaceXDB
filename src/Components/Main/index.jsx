import { Routes, Route } from "react-router-dom"

import Capsules from './Pages/Capsules'
import Company from './Pages/Company'
import Cores from './Pages/Cores'
import Crew from './Pages/Crew'
import Dragons from './Pages/Dragons'
import History from './Pages/History'
import Landpads from './Pages/Landpads'
import Launchpads from './Pages/Launchpads'
import Rockets from './Pages/Rockets'
import Ships from './Pages/Ships'
import Welcome from "./Pages/Welcome"

function Main() {

    return (
        <Routes>
        <Route activeClassName="current" exact path='/' element={<Welcome/>}></Route>
        <Route activeClassName="current" exact path='/Capsules' element={<Capsules/>}></Route>
        <Route activeClassName="current" exact path='/Company' element={<Company/>}></Route>
        <Route activeClassName="current" exact path='/Cores' element={<Cores/>}></Route>
        <Route activeClassName="current" exact path='/Crew' element={<Crew/>}></Route>
        <Route activeClassName="current" exact path='/Dragons' element={<Dragons/>}></Route>
        <Route activeClassName="current" exact path='/History' element={<History/>}></Route>
        <Route activeClassName="current" exact path='/Landpads' element={<Landpads/>}></Route>
        <Route activeClassName="current" exact path='/Launchpads' element={<Launchpads/>}></Route>
        <Route activeClassName="current" exact path='/Rockets' element={<Rockets/>}></Route>
        <Route activeClassName="current" exact path='/Ships' element={<Ships/>}></Route>
      </Routes>
    )
}

export default Main