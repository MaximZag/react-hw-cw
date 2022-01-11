import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div>
            <div className={'top'}>
                <div className={'left'}><Users/></div>
                <div className={'right'}><Posts/></div>
            </div>
           <div className={'bottom'}> <Comments /></div>
        </div>
    );
}

export default App;
