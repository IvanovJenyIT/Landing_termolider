import React, {Component} from 'react';



export default class Forma extends Component {
    state = {
        name:'',
        data:'',
        value:''
    };

    onChangeRowN =(e)=>{
        this.setState({name: e.target.value});
    };

    onChangeRowD =(e)=>{
        this.setState({data: e.target.value});
    };

    onChangeRowV =(e)=>{
        this.setState({value: e.target.value});
    };

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.addrow(this.state.name, this.state.data, this.state.value);
        this.setState({
            name:'',
            data:'',
            value:''});

    };

    render() {
        return (
            <div className='forma'>
                <h3 className='text-firstList'>Закажите звонок и узнайте больше!</h3>
                <h3 className='text-foyou'>Закажите сейчас и получите скидку </h3>
                <h3 className='text-foto'>Закажите сейчас <br/>и мы подберем правильный вариант для вашего дома!</h3>
                    <form
                      onSubmit={this.onSubmit}>
                    <input type='text'
                           onChange={this.onChangeRowN}
                           placeholder='ваше имя'
                           value={this.state.name}/>
                    <input type='text'
                           pattern="[0-9]{1,2}.[0-9]{1,2}.[0-9]{4}"
                           onChange={this.onChangeRowD}
                           placeholder="ваш телефон"
                           value={this.state.data}
                    />
                   <button
                        className="btn btn-light">
                        Заказать звонок
                    </button>
                </form>
            </div>
        )
    }
}