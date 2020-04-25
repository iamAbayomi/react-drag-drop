import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {  
    state = {           
         tasks: [
             {name:"Learn Angular",      
              category:"wip",          
              bgcolor: "yellow"},  
            
              {name:"React",   category:"wip",   bgcolor:"pink"},   
                 {name:"Vue",    category:"complete",   bgcolor:"skyblue"}          
                    
                ]}

    render () {    
        
        var tasks = {
                wip: [],
                complete :[]
        }

        this.state.tasks.forEach((t) =>{
                tasks[t.category].push(
                    <div key={t.name} 
                        draggable
                        className="draggable"
                        style={{backgroundColor: t.bgcolor}}
                    >
                        {t.name}
                    </div>

                );
       

        });

        return (     
            <div style={{'textAlign' : 'center'} } className="container-drag">    
                  
                  DRAG & DROP DEMO

             </div> 
          
        );
        
    }}


    ReactDOM.render(<AppDragDropDemo />,     document.getElementById("root"));
