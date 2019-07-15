import React from 'react';

const GoodsMini = ({state}) => {
    const {goods} = state;
    const elements = goods.map(({...er}) => {
           return (
                <div key={er.id} className="col-sm-12 col-md-6 blok">
                    <img  src={`/img/slider/00${er.id}.png`} alt={er.name}/>
                    <h3 className='text-center'>{er.name}</h3>
                    <p>{er.description}</p>
                    <p className='text-center'><button
                        className="btn btn-light">
                        Уточнить цену и наличие
                    </button></p>
                </div>
                )
        }
    );
    return (
        <div className="row">{elements}</div>
    )

};


export default GoodsMini;