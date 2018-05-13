import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/theme/styles.css';

/**
 * @render react
 * @name Interests
 * @description Interests description
 * @example
 * <Interests  
    list={['Cycling', 'Technologies', 'Reading']}
  />
 */
export default class Interests extends Component {
  renderListItem(item) {
    return (
      <li>
        {item}
      </li>
    );
  }
  render() {
    return (
      <div className="languages-container container-block">
        <h2 className="container-block-title">{this.props.title || 'Interests'}</h2>
        <ul className="list-unstyled interests-list">
          {this.props.list.map((item) => {
            return this.renderListItem(item);
          })}
        </ul>
      </div>
    );
  }
}

Interests.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};

