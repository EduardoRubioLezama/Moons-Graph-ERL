import Home from './Components/Home/Home'
import './App.css';

const data = [
  {
    amountTotal: 200000,
    amountTotalText: '200.000€',
    title: 'REVENUE',
    item1: {
      name: 'Tablet',
      amountText: '120.000€',
      amount: 120000,
      percentage: 60
    },
    item2: {
      name: 'Smartphone',
      amountText: '80.000€',
      amount: 80000,
      percentage: 40
    }
  },
  {
    amountTotal: 50000000,
    amountTotalText: '50.000.000',
    title: 'IMPRESIONS',
    item1: {
      name: 'Tablet',
      amountText: '20.000.000',
      amount: 20000000,
      percentage: 40
    },
    item2: {
      name: 'Smartphone',
      amountText: '30.000.000',
      amount: 30000000,
      percentage: 60
    }
  },
  {
    amountTotal: 600000000,
    amountTotalText: '600.000.000',
    title: 'VISITS',
    item1: {
      name: 'Tablet',
      amountText: '480.000.000',
      amount: 480000000,
      percentage: 80
    },
    item2: {
      name: 'Smartphone',
      amountText: '120.000.000',
      amount: 120000000,
      percentage: 20
    }
  }
]

function App() {
  return (
    <Home
      data={data}
    ></Home>
  );
}

export default App;
