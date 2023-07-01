// HOC
import MarketLongPolling from '../../../hoc/MarketLongPolling';

// Interfaces
import IMarket from '../../../interfaces/market.interface';

interface PropsTypes {
  onChangeMarket: (market: IMarket) => void;
  onError: () => void;
  mainUrl: string;
  reserveUrl: string;
  market?: IMarket;
}

const MarketRates = ({ onChangeMarket, onError, mainUrl, reserveUrl, market }: PropsTypes) => {
  return (
    <MarketLongPolling
      onChangeMarket={onChangeMarket}
      longPollingUrl={mainUrl}
      onError={onError}
      baseApiUrl={reserveUrl}
    >
      <div>{market ? 1 / market.rates.RUB : 'Loading...'}</div>
      <div>{market ? 1 / market.rates.USD : 'Loading...'}</div>
      <div>{market ? 1 / market.rates.EUR : 'Loading...'}</div>
      <div>{market ? market.rates.RUB / market.rates.USD : 'Loading...'}</div>
      <div>{market ? market.rates.RUB / market.rates.EUR : 'Loading...'}</div>
      <div>{market ? market.rates.EUR / market.rates.USD : 'Loading...'}</div>
    </MarketLongPolling>
  );
};

export default MarketRates;
