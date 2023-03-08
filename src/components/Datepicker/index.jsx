import "./style.css"
const DatePicker = ({ id, label, name, className, date, onChange }) => {
  return (
    <div className="checkin-checkout-wrapper">
      <label for={id}>{label}</label>
      <input
        type="date"
        id={id}
        name={name}
        className={className}
        value={date}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePicker;
