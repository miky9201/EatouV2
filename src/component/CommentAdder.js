import React, { useContext } from 'react';
import { CommentContext } from '../CommentContext/CommentContext';
import { StarsContext } from '../StarsContext/StarsContext';

import Form from './Form/Form';
import TextArea from './Form/TextArea';
import Select from './Form/Select';
import Button from './Form/Button';
import Option from './Form/Option';

const FORM_OPTIONS = [
      <Option key={0} value={0} label="0 étoiles" />,
      <Option key={1} value={1} label="1 étoiles" />,
      <Option key={2} value={2} label="2 étoiles" />,
      <Option key={3} value={3} label="3 étoiles" />,
      <Option key={4} value={4} label="4 étoiles" />,
      <Option key={5} value={5} label="5 étoiles" />,
]

const CommentAdder = ({restaurant, setShowCommentEditor}) => {

      const [ commentValue, setCommentValue ] = useContext(CommentContext);
      const [ starValue, setStarValue ] = useContext(StarsContext);

      const pushNewComment = (arr, comment, star) => {
            arr.push({
                  comment: comment,
                  stars: star
            });
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            pushNewComment(restaurant.ratings, commentValue, starValue);
            setCommentValue("");
            setShowCommentEditor(false);

      }

      const handleCommentChange = (e) => {
            setCommentValue(e.target.value);
      }

      const handleStarChange = (e) => {
            setStarValue(e.target.value);
      }

      return(
            <Form onSubmit={handleSubmit} className="comment-adder flex-col-spacearound-center yellow">
                  <TextArea onChange={handleCommentChange} className="mb-5" name="comment" labelValue={"Ajouter un commentaire"} />
                  <Select value={starValue} onChange={handleStarChange} className="mb-5" name="star" options={FORM_OPTIONS}/>
                  <Button className="display-comment-button" name="submit" value="Soumettre"/>
            </Form>
      )
}

export default CommentAdder;