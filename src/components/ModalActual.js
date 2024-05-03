import React from 'react'
import Carrousel2 from './Carrousel2'
import ToggleModal2 from './ToggleModal2'
import './styles/modal.css'

import img18 from '../images/obra40.jpeg'
import img19 from '../images/obra41.jpeg'
import img20 from '../images/obra42.jpeg'
import img21 from '../images/obra43.jpeg'
import img22 from '../images/obra44.jpeg'
import img23 from '../images/obra45.jpeg'
import img24 from '../images/obra46.jpeg'
import img26 from '../images/obra48.jpeg'

const actual = [img18, img19, img20, img21, img22, img23, img24, img26]

const ModalActual = ({modalActual}) => {
  return (
    <div ref={modalActual} className='modal-2 hidden d-flex justify-content-center align-items-center' onClick={()=> ToggleModal2(modalActual)}>
      <Carrousel2 images={actual} title={'Actual'}/>
    </div>
  )
}

export default ModalActual
