import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Style.css';
import Header from './component/Header'; 
import HomePage from './component/home';

function App() {
    return ( 
        <div className = "App">
            <Header/>  
            <HomePage/>
        </div>
    );
}

export default App;