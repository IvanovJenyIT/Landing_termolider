import React from 'react';
import SimpleModal from './modal'

const GoodsMini = ({state}) => {
    const {goods} = state;
    const elements = goods.map(({...er}) => {
            return (
                <div key={er.id} className="col-sm-12 col-md-6 blok">
                    <img  src={`/img/slider/00${er.id}.png`} alt={er.name}/>
                    <h3 className='text-center'>{er.name}</h3>
                     <p className='text-center'><button
                        className="btn btn-light">
                        <SimpleModal
                            props={er}
                        />
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