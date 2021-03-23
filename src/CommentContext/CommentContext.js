import React, { useState, createContext } from 'react';

export const CommentContext = createContext();

export const CommentProvider = (props) => {
      const [commentValue, setCommentValue] = useState();
      return(
            <CommentContext.Provider value={[commentValue, setCommentValue]}>
                  {props.children}
            </CommentContext.Provider>
      )
}
      