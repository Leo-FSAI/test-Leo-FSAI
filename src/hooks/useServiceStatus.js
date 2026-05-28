import { useEffect, useState } from 'react';

export const useServiceStatus = () => {
  const [serviceStatus, setServiceStatus] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('wss://backend-service-url');

    socket.onmessage = (event) => {
      const status = JSON.parse(event.data);
      setServiceStatus(status);
    };

    socket.onerror = () => {
      setServiceStatus({ error: 'Connection failed' });  
    };

    return () => {
      socket.close();
    };
  }, []);

  return serviceStatus;
};