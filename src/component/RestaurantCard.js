import React, { useState } from 'react';

import CommentDisplayer from './CommentDisplayer';
import CommentAdder  from "./CommentAdder";

import { restaurantStarsAverage } from '../utils/restaurantStarsAverage';


const RestaurantCard = ({ restaurant }) => {

      const [ showComment, setShowComment ] = useState(false);
      const [ showCommentEditor, setShowCommentEditor ] = useState(false);

      const hasComments = restaurant.ratings.find(
            comment => comment.comment === null || comment.comment === undefined
      )

      return(
                  <div key={restaurant.id} className="card">
                        <img id="imgRestaurant" src={restaurant.streetview} alt={restaurant.restaurantName}/>
                        <h2 className="mb-5">{restaurant.restaurantName}</h2>
                        <p>{restaurant.address}<br/><br/>
                              <strong>Note :</strong> {restaurantStarsAverage(restaurant.ratings.map((item => item.stars)))}/5
                        </p>
                        <div className="darkgrey comment-displayer">
                              {showComment && restaurant.ratings.map((item, i) =>
                                    item.comment !== null && <CommentDisplayer key={i} comment={item.comment} />
                              )}
                        </div>
                        <div className="button-container flex-col-spacearound-center">
                              {
                                    hasComments ? null : (
                                          <button 
                                                className="display-comment-button mb-15" 
                                                onClick={() => setShowComment(!showComment)}
                                          >
                                                {!showComment ? 'Afficher les Commentaires' :  'Cacher les Commentaires'}
                                          </button>            
                                    )
                              }
                              
                              
                              {!showCommentEditor &&
                                    <button className="add-comment-button mb-15" onClick={() => setShowCommentEditor(!showCommentEditor)}>
                                          Ajouter un Commentaire
                                    </button>
                              }
                        </div>
                        {showCommentEditor && 
                              <CommentAdder restaurant={restaurant} showCommentEditor={showCommentEditor} setShowCommentEditor={setShowCommentEditor}/>
                        }    
                  </div>
      )
}

export default RestaurantCard;
