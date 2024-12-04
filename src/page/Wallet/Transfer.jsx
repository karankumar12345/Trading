import { useState } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

const Transfer = () => {
  const [form, setForm] = useState({
    amount: '',
    walletId: '',
    purpose: '',
  });

  const handleSubmit = () => {
    console.log(form); // Log the entire form state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='pt-10 space-y-5'>
      <div>
        <h1 className='pb-1'>Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={form.amount}
          className='w-full'
          type='number'
          placeholder='₹ 0.00'
        />
      </div>
      <div>
        <h1 className='pb-1'>Enter Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={form.walletId}
          className='w-full'
          type='text'
          placeholder='Enter Wallet ID'
        />
      </div>
      <div>
        <h1 className='pb-1'>Enter Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={form.purpose}
          className='w-full'
          type='text'
          placeholder='Enter Purpose'
        />
      </div>
      <Button onClick={handleSubmit} className="w-full py-7 bg-blue-600">
        Submit
      </Button>
    </div>
  );
};

export default Transfer;
