// HOC
import MarketLongPolling from '../../../hoc/MarketLongPolling';

// Components
import Rate from './Rate/Rate';

// Interfaces
import IMarket from '../../../interfaces/market.interface';

interface PropsTypes {
  onChangeMarket: (market: IMarket) => void;
  onError: () => void;
  longPollingUrl: string;
  reserveUrl: string;
  minimalRate: number;
  isError: boolean;
  market?: IMarket;
}

const MarketRates = ({
  onChangeMarket,
  onError,
  longPollingUrl,
  reserveUrl,
  minimalRate,
  market,
  isError,
}: PropsTypes) => {
  return (
    <MarketLongPolling
      onChangeMarket={onChangeMarket}
      longPollingUrl={longPollingUrl}
      onError={onError}
      baseApiUrl={reserveUrl}
    >
      <Rate rate={market ? 1 / market.rates.RUB : null} minimalRate={minimalRate} />
      <Rate rate={market ? 1 / market.rates.USD : null} minimalRate={minimalRate} />
      <Rate rate={market ? 1 / market.rates.EUR : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.RUB / market.rates.USD : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.RUB / market.rates.EUR : null} minimalRate={minimalRate} />
      <Rate rate={market ? market.rates.EUR / market.rates.USD : null} minimalRate={minimalRate} isError={isError} />
    </MarketLongPolling>
  );
};

export default MarketRates;
