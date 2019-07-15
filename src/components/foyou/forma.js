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
                <h3>Узнайте больше</h3>
                    <form
                      onSubmit={this.onSubmit}>
                    <input type='text'
                           onChange={this.onChangeRowN}
                           placeholder='введите ваше имя'
                           value={this.state.name}/>
                    <input type='text'
                           pattern="[0-9]{1,2}.[0-9]{1,2}.[0-9]{4}"
                           onChange={this.onChangeRowD}
                           placeholder="введите ваш телефон"
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