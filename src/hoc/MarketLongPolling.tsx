// Core
import { useEffect, ReactNode } from 'react';

// Interfaces
import IMarket from '../interfaces/market.interface';

// API
import apiServer from '../api/httpClient/api.server';

interface PropsTypes {
  onChangeMarket: (market: IMarket) => void;
  onError: () => void;
  longPollingUrl: string;
  baseApiUrl: string;
  children: ReactNode;
  reserveInterval?: number;
}

const MarketLongPolling = ({
  onChangeMarket,
  onError,
  longPollingUrl,
  baseApiUrl,
  children,
  reserveInterval = 1000,
}: PropsTypes) => {
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const getMarketReserve = async () => {
      try {
        const { data } = await apiServer.get<IMarket>(baseApiUrl);
        onChangeMarket(data);
      } catch (error) {
        onError();
        clearInterval(intervalId);
      }
    };

    const getMarketMain = async () => {
      try {
        const { data } = await apiServer.get<IMarket>(longPollingUrl);
        onChangeMarket(data);
        getMarketMain();
      } catch (error) {
        intervalId = setInterval(getMarketReserve, reserveInterval);
      }
    };

    const getMarketInitial = async () => {
      try {
        const { data } = await apiServer.get<IMarket>(baseApiUrl);
        onChangeMarket(data);
      } catch (error) {
      } finally {
        getMarketMain();
      }
    };

    getMarketInitial();
    return () => clearInterval(intervalId);
  }, []);

  return <>{children}</>;
};

export default MarketLongPolling;
