import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Books extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        filter: "",
        data: [
          {
            fname: "John",
            lname: "Bunyan",
            email: "The Pilgrim's Process",
            gender: "female"
          },
          {
            fname: "Daniel ",
            lname: "Defoe",
            email: "Robinson Crusoe",
            gender: "male"
          },
          {
            fname: "Jonathan",
            lname: "Swift",
            email: "Gulliver’s Travels",
            gender: "male"
          },
          {
            fname: " Henry",
            lname: "Fielding",
            email: "Fielding",
            gender: "male"
          },
          {
            fname: "Laurence",
            lname: "Sterne",
            email: "The Life and Opinions of Tristram Shandy, Gentleman ",
            gender: "male"
          },
          {
            fname: "Jane",
            lname: "Austen",
            email: "Emma",
            gender: "male"
          },
          {
            fname: "Charlotte ",
            lname: "Brontë",
            email: "Jane Eyre ",
            gender: "male"
          },
          {
            fname: "Wilkie",
            lname: "Collins",
            email: "The Moonstone",
            gender: "male"
          },
          {
            fname: "George",
            lname: "Eliot",
            email: "Middlemarch ",
            gender: "male"
          },
          {
            fname: "Anthony",
            lname: "Trollope",
            email: "The Way We Live Now ",
            gender: "male"
          },
          {
            fname: "George",
            lname: "Gissing ",
            email: "New Grub Street",
            gender: "male"
          }
        
        ]
      };
    
      handleChange = event => {
        this.setState({ filter: event.target.value });
      };
    
      render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
          );
        });
    
        return (
          <div>
            <input value={filter} onChange={this.handleChange} />
            {filteredData.map(item => (
              <div key={item.email}>
                <div>
                  {item.fname} {item.lname} - {item.gender} - {item.email}
                </div>
              </div>
            ))}
          </div>
        );

   
    }
}


export default Books;