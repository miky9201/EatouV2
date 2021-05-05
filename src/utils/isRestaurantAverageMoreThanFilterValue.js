import { restaurantStarsAverage } from "./restaurantStarsAverage";

export const isRestaurantAverageMoreThanFilterValue = (restaurant, filterValue) => 
restaurantStarsAverage(restaurant.ratings.map((rating => rating.stars))) >= filterValue
