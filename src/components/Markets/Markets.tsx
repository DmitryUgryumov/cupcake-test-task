// Core
import { useState } from 'react';

// Interfaces
import IMarket from '../../interfaces/market.interface';

// Components
import MarketRates from './MarketRates/MarketRates';

// Styles
import styles from './Markets.module.css';

const Markets = () => {
  const [firstMarket, setFirstMarket] = useState<IMarket>();
  const [secondMarket, setSecondMarket] = useState<IMarket>();
  const [thirdMarket, setThirdMarket] = useState<IMarket>();

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
            onError={() => {}}
            mainUrl="/first/poll"
            reserveUrl="/first"
            market={firstMarket}
          />
        </div>
        <div className={styles.marketContainer}>
          <MarketRates
            onChangeMarket={(market) => setSecondMarket(market)}
            onError={() => {}}
            mainUrl="/second/poll"
            reserveUrl="/second"
            market={secondMarket}
          />
        </div>
        <div className={styles.marketContainer}>
          <MarketRates
            onChangeMarket={(market) => setThirdMarket(market)}
            onError={() => {}}
            mainUrl="/third/poll"
            reserveUrl="/third"
            market={thirdMarket}
          />
        </div>
      </div>
    </div>
  );
};

export default Markets;
