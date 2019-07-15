import React from 'react';
import Forma from './forma'

const FoYou = () => {
    return(
        <div className='container-fluid background-pink foyou'>
            <div className="container"><p className='text-blu text-center'>Для вас</p>
                <div className="row ">
                    <div className="col-12 col-md-6 big"><Forma/></div>
                    <div className="col-12 col-md-6">
                          <ul>
                            <li><i className="fa fa-check-circle fa-lg"></i>Быстрая доставка</li>
                            <li><i className="fa fa-check-circle fa-lg"></i>Акции и скидки</li>
                            <li><i className="fa fa-check-circle fa-lg"></i>Консультации</li>
                            <li><i className="fa fa-check-circle fa-lg"></i>Калькуляция теплоотдачи</li>
                            <li><i className="fa fa-check-circle fa-lg"></i>Удобный способ оплаты</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 mini"><Forma/></div>
                </div>
        </div>
        </div>
    )
}

export default FoYou;