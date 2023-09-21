import React, {useState, useEffect} from 'react';

interface ExpiringStateProps {
  defaultValue: any;
  delay?: number;
}

const useExpiringState = (defaultValue: any, delay: number = 1500) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value !== defaultValue) {
      const timeoutId = setTimeout(() => {
        setValue(defaultValue);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
    return null;
  }, [value]);

  return [value, setValue];
};

export default useExpiringState;
