import { Component } from 'react';
import './css//bootstrap.min.css';
import './App.css';
import Home from './views/home/home';

function Message(){
    return<p>Hello from Message Component</p>
}

class App extends Component{
    render(){
        return(
            <div>
                <Message />
                <Home />
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
