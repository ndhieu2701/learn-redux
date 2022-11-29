import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {bindActionCreators} from "redux"
import {actionCreators} from './state/index';

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withdrawMoney(100)}>withdraws</button>
    </div>
  );
}

export default App;
