import styles from './Checkbox.module.scss';

export const Checkbox: React.FC<{
  labelText: string;
  id: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ labelText, id, checked, onChange }) => (
  <div className={styles.container}>
    <input
      id={id}
      className={styles.input}
      checked={checked}
      type="checkbox"
      onChange={onChange}
    />

    <label className={styles.label} htmlFor={id}>
      {labelText}
    </label>
  </div>
);
