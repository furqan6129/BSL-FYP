
import React from 'react';
import GameOver from "./GameOver.js"

var end=false;


export default class CountDown extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            count: props.duration ? props.duration : 5, end:false,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count - 1
            })
        }, 1000)
    }




    // updateEnd(){
    //     this.setState({end: true })
        

        
    // }



    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("Score from Countdown is:"+this.props.score)

        // if (this.state.count===0){
        //     //this.updateEnd()
        //     window.location="/GameOver";
        // }

        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);

        }
    }


    
    // demoMethod(){
    //     this.props.sendData(this.state.count);

    // }

    fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }


    render() {
        //this.demoMethod();
   
        let { count } = this.state;
        if (end===true){

            return (<GameOver score={this.props.score}
            />
            )

        }



        return (
            <>
                {this.fmtMSS(count)}
            </>
        )
    }
}