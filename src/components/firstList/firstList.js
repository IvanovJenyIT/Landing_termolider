import React from "react";
import ImageRandom from './slider'
import Forma from '../foyou/forma'

const FirstList = () => {
    return(
        <div className='container-fluid img-fon' >
            <div className="container conteiner-slider">
                <p className='slogan'>Правильное решение <br/>для уютного дома</p>
                     <div className="row">
                         <div className="col-12 col-md-6"><ImageRandom/></div>
                         <div className="col-12 col-md-6 width100"><Forma/></div>
                </div>
        </div>
        </div>
    )}

export default FirstList;