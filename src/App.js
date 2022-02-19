import { ContainerTop } from './components/ContainerTop';
import { ContainerBottom } from './components/ContainerBottom';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-title">25+5 aka Pomodoro Clock</div>
      <div className="app-main">
        <ContainerTop className="main-top"></ContainerTop>
        <ContainerBottom className="main-bottom"></ContainerBottom>
      </div>
    </div>
  );
}

export default App;
