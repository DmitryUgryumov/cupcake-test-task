// Core
import { useState } from 'react';

// Interfaces
import IMarket from '../../interfaces/market.interface';

// Components
import MarketRates from './MarketRates/MarketRates';

const Markets = () => {
  const [firstMarket, setFirstMarket] = useState<IMarket>();
  const [secondMarket, setSecondMarket] = useState<IMarket>();
  const [thirdMarket, setThirdMarket] = useState<IMarket>();

  return (
    <div>
      <MarketRates
        onChangeMarket={(market) => setFirstMarket(market)}
        onError={() => {}}
        mainUrl="/first/poll"
        reserveUrl="/first"
        market={firstMarket}
      />
      <MarketRates
        onChangeMarket={(market) => setSecondMarket(market)}
        onError={() => {}}
        mainUrl="/second/poll"
        reserveUrl="/second"
        market={secondMarket}
      />
      <MarketRates
        onChangeMarket={(market) => setThirdMarket(market)}
        onError={() => {}}
        mainUrl="/third/poll"
        reserveUrl="/third"
        market={thirdMarket}
      />
    </div>
  );
};

export default Markets;
