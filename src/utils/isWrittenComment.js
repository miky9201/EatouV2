export const isWrittenComment = (arr, setState) => {
      const newArr = arr.map(item => {
            if(item.comment !== null) {
                  return true
            } else {
                  return false
            }
      })

      for (let index = 0; index < newArr.length; index++) {
            const element = newArr[index];
            if(element === false) {
                  setState(false)
            } else {
                  setState(true)
            }
      }
};