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
      <div>{JSON.stringify(market)}</div>
    </MarketLongPolling>
  );
};

export default MarketRates;
