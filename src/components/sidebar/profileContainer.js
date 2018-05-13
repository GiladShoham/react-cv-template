import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/theme/styles.css';

/**
 * @render react
 * @name ProfileContainer
 * @description ProfileContainer description
 * @example
 * <ProfileContainer name="Gilad Shoham" title="Dev & Open source Leader" imagePath="https://en.gravatar.com/userimage/51779316/975a7ab5400cfac3e90be71f242241eb.jpg?size=200" />
 */
export default class ProfileContainer extends Component {
  renderProfilePicture(imagePath) {
    if (imagePath) {
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185, 'border-radius': '50%' }} />);
    }
    return null;
  }
  render() {
    return (
      <div className="profile-container">
        {this.renderProfilePicture(this.props.imagePath)}
        <h1 className="name" style={{ fontSize: 25 }}>{ this.props.name }</h1>
        <h3 className="tagline"> { this.props.title } </h3>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string
};

ProfileContainer.defaultProps = {
  imagePath: null
};
