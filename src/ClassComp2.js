import React from 'react';

class ClassComp2 extends React.Component{
   
    constructor(props)
    {
        super(props);
        this.state={
             value:this.props.arrayProps()
            
        }
    }
   
    arrayClick=() => {
        const {value}=this.state;
        alert("Button clicked"); 
        value.push(100);
        value.push(200);
        for(const array of value)
        {
            console.log(array);
        }  
       
       const slic=value.slice(1,3)
       
       console.log("after slice",slic);

       const popp= value.pop()
       console.log("popped element",popp)
    }
    render()
    {
        const arr=this.props.arrayProps();
        const item=[];
        const obj=this.props.objelement
        console.log("object  props",obj)
       
        for(const val in arr)
        {
            item.push(<li key={val}>{arr[val]}</li>);
        }
        return(
            <React.StrictMode>

                <h5>Course name is {this.props.course}</h5>
                 <h5>duration {this.props.days}</h5>
                 <button class="btn btn-secondary" onClick={this.arrayClick}>click</button>
                 <p>array props</p>
                 <ul>
                     {item}
                 </ul>
                 {this.props.htmlelement()}
                 {this.props.functionProps()}

                </React.StrictMode>
        )
    }
}
export default ClassComp2;