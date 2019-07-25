import React from 'react';

const NineYer = () => {
    return(
        <div  className="container nineyer-blok">
            <p className='text-blu text-center'>Почему выбирают нас</p>
                <div className="row nineyer">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-4 text-right"><img alt="Термoлидер" src="/img/logo1-2.png" /></div>
                        <div className="col-4 text-right nine"><p>9</p></div>
                        <div className="col-4 text-left nine-text"><p><span>лет</span><br/>успешной <br/>работы</p></div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="row kube text-center">
                        <div className="col-12 col-md-6 kube1"><p>продали <br/><span>1 000 000+</span><br/> секций радиаторов</p></div>
                        <div className="col-12 col-md-6 kube2"><p>создали <br/><span>4</span><br/> торговые марки</p></div>
                        <div className="col-12 col-md-6 kube3"><p>создали <br/><span>4 </span><br/>торговые марки</p></div>
                        <div className="col-12 col-md-6 "><p>заключили <br/><span>10 000+</span><br/> сделок</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NineYer;