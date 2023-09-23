import { useState, useEffect } from "react";

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState<string>(initialTitle);

  const updateTitle = () => {
    document.title = title;
  };

  useEffect(updateTitle, [title]);

  return { title, setTitle };
};

export default useTitle;
