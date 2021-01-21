import React, { Component } from 'react';
import PostData from '../data/posts.json';
class PostList extends Component {
    constructor(props) {
        super(props);

    }

    /* renderTableData() {
        return {PostData.map((postDetails, index)=>{
            const {fname, lname, book, available}= postDetails
           return (
              <tr key={fname}>
                 <td>{lname}</td>
                 <td>{book}</td>
                 <td>{</td>
                 <td>{email}</td>
              </tr>
           )
        })
    }
    
     } */

    render() {
        return (
            <div>
                 
                {PostData.map((postDetails, index)=>{
                    return <div>
                       
                       
                   <span style={{color: "red"}}>  Author:  </span>  {postDetails.fname}    {postDetails.lname}<br></br>
                   <span style={{color: "red"}}>  Book:  </span> {postDetails.book}<br></br>
                   <span style={{color: "red"}}>Available: </span>    {postDetails.available}<hr></hr>
                        
                        </div>
                })}
                
                       

            </div>
        );
    }
}



export default PostList;