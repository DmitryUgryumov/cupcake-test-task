// Core
import { useEffect, useState } from 'react';

// Interfaces
import IMarket from '../../interfaces/market.interface';

// API
import apiServer from '../../api/httpClient/api.server';

const Market = () => {
  const [firstMarket, setFirstMarket] = useState<IMarket>();

  useEffect(() => {
    const getFirstMarket = async () => {
      try {
        const { data } = await apiServer.get('/first');
        setFirstMarket(data);
      } catch (error) {}
    };

    getFirstMarket();
  }, []);

  return <div>{JSON.stringify(firstMarket)}</div>;
};

export default Market;
