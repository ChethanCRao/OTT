import React, { useState } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubscribeClick = () => {
    // Redirect to the specified link in a new tab/window
    window.open('https://buy.stripe.com/test_4gweWY92Z0FB5KE288', '_blank');
  };

  return (
    <div>
      <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
  <label>
    Email:
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </label>
  <br />
  <label>
    Subscription Plan:
    <select
      value={plan}
      onChange={(e) => setPlan(e.target.value)}
      required
    >
      <option value="">Select a plan</option>
      <option value="basic">Basic 199/-</option>
      <option value="premium">Premium 299/-</option>
      <option value="pro">Pro 599/-</option>
    </select>
  </label>
  <br />
  <button type="button" onClick={handleSubscribeClick}>
    Subscribe
  </button>
</form>

    </div>
  );
};

export default SubscriptionForm;
