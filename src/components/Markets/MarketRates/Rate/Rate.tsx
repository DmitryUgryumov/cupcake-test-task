// Core
import classNames from 'classnames';

// Styles
import styles from './Rate.module.css';

interface PropsTypes {
  rate: number | null;
  minimalRate: number;
  isError?: boolean;
}

const Rate = ({ rate, minimalRate, isError = false }: PropsTypes) => {
  if (rate === null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={classNames({
        [styles.minimalValue]: rate === minimalRate,
        [styles.errorRate]: isError,
      })}
    >
      {rate.toFixed(4)}
    </div>
  );
};

export default Rate;
