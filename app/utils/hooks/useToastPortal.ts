import React, { useEffect, useState } from 'react';
import { uuid } from '../uuid';

const useToastPortal = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [portalID] = useState<string>(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalID;
    div.setAttribute('style', 'position: fixed; top: 10px; right: 10px');
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalID]);

  return { loaded, portalID };
};

export default useToastPortal;
