import styles from './Carro.module.css'

const Carro = ({marca, modelo, valor, nota}) => {
  return (
    <div className={styles.container_carro}>
        <h1>Detalhes do carro {modelo}:</h1>
        <ul>
            <li>Marca: {marca}</li>
            <li>Modelo: {modelo}</li>
            <li>Valor: R${valor},00</li>
            <li>Nota: {nota}</li>
        </ul>
    </div>
  )
}

export default Carro