import React, { useState } from 'react';
import '../App.css';

import CommentDisplayer from './CommentDisplayer';
import CommentAdder  from "./CommentAdder";

import { restaurantStarsAverage } from '../utils/restaurantStarsAverage'



const RestaurantCard = ({restaurant}) => {

      const [showComment, setShowComment] = useState(false);
      const [showCommentEditor, setShowCommentEditor] = useState(false);

      return(
            <>
                  <div key={restaurant.id} className="card">
                        <img id="imgRestaurant" src={restaurant.streetview} alt="restaurant"/>
                        <h2 className="mb-5">{restaurant.restaurantName}</h2>
                        <p>{restaurant.address}<br/><br/>
                              <strong>Note :</strong> {restaurantStarsAverage(restaurant.ratings.map((item =>  item.stars)))}/5
                        </p>
                        <div className="darkgrey comment-displayer">
                              {showComment && restaurant.ratings.map((item, i) => 
                                    <CommentDisplayer key={i} comment={item.comment} />
                              )}
                        </div>
                        <div className="button-container flex-col-spacearound-center">
                              <button className="display-comment-button mb-15" onClick={() => setShowComment(!showComment)}>

                                    {!showComment ? 'Afficher les Commentaires' :  'Cacher les Commentaires'}

                              </button>
                              <button className="add-comment-button mb-15" onClick={() => setShowCommentEditor(!showCommentEditor)}>

                                    {!showCommentEditor ? 'Ajouter un Commentaire' :  'X'}

                              </button>
                        </div>
                        {showCommentEditor && 
                              <CommentAdder restaurant={restaurant} showCommentEditor={showCommentEditor} setShowCommentEditor={setShowCommentEditor}/>
                        }    
                  </div>
            </>
      )
}

export default RestaurantCard;
