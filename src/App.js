/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
//import logo from './logo.svg';
import logo from './logo.png';
import './App.css';

/* Functional component
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' />
        <p> Learn React With LCO Crash Course - BY Hitesh Chowdhary</p>
      </header>
    </div>
  );
}

*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list, newItem];
      this.setState({
        list,
        newItem: '',
      });
    }
  }

  deleteItem(todoId) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== todoId);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  updateIsDone(item) {
    item.isDone = !item.isDone;
    const list = [...this.state.list];
    this.setState({
      list,
    });
  }

  render() {
    const { newItem, list } = this.state;
    return (
      <div className='App'>
        <img src={logo} width='100' height='100' className='logo' alt='logo' />
        <h1 className='app-title'>LCO - ToDo App</h1>
        <div className='container'>
          Add an Item...
          <br />
          <input
            type='text'
            className='input-text'
            placeholder='Write a ToDo'
            required
            value={newItem}
            onChange={({ target: { value } }) => this.updateInput(value)}
          />
          <button
            className='add-btn'
            onClick={() => this.addItem(newItem)}
            disabled={!newItem.length}
          >
            Add ToDo
          </button>
          <div className='list'>
            <ul className='ul'>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type='checkbox'
                      name=''
                      id=''
                      checked={item.isDone}
                      onChange={() => {
                        this.updateIsDone(item);
                      }}
                    />
                    {item.value}
                    <button
                      className='delete-btn'
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
