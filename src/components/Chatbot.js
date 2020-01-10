import React, { Component } from 'react'
import { connect } from "react-redux";
import { sendMessage } from "../Chat";
class Chatbot extends Component {
    render() {
        const { feed, sendMessage } = this.props;
        console.log(feed[0].text);
    return (
      <div className="App">
        <h1>Hello Bot!</h1>
        <ul>
          {feed.map(entry => (
            <li>{entry.sender} : {entry.text}</li>
          ))}
        </ul>
        <input
          type="text"
          
          onKeyDown={e =>
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }

        ></input>
      </div>
    );
    }
}


const mapStateToProps = state => ({
    feed: state
  });
  
  export default connect(
    mapStateToProps,
    { sendMessage }
  )(Chatbot);
  