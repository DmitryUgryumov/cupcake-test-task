// HOC
import MarketLongPolling from '../../../hoc/MarketLongPolling';

// Components
import Rate from './Rate/Rate';

// Interfaces
import IMarket from '../../../interfaces/market.interface';

interface PropsTypes {
  onChangeMarket: (market: IMarket) => void;
  onError: () => void;
  mainUrl: string;
  reserveUrl: string;
  minimalRate: number;
  market?: IMarket;
}

const MarketRates = ({ onChangeMarket, onError, mainUrl, reserveUrl, minimalRate, market }: PropsTypes) => {
  return (
    <MarketLongPolling
      onChangeMarket={onChangeMarket}
      longPollingUrl={mainUrl}
      onError={onError}
      baseApiUrl={reserveUrl}
    >
      <Rate rate={market ? 1 / market.rates.RUB : null} minimalRate={minimalRate} />
      <Rate rate={market ? 1 / market.rates.USD : null} minimalRate={minimalRate} />
      <Rate rate={market ? 1 / market.rates.EUR : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.RUB / market.rates.USD : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.RUB / market.rates.EUR : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.EUR / market.rates.USD : null} minimalRate={minimalRate} />
    </MarketLongPolling>
  );
};

export default MarketRates;
