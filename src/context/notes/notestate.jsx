import { useState } from "react";
import { createContext } from "react";

export const noteContext = createContext();
const NoteState = ({ children }) => {
  const [loggin, setloggin] = useState(false);
  return (
    <noteContext.Provider value={{ loggin, setloggin }}>
      {children}
    </noteContext.Provider>
  );
};
export default NoteState;
