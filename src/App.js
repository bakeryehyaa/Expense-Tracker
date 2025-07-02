import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/incomeExpenses';
import TransactionList from './components/TransactionLIst';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
