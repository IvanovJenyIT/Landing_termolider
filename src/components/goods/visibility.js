import React from 'react'

const VisibilityBlok = ({state}) => {
    const {goods, visibiliti} = state;
    let visibilitiGood = goods.filter((el)=> el.id === visibiliti)
    const name = visibilitiGood[0].name;
    const desc = visibilitiGood[0].description();
    const img = visibilitiGood[0].id;

         return(
           <div>
               <img  src={`/img/slider/00${img}.png`} alt={name}/>
               <p className='title'>{name}</p>
               <p>{desc}</p>
               <p className='text-center'><button
                   className="btn btn-light">
                   Уточнить цену и наличие
           </button></p>


           </div>
    )
}

export default VisibilityBlok;