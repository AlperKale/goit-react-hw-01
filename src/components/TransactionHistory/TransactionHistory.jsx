import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.tr}>
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
