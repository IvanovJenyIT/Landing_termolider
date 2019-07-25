import React, {Component} from 'react';
import Logo from "./components/logo";
import Menu from "./components/menu";
import FirstList from './components/firstList';
import UTP from './components/utp';
import FoYou from './components/foyou';
import NineYer from './components/nineyer';
import Goods from './components/goods';
import Foto from './components/foto';
import Aboute from './components/aboute';
import Maps from './components/maps';
import Copirait from './components/copirait';

import './style.css'


export default class  App extends Component {

       render() {
                return (<div>
                <Logo/>
                <Menu/>
                <FirstList/>
                <UTP
                id='utp'
                />
                <FoYou
                    id='foyou'
                />
                <NineYer/>
                <Goods
                    id='goods'
                />
                <Foto/>
                <Aboute
                    id='aboute'
                />
                <Maps/>
                <Copirait/>
            </div>
        )
    }
}