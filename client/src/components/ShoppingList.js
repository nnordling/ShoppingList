import React, {Component} from 'react';

import {connect} from 'react-redux'

import {getItems, deleteItem, addItem} from "../actions/itemActions";

import { ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes, faCheck, faCamera);

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconId: []
    };

    this.checkedIcon = "times";
    this.unCheckedIcon = "check";
  }

  onDelete = (id) => {
    document.getElementById(id).classList.add("checkedItem");
    if (!this.state.iconId.includes(id, 0)) {
      this.setState({
        iconId: this.state.iconId.concat(id)
      });
    } else {
      this.props.deleteItem(id);
    }
    console.log(this.state.iconId)
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="flexItem">
        <ListGroup>
          <TransitionGroup className="shoppingList">
            {items.map(({id, name}) => (
            <CSSTransition key={id} timeout={500} classNames={"fade"}>
              <ListGroupItem id={id}>
                  <FontAwesomeIcon icon={this.state.iconId.includes(id, 0) ? this.checkedIcon : this.unCheckedIcon} color="#406d96" className={"removeItem"} onClick={this.onDelete.bind(this, id)}/>
                {name}
              </ListGroupItem>
            </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ShoppingList);