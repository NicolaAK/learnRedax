import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReduser';
import { addCustomerAction, removeCustomerAction } from './store/customerReduser';

function App() {
  const dispath = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

  const addCash = (cash) => {
    dispath(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispath(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispath(addCustomerAction(customer))
  }

  const removeCustomers = (customer) => {
    dispath(removeCustomerAction(customer.id))
  }

  console.log(customers)
  return (
    <div className="App">
      <div className='btns'>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
        <button onClick={() => addCustomer(prompt())}>добавить клиента</button>
        <button onClick={() => dispath(fetchCustomers())}>добавить клиента из базы</button>
      </div>
      {customers.length > 0 ? customers.map(customer => <div onClick={() => removeCustomers(customer)}>{customer.name}</div>) : <div>клиентов нет</div>}
    </div>

  );
}

export default App;
