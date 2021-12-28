import './App.css';
import Condition from './components/Condition/Condition';
import Navbar from './components/Navbar/Navbar';
import SecondData from './components/SecondData/SecondData';
import Visualization from './components/Visualization/Visualization';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Visualization></Visualization>
            <SecondData></SecondData>
        </div>
    );
}

export default App;
