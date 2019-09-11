import React, { Component } from 'react';
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            items: [],
    }
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    }
    onInputChange(e) {
        this.setState ({
            inputValue : e.target.value,
        });
    }

    addItem() {
        let items = this.state.items;
        if(this.state.inputValue !== ''){items.push (this.state.inputValue);}
        else{alert("Please enter task!");}
        this.setState (
            {
                items
            });
            this.setState ({
                inputValue : '',
            });
    }

    editItem(e){
        const currentValue = e.target.value;
        const currentItems = this.state.items;
        const currentIndex = e.target.getAttribute('data-index');
        currentItems[currentIndex] = currentValue;
            this.setState({
            items: currentItems
        })
    }
    deleteItem(index){
        index.target.parentNode.remove();        
    }
    doneItem(index){
        console.log("task done");
        /* index.target.parentNode.removeChild(); */
    }

    listItems() {
        let items = this.state.items;
        return (
          <ul>
            {
              items.map((val, index) => {
                  return (
                  <li key={index}>
                  <label>{ val }</label>
                  <input type="text" value= { val } data-index = {index} onChange = { (e) => this.editItem(e) } />
                  <button onClick = { (index) => this.deleteItem(index) }>Remove</button>
                  <button onClick = { (index) => this.doneItem(index) } >Done</button>
                  </li>
                );
              })
            }
          </ul>
        );
      }

    render (){
        return(
            <div>
                <label>Add Task</label>
                <input type="text" onChange = { (e) => this.onInputChange(e) } value={this.state.inputValue} />
                {<button onClick = { () => this.addItem() }>ADD TASK</button>}
                {/* <button onClick = {this.state.inputValue !== '' ? () => this.addItem() : alert('blank') }>ADD TASK</button> */}
                { this.listItems() }
            </div>
        );
    }
}

export default TodoList;