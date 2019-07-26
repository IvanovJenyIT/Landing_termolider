import React from "react";

const Logo =  () =>{
   return (
    <div  className="container margin-top logo-blok">
        <div className="row align-items-center">
            <div className="col-1 text-right no-padding">
                <img alt="Термoлидер" src="/img/logo1-1.png" className="logo-img"/>
                               </div>
            <div className="col-11 col-md-7 no-padding">
                <p className='logo'>Термолидер</p>
                <p className='logo-mini'>продажа отопительных приборов с 2010 года</p>
            </div>
               <div className="col-12 col-md-4 contacty">
                   <div className="row">
                       <div className="col-12 col-sm-6 col-md-12"><p><i className="fa fa-phone fa-lg"></i>  <a  href="tel:+375296484850" rel="noopener noreferrer" target="_blank"
                                                                                                              value="+375296484850">+375 29 648 48 50</a></p></div>
                     </div>
            </div>
        </div>

   </div>
   )}

export default Logo;