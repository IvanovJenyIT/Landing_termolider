import React, {Component} from 'react';
import VisibilityBlok from './visibility'
import GoodsBlok from './goodsBlok'
import GoodsMini from './goodsMini'
import termApi from '../../constanty/constanty';


import './goods.css'

export default class Goods extends Component {
    id = 1;
    state = {
        goods: termApi,
        visibiliti : '',
        newsarr: ''
    };

    // creat(name, description) {
    //     return {
    //         name,
    //         description,
    //         id: this.id++,
    //         important: false,
    //     }
    // }

    infogood = (id) => {
        this.setState(({goods}) => {
            const ind = goods.findIndex((el) => el.id === id);
            const newsel = goods[ind];
            const newslist = {...newsel, important: true};
            const arre1 = goods.slice(0, ind);
            const arre2 = goods.slice(ind + 1);
            const newsarr = [...arre1, newslist, ...arre2];
             return {
                 newsarr: newsarr,
                 visibiliti : id
            };
            });
    };

   componentWillMount(){
        this.infogood(1);
       }

    render() {

       const {items} = this.props;
       console.log(items);
            return(
            <div className="container-fluid background-blu1 goods">
                <div className="container">
                    <p className="text-whiteh1 text-center">Товары</p>
                    <div className="row goods-max">
                        <div className="col-4 goodsBlok">
                            <ul>
                                <GoodsBlok
                                    state={this.state}
                                    infogood={this.infogood}/>
                            </ul>
                        </div>
                        <div className="col-8 visibiliti">
                            <div>
                                <VisibilityBlok
                                    state={this.state}/>
                            </div>

                        </div>
                    </div>
                        <div className='goods-mini'>
                               <GoodsMini
                                   state={this.state}/>
                    </div>
                </div>
            </div>

        )
    }

};