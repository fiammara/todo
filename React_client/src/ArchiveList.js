import React, { Component } from 'react';
import axios from 'axios';
import ArchiveItem from './ArchiveItem';

class ArchiveList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archived: [
        {
          id: '',
          name: ''
        }
      ]
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://localhost:8080/api/archive').then((response) => {
      this.setState({
        archived: response.data
      });
    });
  }

  render() {
    const { archived } = this.state;
    return (
      <div className="archiveList">
        <p> Archive list </p>
        <table className="table">
          <tbody>
            {archived.map((post, index) => (
              <ArchiveItem 
                name={post.name} 
                key={post.id} 
                arrayId={index} 
              />
            ))}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default ArchiveList;
