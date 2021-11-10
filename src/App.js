import { Component } from 'react';
import './css//bootstrap.min.css';
import './App.css';
import Home from './views/home/home';

function Message(props){
    return<p>Hello {props.name}</p>
}

class App extends Component{
    render(){
        return(
            <div>
                <Message name="Ulrich" />
                <Home name= "Eden Hazard"/>
            </div>
        )
    }

}




// *Latihan 5.1
// function sayHello(){
//     return "Hello World"
// }


// class App extends Component{

//     bilangHalo(){
//         return "Halo Dunia"
//     }

//     render(){
//         return(
//             <>
//             <p>sayHello : <b>{sayHello()}</b></p>
//             <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//             </>
//         )
//     }
// }



export default App;
