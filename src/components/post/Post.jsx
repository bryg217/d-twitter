import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'

import './Post.css';

/**
 * UI Component for post
 */
export default function Post({
  imageUrl,
  numLikes,
  postLiked,
  text,
  userImageUrl,
  username,
}) {
  return (
    <div className="post">
      <div className="post-content-container">
        <div className="post-profile-image-container">
          <img alt="post profile image" className="post-profile-image" src={userImageUrl}/>
        </div>
        <div className="post-username-and-content-container">
          <div className="post-username">{username}</div>
          <div className="post-content-container">
            {text ? <div className="post-text">{text}</div> : null}
            {imageUrl ? <div className="post-image"><img alt="post image" className="post-image" src={imageUrl}/></div> : null}
          </div>
        </div>
      </div>
      <div className="post-like-button-container">
        <IconContext.Provider value={{ size: '2rem', color: 'red' }}>
          {postLiked ? <IoHeartSharp className="post-like-button"/> : <IoHeartOutline className="post-like-button"/>}
        </IconContext.Provider>
        <div className="post-num-likes">{numLikes}</div>
      </div>
    </div>
  )
}

Post.propTypes = {
  imageUrl: PropTypes.string,
  numLikes: PropTypes.number,
  text: PropTypes.string,
  userImageUrl: PropTypes.string,
  username: PropTypes.string
};