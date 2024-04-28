import { useState } from 'react';
import InputComp from '../../SharedComponent/InputComp/InputComp';
import PriceInput from '../../SharedComponent/InputComp/PriceInput';
import { UserTypes, userList } from '../../constant/Users';
import SelectInput from '../../SharedComponent/SelectInput/SelectInput';

const initialValue = { priceData: {}, total: 0 };
const SplitForm = () => {
  const [formData, setFormData] = useState<any>(initialValue);
  const handlePriceChange = (e: any) => {
    setFormData({
      ...formData,
      priceData: { ...formData.priceData, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('price is:', formData);
  };

  const handleChange = (e: any) => {
    // console.log(formData, e, 'hola amigo');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const total = Object.values(formData.priceData).reduce(
    (a, b) => Number(a) + (Number(b) || 0),
    0
  ) as number;

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Split Form</h1>
        {/** Tailwind input component */}
        <h3>Total: {total}</h3>

        <InputComp
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          onChange={handleChange}
        />

        <PriceInput
          type="number"
          name="total"
          placeholder="Enter title"
          onChange={handleChange}
          value={formData?.total}
        />

        <SelectInput
          options={userList}
          name="paidBy"
          onChange={handleChange}
          id="users"
          placeholder="Paid By"
          renderOption={(user: UserTypes) => (
            <option value={user.id}>{user.name}</option>
          )}
        />

        {userList.map((user: UserTypes) => {
          return (
            <div key={user.id} className="row">
              <div className="col-7 text-start">{user.name}</div>
              <div className="col-5">
                <PriceInput
                  type="number"
                  name={user.id}
                  onChange={handlePriceChange}
                  value={formData?.priceData?.[user.id]}
                  placeholder="Enter amount"
                />
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn btn-primary me-3" type="submit">
        Submit Form
      </button>
      <button
        className="btn btn-primary"
        type="reset"
        onClick={() => setFormData(initialValue)}
      >
        Reset
      </button>
    </form>
  );
};

export default SplitForm;
