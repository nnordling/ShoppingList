import React, {Component} from 'react';

import {connect} from 'react-redux'

import {getItems, deleteItem, addItem} from "../actions/itemActions";

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import PropTypes from 'prop-types'

class ShoppingList extends Component {

  onDelete = (id) => {
    this.props.deleteItem(id);
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shoppingList">
            {items.map(({id, name}) => (
            <CSSTransition key={id} timeout={500} classNames={"fade"}>
              <ListGroupItem>
                <Button className="remove-btn" color="danger" size="sm"
                onClick={this.onDelete.bind(this, id)}>
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ShoppingList);