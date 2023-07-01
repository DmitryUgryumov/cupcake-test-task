// Core
import { useMemo, useState } from 'react';

// Interfaces
import IMarket from '../../interfaces/market.interface';

// Types
import { MarketTypes } from '../../types/marketTypes.type';

// Components
import MarketRates from './MarketRates/MarketRates';

// Utils
import calculateMinimalRate from '../../utils/calculateMinimalRate';

// Styles
import styles from './Markets.module.css';

const Markets = () => {
  const [firstMarket, setFirstMarket] = useState<IMarket>();
  const [secondMarket, setSecondMarket] = useState<IMarket>();
  const [thirdMarket, setThirdMarket] = useState<IMarket>();
  const [errorMarkets, setErrorMarkets] = useState<MarketTypes[]>([]);

  const minimalRate = useMemo(
    () => calculateMinimalRate([firstMarket, secondMarket, thirdMarket]),
    [firstMarket, secondMarket, thirdMarket]
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Pair name/market</div>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>

      <div className={styles.marketsContainer}>
        <div className={styles.marketContainer}>
          <div>RUB/CUPCAKE</div>
          <div>USD/CUPCAKE</div>
          <div>EUR/CUPCAKE</div>
          <div>RUB/USD</div>
          <div>RUB/UER</div>
          <div>EUR/USD</div>
        </div>
        <div className={styles.marketContainer}>
          <MarketRates
            onChangeMarket={(market) => setFirstMarket(market)}
            onError={() => setErrorMarkets((prev) => [...prev, 'first'])}
            longPollingUrl="/first/poll"
            reserveUrl="/first"
            market={firstMarket}
            minimalRate={minimalRate}
            isError={errorMarkets.includes('first')}
          />
        </div>
        <div className={styles.marketContainer}>
          <MarketRates
            onChangeMarket={(market) => setSecondMarket(market)}
            onError={() => setErrorMarkets((prev) => [...prev, 'second'])}
            longPollingUrl="/second/poll"
            reserveUrl="/second"
            market={secondMarket}
            minimalRate={minimalRate}
            isError={errorMarkets.includes('second')}
          />
        </div>
        <div className={styles.marketContainer}>
          <MarketRates
            onChangeMarket={(market) => setThirdMarket(market)}
            onError={() => setErrorMarkets((prev) => [...prev, 'third'])}
            longPollingUrl="/third/poll"
            reserveUrl="/third"
            market={thirdMarket}
            minimalRate={minimalRate}
            isError={errorMarkets.includes('third')}
          />
        </div>
      </div>
    </div>
  );
};

export default Markets;
