import { useState } from 'react';
import SelectInput from '../../SharedComponent/SelectInput/SelectInput';
import { KEY_USER, UserIds, UserTypes, userList } from '../../constant/Users';
import { payments } from '../../constant/payments';

const filterMethod = (payment: any, currentUser?: UserIds) => {
  if (!currentUser) return false;
  if (currentUser === payment.paidBy) return true;
  return !!payment.priceData?.[currentUser];
};

const calculatePrice = (payment: any, currentUser: UserIds) => {
  const myPayment = currentUser === payment?.paidBy;
  if (!myPayment) {
    return (payment.priceData?.[currentUser] || 0) * -1;
  }
  return payment.total - (payment.priceData?.[currentUser] || 0);
  // if (!currentUser) return 0;
  // if (currentUser === payment.paidBy) return 0;
  // return payment.priceData?.[currentUser] || 0;
};

const GroupSplitTable = () => {
  const [formValue, setFormValue] = useState<any>({ currentUser: 'venkat' });
  let totalAmount = 0;
  const handleChange = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <SelectInput
        options={userList}
        name="currentUser"
        onChange={handleChange}
        id="users"
        placeholder="Who are you?"
        renderOption={(user: UserTypes) => (
          <option value={user.id}>{user.name}</option>
        )}
      />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Paid By</th>
              <th scope="col">Total</th>
              <th scope="col">Your Remaining</th>
            </tr>
          </thead>
          <tbody>
            {payments
              .filter((payment) =>
                filterMethod(payment, formValue?.currentUser)
              )
              .map((payment: any) => {
                const price = calculatePrice(payment, formValue?.currentUser);
                totalAmount += price;
                return (
                  <tr>
                    <td className="text-start">{payment.title}</td>
                    <td className="text-start">
                      {payment.paidBy === formValue?.currentUser
                        ? 'You'
                        : (KEY_USER as any)?.[payment.paidBy] ?? payment.paidBy}
                    </td>
                    <td>{payment.total}</td>
                    <td>
                      {/* {price <= 0 ? } */}
                      <PriceDisplay price={price} showText={true} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>
                <PriceDisplay price={totalAmount} showText={false} />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const PriceDisplay = ({ price, showText }: any) => {
  if (price < 0)
    return (
      <span className="text-danger">
        {showText && 'You Owe '}
        {price * -1}
      </span>
    );
  return (
    <span className="text-success">
      {showText && 'Owes you '}
      {price}
    </span>
  );
};

export default GroupSplitTable;
