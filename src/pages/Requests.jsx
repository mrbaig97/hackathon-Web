import React from 'react'
import '../styles/Request.css'
import User from '../images/kishan.jpg' 
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'

class Requests extends React.Component {
    constructor(){
        super();
        this.state = {
            list: data,
            id:'',
            newList:[],
            price:'',
            name:[],
            total:0,
            quantity:0,
            clickable: false
        };
    }

    componentWillMount(){
        const hotel = this.props.history.location.pathname.slice(7)
        const List = this.state.list.filter(function (rec) { return rec.name === hotel})
        this.setState({
            id:hotel,
            newList: List
        })
    }

    childHandler = (ChildPrice,ChildName,ChildQuantity) => {
        const names = this.state.name; 
        names.push(ChildName);
        this.setState(
            {price: ChildPrice,
            name: names,
            quantity : ChildQuantity+1,
            clickable: true }
        )};

    incrementQuantity = (incQuan) => {
        this.setState(
            {
                quantity: incQuan+1
                
            }
        )
    };

    decrementQuantity = (decQuan) => {
        if(this.state.quantity>=1){
            this.setState(
                {
                    quantity: decQuan-1
                    
                }
            )
        }
        
    };

    total = (p,q) => {
        this.setState(
            {
                total:p*q
            }
        )
    }
   

    render(){
        return(
        <div>
            <div className="nav">
                <div id="logo">
                    <h2>FOOD DONATION</h2>
                </div>

                <div id="user">
                    <div className="name">Hello, Faraz</div>
                 
                </div>
            
                
            </div>

            <div id="content">
               
                <div id="panel">
                    <div id="logo">               
                    </div> 
                    <div id="right">
                        <div id= "right-in">
                            <h4>My Requests</h4>
                                
                            { this.state.clickable && 
                                <div>
                                    <MyCart 
                                        name={this.state.name}
                                        price={this.state.price}
                                        quantity={this.state.quantity} 
                                        increment={this.incrementQuantity} 
                                        decrement={this.decrementQuantity}>
                                    </MyCart>
                                </div>
                            }
    
                            <div id="total">
                              
                                <button id="pay1"
                                onClick = {() => this.total(this.state.price,this.state.quantity)} >REQUESTS</button>
                                <br/>
                                {/* <input id="pay1" type="button" value="Pay Now"/> */}
                            </div>
                        </div>                
                    </div>
                </div>

            </div>
        </div>
        )
    };
}

export default Requests;