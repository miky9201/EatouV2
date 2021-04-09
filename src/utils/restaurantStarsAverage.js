export const restaurantStarsAverage = (arr) => {
      let starsSum = 0, index;

      for (index = 0; index < arr.length; index++) {
            starsSum += parseFloat(arr[index]);
      }

      return (starsSum/arr.length).toFixed(2);
};
