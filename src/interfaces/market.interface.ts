export default interface IMarket {
  rates: {
    RUB: number;
    USD: number;
    EUR: number;
  };
  base: string;
  timestamp: number;
  date: string;
}
