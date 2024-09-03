import React, { useState } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function UseStateHook(){
    const [item,setItem] = useState([{
            id:1,
            
            name:"State of mind watch",
            price:1960,
            description:"The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
            category:"Watches",
        },
        {
            id:2,
            name:"Nike red Shoes",
            price:1360,
            description:"Nike red Shoes is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            category:"Shoes",
        },
        {
            id:3,
            
            name:"JBL Black Headphone",
            price:880,
            description:"JBL Black Headphone is lorem There are many variations of passages of Lorem Ipsum available.",
            category:"Electronics",
        },
        {
            id:4,
            
            name:"RB Black Glass",
            price:533,
            description:"RB Black Glass is lorem There are many variations of passages of Lorem Ipsum available, if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            category:"Glasses",
        },
        {
            id:5,
            
            name:"Apple MacBook Pro laptop",
            price:19600,
            description:"Apple MacBook Pro laptop is lorem if you are going to use a passage of Lorem Ipsum, but the majority have suffered alteration in some form you need to be sure there isn't anything.",
            category:"Electronics",
        }
        ])
        const addItem =()=>{
            setItem([...item,
                {
                    id: item.length+1,
                    name:"samsung",
                    price: Math.floor(Math.random()*10)+1000,
                    description:"Product description",
                    category:"Electronics",
                }
            ]

            )
            console.log(item);
        }



    return(
        <div >
            <img src="../LoginSignup/imgs/agency-1.jpg" alt="" />
            <button onClick={addItem} className="btn btn-primary m-y">Add Product</button>
            <ul key={item.id} className="list-group list-group-flush">

                {
                    item.map((item,index)=>(
                        <div>
                            <li className="list-group-item">
                                {item.name}
                            </li>
                            <li className="list-group-item">
                                {item.price}
                            </li>
                            <li className="list-group-item">
                                {item.description}
                            </li>
                            <li className="list-group-item">
                                {item.category}
                            </li>
                        </div>
                        
                        

                    )

                    )
                }
            </ul>
        </div>
    )
}
export default UseStateHook;