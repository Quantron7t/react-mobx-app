import BitcoinRates from './components/bitcoinRates';

function App() {
  return (
    <div className='container mt-5'>
      <h1 className='fw-light text-uppercase'>Bitcoin rates</h1>
      <br/>
      <BitcoinRates></BitcoinRates>
    </div>
  );
}

export default App;
