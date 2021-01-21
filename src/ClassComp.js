import React from 'react';
import FunctionComp from './FunctionComp';
import './ClassComp.css';
import ClassComp2 from './ClassComp2';
class ClassComp extends React.Component{
   
    constructor(props)
    {
        super(props);
        this.state={
            value: 1,
            emp:{
                name:"Srishyamala",
                sap:"51888503",
                company:"HCL",
            }
        }
        
       
    }
    valueinc=()=>{
        this.setState({value:this.state.value+1})
    }
    
    
    
    render()
    {
        console.log("normal component ")
       
        
        return(
            <div class="class1">
                <p>normal component value {this.props.days}</p>
                <h1>Inside Class Component with condition </h1>
                
                <p>value:{this.state.value}</p>
                <button class="btn btn-primary" onClick={()=>this.valueinc()}>add </button>
                <ClassComp2 course="React" and days={30}
                arrayProps={()=>[10,20,30,40]}
                htmlelement={()=><h6>html props</h6>}
                functionProps={()=> <FunctionComp/>}
                objelement={this.state.emp}/>


                
                </div>
        )
    }
}
export default ClassComp;