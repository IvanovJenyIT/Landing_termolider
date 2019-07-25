import React from "react";
// import ImageRandom from './slider'
import Forma from '../foyou/forma'

const FirstList = () => {
    return(
        <div className='container-fluid img-fon' >
            <div className="container-fluid conteiner-slider">
                <p className='slogan'>Правильное решение <br/>для уютного дома</p>
                     <div className="row">
                         <div className="col-12 col-md-4 img-blok text-center"><img alt="Термoлидер" src="/img/slider/001.png"/></div>
                         <div className="col-12 col-md-8 width100"><Forma/></div>
                </div>
        </div>
        </div>
    )}

export default FirstList;