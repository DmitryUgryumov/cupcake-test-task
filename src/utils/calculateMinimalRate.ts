import IMarket from '../interfaces/market.interface';

const calculateMinimalRate = (markets: (IMarket | undefined)[]): number => {
  const rates: number[] = [];

  markets.forEach((market) => {
    if (market) {
      rates.push(
        1 / market.rates.RUB,
        1 / market.rates.USD,
        1 / market.rates.EUR,
        market.rates.RUB / market.rates.USD,
        market.rates.RUB / market.rates.EUR,
        market.rates.EUR / market.rates.USD
      );
    }
  });

  return Math.min(...rates);
};

export default calculateMinimalRate;
