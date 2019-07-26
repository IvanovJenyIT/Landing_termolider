import React from 'react';

const NineYer = () => {
    const Data = new Date();
    const year = Data.getFullYear() - 2010;
    return(
        <div  className="container nineyer-blok">
            <p className='text-blu text-center'>Почему выбирают нас</p>
                <div className="row align-items-center nineyer">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-12 col-lg-4 col-xl-3 img-nineyer text-center"><img alt="Термoлидер" src="/img/logo1-1.png" /></div>
                        <div className="col-8 col-sm-8 col-md-12 col-lg-8 col-xl-9 nine"><p>Термолидер</p></div>
                       </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="row kube text-center">
                        <div className="col-12 col-md-6 kube1"><p>успешно работаем<br/><span>{year}</span><br/> лет</p></div>
                        <div className="col-12 col-md-6 kube2"><p>продали <br/><span>1 000 000+</span><br/> секций радиаторов</p></div>
                         <div className="col-12 col-md-6 "><p>заключили <br/><span>10 000+</span><br/> сделок</p></div>
                        <div className="col-12 col-md-6 kube3"><p>создали <br/><span>4</span><br/> торговые марки</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NineYer;