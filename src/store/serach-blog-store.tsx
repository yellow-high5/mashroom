import React, { createContext, useReducer } from 'react';

type SearchBlogState = { tag?: string };

type SearchBlogAction = { type: 'filter'; tag: string } | { type: 'clear' };

const initialState = { tag: undefined };

const reducer = (state: SearchBlogState, action: SearchBlogAction) => {
  switch (action.type) {
    case 'filter':
      return { tag: action.tag };
    case 'clear':
      return { tag: undefined };
    default:
      return state;
  }
};

export const SearchBlogContext = createContext(
  {} as {
    state: SearchBlogState;
    dispatch: React.Dispatch<SearchBlogAction>;
  },
);

type Props = {
  children: React.ReactNode;
};

export const SearchBlogProvider: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchBlogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchBlogContext.Provider>
  );
};
