import React, {Component} from 'react';
import FullList from "./FullItem"
import "./App.css"

class App extends Component {

    state = {
        List: this.props.list
    };
    ListSearch=(e)=>{
       this.UpdateList(this.refs.inputSearch.value)
    };
    UpdateList=(value)=>{
        let newList=this.props.list.filter( (item)=>item.name.toLowerCase().includes(value.toLowerCase()));
        this.setState({
            List:newList
        })
    };
    render() {
        let arr;
        arr = this.state.List.map((item, index) =>
            <FullList key={index}
                      item={item}
            />
        );
        return (
            <div className="mainDiv">
                <div className="NameAutor">By Nikita Donskoy</div>
                <input type="text" onChange={this.ListSearch}placeholder="Search items..." size="30" ref="inputSearch" className="ListSearch"/>
                <ul className="ulList">{arr}</ul>
            </div>

        )
    }


}


export default App;
