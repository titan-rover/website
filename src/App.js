
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './routes/Homepage';
import About from './routes/About';
import URC from './routes/URC';
import Rovers from './routes/Rovers'
import Sponsors from './routes/Sponsors';
import Alumni from './routes/Alumni';


function App () {
return(
<Router>
<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/urc" element={<URC />}/>
        <Route path="/rovers" element={<Rovers />}/>
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumni />} />
 </Routes>
</Router>
)
}


export default App