import React from 'react'

const GoodsBlok = ({state, infogood}) => {
    const {newsarr} = state;
    //console.log(newsarr)
    const elements = newsarr.map(({...er}) => {
        let classActive = ""
        if (er.important){
            classActive = 'active'
        }
            return (
                <li key={er.id}
                    className={classActive}
                    onClick={() => infogood(er.id)}>
                    <img className="mini-goods" src={`/img/slider/00${er.id}.png`} alt={er.name}/>
                    {er.name}
                </li>
            )
        }
    );
    return (
        <div>{elements}</div>
    )

};

export default GoodsBlok;