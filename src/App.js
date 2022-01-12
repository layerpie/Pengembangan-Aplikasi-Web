import React, { Component } from 'react';
import './css//bootstrap.min.css';
import './App.css';
import Card from './component/Card/Card';
import Input from './component/Input/Input';

export default class Main extends Component{
    constructor(){
        super();
        this.state={
            your_name : ' ',
            status : ' '
        }
    }
    render(){
        return(
            <React.Fragment>
                <h2 style={{width: '550px', margin: 'auto', textAlign: 'center', color: '#4d90fe'}}></h2>
                <Input getValues={(name, value)=> this.setState({[name]: value})} />

                <Card.Container>
                    <Card.Header>{this.state.your_name}</Card.Header>
                    <Card.Body>
                        <p>{this.state.your_name}</p>
                    </Card.Body>
                </Card.Container>
            </React.Fragment>
        );
    }
}







// * Latihan 5.6
// class App extends Component{
//     constructor(){
//         super();
//         //inisial state view
//         this.state = {
//             view : 'home'
//         }
//     }
//     render() {
//         //functional component view untuk mengatur component yang tampil
//         const View = ()=>{
//             if(this.state.view=='home')
//             return <Home name="Eden Hazard" />
//             else if (this.state.view=='about')
//             return <About />
//             else if(this.state.view=='help')
//             return <Help />
//         }
//         return(
//             <div>
//                 <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <a onClick={()=> this.setState({view : 'home'})}className="nav-link" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a onClick={()=> this.setState({view : 'about'})}className="nav-link" href="#">About</a>
//                         </li>
//                         <li className="nav-item">
//                             <a onClick={()=> this.setState({view : 'help'})}className="nav-link" href="#">Help</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <View />{/* panggil component View */}
//             </div>
//         )
//     }
// }



// * latihan 5.5    
//     render(){
//         return(
//             <div>
//                 <Message name="Ulrich" />
//                 <Home name= "Eden Hazard"/>
//             </div>
//         )
//     }

// }




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




