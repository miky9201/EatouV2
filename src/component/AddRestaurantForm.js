import React, { useState, useContext } from 'react';

import { StarsContext } from '../context/StarsContext'
import { CommentContext } from '../context/CommentContext';
import { ClickedLatLngContext } from '../context/ClickedLatLngContext';
import { RestaurantListContext } from '../context/RestaurantListContext';

import Form from './Form/Form';
import TextArea from './Form/TextArea';
import Select from './Form/Select';
import Button from './Form/Button';
import Option from './Form/Option';

import { restaurantBuilder } from '../utils/restaurantBuilder';

const FORM_OPTIONS = [
      <Option key={0} value={0} label="0 étoiles" />,
      <Option key={1} value={1} label="1 étoiles" />,
      <Option key={2} value={2} label="2 étoiles" />,
      <Option key={3} value={3} label="3 étoiles" />,
      <Option key={4} value={4} label="4 étoiles" />,
      <Option key={5} value={5} label="5 étoiles" />,
]

const AddRestaurantForm =({ toggle }) => {

      const [ starValue, setStarValue ] = useContext(StarsContext);
      const [ commentValue, setCommentValue ] = useContext(CommentContext);
      const [clickedLatLng] = useContext(ClickedLatLngContext);
      const [ restaurantList, setRestaurantList ] = useContext(RestaurantListContext);

      const [ titleValue, setTitleValue ] = useState("");

      const handleTitleChange = (e) => setTitleValue(e.target.value);
      const handleCommentChange = (e) => setCommentValue(e.target.value);
      const handleStarChange = (e) => setStarValue(e.target.value);

      const addNewRestaurant = async (title, comment, star) => {

            if (title) {
                  const restaurants = Array.from(restaurantList);
                  const id = restaurants.length + 1;
                  const location = {
                        lat: clickedLatLng.lat,
                        lng: clickedLatLng.lng
                  };

                  const restaurant = await restaurantBuilder(id, title, location.lat, location.lng, star, comment)

                  restaurants.push(restaurant)

                  setRestaurantList(restaurants)

            } else {
                  alert('Merci de donner un titre à votre restaurant !')
            }      
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            toggle();
            addNewRestaurant(titleValue, commentValue, starValue);
            setCommentValue();
            setStarValue(0);
      }

      return (
            <Form onSubmit={handleSubmit} className="modal-form comment-adder flex-col-spacearound-center yellow">
                  <TextArea onChange={handleTitleChange} class="mb-5" name="title" labelValue={"Nom du restaurant"} />
                  <TextArea onChange={handleCommentChange} class="mb-5" name="comment" labelValue={"Ajouter un commentaire"}/>
                  <Select value={starValue} onChange={handleStarChange} class="mb-5" name="star"options={FORM_OPTIONS}/>
                  <Button className="display-comment-button" name="submit" value="Soumettre"/>
            </Form>
      )
}

export default AddRestaurantForm;