import React from 'react'
import './styles/jornadas.css'
import CardComponent from './Card'
import jor1 from '../images/solidaria2.jpeg'
import jor2 from '../images/solidaria6.jpeg'
import jor3 from '../images/solidaria7.jpeg'
import jor4 from '../images/solidaria8.jpeg'
import jor5 from '../images/solidaria5.jpeg'
import jor6 from '../images/solidaria3.jpeg'
import jor7 from '../images/solidaria11.jpg'
import jor8 from '../images/solidaria1.jpeg'
import Acordion from './Acordion'
import { useRef } from 'react'
import Modal from './Modal'
import ToggleModal from './ToggleModal'

const cards = [
  {title: 'Alimentos', info: 'Donaciones de alimentos no perecederos, verduras, carnes, etc.'},
  {title: 'Medicamentos', info: 'Donaciones de medicamentos para todas las edades'},
  {title: 'Varios', info: 'Tapitas plásticas, Útiles escolares, Vestimenta, Juguetes'},
]

const jorImages = [jor1, jor2, jor3, jor4, jor6, jor5, jor7, jor8]

const Jornadas = () => {
  const refModal = useRef()

  return (
    <div className='jornadas' id='jornadas'>
      <h3 className='jornadas-title'>Jornadas Solidarias</h3>
      <p className='jornadas-description'>La institución realiza <b>acciones y jornadas solidarias</b> para ayudar a los que más lo necesitan. Estamos comprometidos en colaborar con la sociedad más allá de los colores.</p>
      <div className='jornadas-acordion'>
        <h4 className='jornadas-acordion-title'>Algunas de nuestras donaciones:</h4>
        <Acordion />
      </div>
      <div className='jornadas-images d-flex justify-content-center align-items-center'>
        {jorImages.map(image => {
          return (<img src={image} onClick={()=> ToggleModal(refModal, image, null)}/>)
        })}
      </div>
      <p className='jornadas-ampliar'>* Presionar sobre la imagen para ampliarla</p>

      <Modal refModal={refModal}/>
    </div>
  )
}

export default Jornadas
