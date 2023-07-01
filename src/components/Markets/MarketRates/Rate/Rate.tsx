// Styles
import styles from './Rate.module.css';

interface PropsTypes {
  rate: number | null;
  minimalRate: number;
}

const Rate = ({ rate, minimalRate }: PropsTypes) => {
  if (rate === null) {
    return <div>Loading...</div>;
  }

  return <div className={rate === minimalRate ? styles.minimalValue : ''}>{rate.toFixed(4)}</div>;
};

export default Rate;
