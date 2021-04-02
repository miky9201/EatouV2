export const restaurantStarsAverage = (arr) => {
      let arrLength = arr.length, starsSum = 0, i;

      for (i = 0; i < arrLength; i++) {
            starsSum += parseFloat(arr[i]);
      }

      return (starsSum/arrLength).toFixed(2);
};
