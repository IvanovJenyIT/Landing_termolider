import React, {Component} from 'react'

export default class ImageRandom extends Component{
    state = {
        id: null,
        src: null,
        mouse:false
    };

    getsrc = () =>{
        let id = Math.floor(Math.random()*5 + 1);

       const src = `/img/slider/00${id}.png`;
        this.setState({id, src });
    };

    componentDidMount(){
        this.getsrc();
        this.onInterval();
    };

    onInterval = () =>{
        // if (this.state.mouse === false){

        this.interval = setInterval(this.getsrc, 2000);
        // }
    }

    componentDidUpdate (prevState){
        if (this.state.mouse !== prevState.mouse){
            this.onClearInterval();

            }
    }

    onClearInterval = () => {
        if (this.state.mouse !== false){
            clearInterval(this.interval);
            this.interval = null;
        }
    };

    mouseOver = () => {
        this.setState({mouse:true})

    };

    mouseOut = () => {
        this.setState({mouse:false});
        this.onInterval();
    };

    render () {
        const { src} = this.state;

        return (<div className="img-blok">
                <img  src= {src} alt="фото радиатора"
                      onMouseOver={this.mouseOver}
                      onMouseOut={this.mouseOut}
                />
            </div>
        )
    }

}