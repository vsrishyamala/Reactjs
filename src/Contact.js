import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <div>
                <address>
Written by <a href="mailto:webmaster@example.com">Sri Shyamala</a>.<br></br>
No 1,Anna nagar<br></br>
Chennai<br></br>
600028<br></br>
India
</address>

            </div>
        );
    }
}



export default Contact;