import React from 'react';

const Aboute = () => {
    return (
        <div  className="container aboute">
           <p className='text-blu text-center'>Контакты</p>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>Termolider&raquo; &mdash; это ведущий Поставщик систем отопления и прочего водопроводного оборудования, который осуществляет свою деятельность в Республике Беларусь с 2010 года.</p>
                    <p>&laquo;Termolider&raquo; с радостью ответит на все ваши вопросы. Позвоните нам, чтобы больше узнать о предлагаемых товарах и услугах.</p></div>
                <div className="col-12 col-md-6">
                    <p><img alt="Термoлидер" src="/img/logo1-1.png" className="logo-img-minin"/>  Компания ТЕРМОЛИДЕР</p>
                    <p><i className="fa fa-map-marker fa-lg"></i> п. 16д, Ulitsa Mirutka, Sienica 223056, Belarus</p>
                    <p><i className="fa fa-envelope fa-lg"></i> e-mail: 6484850@gmail.com</p>
                    <p><i className="fa fa-phone fa-lg"></i> тел. 8 029 648-48-50</p>
                </div>
            </div>

        </div>
    )
}

export  default Aboute;