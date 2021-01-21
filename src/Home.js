
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import img from './images/smvec.jpg';

import './Home.css';


const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div class="container">

           <div class="row">
      <div class="col-lg-2">
        
      </div>
      <div class="col-lg-7">
        
       <img src={img}  height="350px" width="700px"/>

        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More about Smvec</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
            Sri Manakula Vinayagar Educational Trust was formed with the avowed objective of imparting quality technical education, especially to the weaker sections of the society. To cherish this objective and to join hands with the policy of the Government of Puducherry in enhancing technical education and also to meet the needs of our Nation, the Trust established Sri Manakula Vinayagar Engineering College (SMVEC) in the year 1999.
            </CardBody>
          </Card>
        </Collapse>
        </div>
     
      
      </div>
      <div class="col-lg-3">
      
      </div>
      </div>
    );
  }
export default Home;