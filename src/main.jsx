import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timetable from './lec2412/timetable'
//import Component1 from './lec2412/component1'
//import HtmlComponent from './lec2412/htmlcomp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timetable/>
  </StrictMode>,
)
