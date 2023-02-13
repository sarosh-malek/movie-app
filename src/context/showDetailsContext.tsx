import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProp {
  showDetails: boolean;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
}

export const MovieDetailsContext = createContext<ContextProp | null>(null);

const Context = ({ children }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <MovieDetailsContext.Provider value={{ showDetails, setShowDetails }}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

export default Context;
