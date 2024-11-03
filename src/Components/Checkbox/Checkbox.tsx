import styles from './Checkbox.module.scss';

export const Checkbox: React.FC<{ labelText: string; id: string }> = ({
  labelText,
  id,
}) => (
  <div className={styles.container}>
    <input id={id} className={styles.input} type="checkbox" />

    <label className={styles.label} htmlFor={id}>
      {labelText}
    </label>
  </div>
);
