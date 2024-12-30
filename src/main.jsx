import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Timetable from './lec2412/timetable'
//import StateABC from './lec3012/statement1'
//import StateXYZ from './lec3012/statement2'
import StateMerge from './lec3012/statement3'
//import Component1 from './lec2412/component1'
//import HtmlComponent from './lec2412/htmlcomp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateMerge/>
  </StrictMode>,
)
