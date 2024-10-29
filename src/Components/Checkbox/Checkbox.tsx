export const Checkbox: React.FC<{ labelText: string }> = ({ labelText }) => (
  <label style={{ display: 'block' }}>
    <input type="checkbox" style={{ marginRight: '6px' }} />
    {labelText}
  </label>
);
