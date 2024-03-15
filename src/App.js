import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';


function App() {
  const [number, setNumber] = useState();
  const [total, setTotal] = useState(0);

  const add = () => {
    setTotal(total + number);
  }

  const substract = () => {
    setTotal(total - number);
  }

  const multiply = () => {
    setTotal(total * number);
  }

  const divide = () => {
    setTotal(total / number);
  }

  return (
    <div className='container-fluid'>
      <h1>Simplest Working Calculator</h1>
      <h4>{total}</h4>
      <div className='col-lg-5 col-md-7 col-sm-9'>
        <input className='form-control' type='number' value={number} onChange={(e) => setNumber(+e.target.value)}/>
      </div>
      <div className="my-3">
        <div className='row row-cols-auto'>
          <div className="col">
            <div>
              <button className='me-2 border my-1 btn btn-light' onClick={ add }>+</button>
              <button className='me-2 border my-1 btn btn-light' onClick={ substract }>−</button>
            </div>
            <div>
              <button className='me-2 border my-1 btn btn-light' onClick={ multiply }>×</button>
              <button className='me-2 border my-1 btn btn-light' onClick={ divide }>÷</button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <button className='border my-1 px-4 btn btn-danger' onClick={() => setTotal(0)}>reset result</button>
            </div>
            <div className='row'>
              <button className='border my-1 px-4 btn btn-danger' onClick={() => setNumber('')}>reset input</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
