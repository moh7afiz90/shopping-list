import React, {Component} from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import uuid from 'uuid';

import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';
import PropTypes from 'prop-types';

 class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id)
  }
  
  render() {
    const { item } = this.props.item;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
              this.setState(state => ({
                items: [...state.items, {id: uuid(), name}]
              }))
            }
          }}
        >Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="Shopping-list">
            {item.map(({ _id, name}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

ShoppingList.prototypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getItems})(ShoppingList);
