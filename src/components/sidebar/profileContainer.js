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
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185, borderRadius: '50%' }} />);
    }
    return null;
  }
  render() {
    return (
      <div className="profile-container" style={{ padding: '30px',textAlign: 'center', backgroundColor: '#328699', color: '#fff', maxWidth: '267px'}}>
        {this.renderProfilePicture(this.props.imagePath)}
        <h1 className="name" style={{ fontSize: 25 }}>{ this.props.name }</h1>
        <h3 className="tagline" style={{color:'#F5F5F5', fontWeight: 400, fontSize: "16px"}}> { this.props.title } 
         </h3>
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
