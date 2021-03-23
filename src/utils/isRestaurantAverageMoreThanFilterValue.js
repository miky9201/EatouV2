import { restaurantStarsAverage } from "./restaurantStarsAverage";

export const isRestaurantAverageMoreThanFilterValue = (restaurant, filterValue) => {
      return (
            restaurantStarsAverage(restaurant.ratings.map((rating => rating.stars))) >= filterValue
      )
}
