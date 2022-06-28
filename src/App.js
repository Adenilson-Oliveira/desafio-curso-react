
import './App.css';

import Carro from './Carro';

function App() {

  const carros = [
    {id: 1, marca: 'Toyota', modelo: 'Hilux', valor: 90000, nota: 8},
    {id: 2, marca: 'VW', modelo: 'Fusca', valor: 10000, nota: 10},
    {id: 3, marca: 'Fiat', modelo: 'Toro', valor: 75000, nota: 7},
    {id: 4, marca: 'Toyota', modelo: 'SW4', valor: 130000, nota: 10}
  ]

  return (
    <div className="App">
      <h1 className='title'>Listas com detalhes de alguns carros aleatórios!</h1>
      {carros.map((carro) => (
        <Carro key={carro.id} marca={carro.marca} modelo={carro.modelo} valor={carro.valor} nota={carro.nota} />
      ))}
    </div>
  );
}

export default App;
