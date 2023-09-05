import React, { useState } from "react";
import './SubscriptionForm.css';

export default function Subcription() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 199,
      features: ["480p Video Quality"], 
      Link: "https://buy.stripe.com/test_dR6g12djf2NJ2ysbIJ",
    },
    {
      id: 2,
      name: "Premium Plan",
      price: 299,
      features: ["780p Video Quality"], 
      Link: "https://buy.stripe.com/test_8wM6qsbb7fAv4GAaEG",
    },
    {
      id: 3,
      name: "Pro Plan",
      price: 599,
      features: ["1080p Video Quality"], 
      Link: "https://buy.stripe.com/test_00g5mo5QNewra0UfZ1",
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div
      style={{
        background: "rgb(33, 33, 33)",
        color: "white",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Choose a Plan</h1>
      <div
        className="plans" 
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan {selectedPlan === plan ? "selected" : ""}`}
            onClick={() => handlePlanSelect(plan)}
            style={{
              border: "3px solid orangered",
              margin: "30px",
              padding: "20px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            <h2>{plan.name}</h2>
            <p>Price: {plan.price} / Month</p>
            <p>{plan.features}</p>
          </div>
        ))}
      </div>
      <div className="selected-plan">
        {selectedPlan ? (
          <div>
            <h3>Selected Plan: {selectedPlan.name}</h3>
            <p>Price: {selectedPlan.price} / Month</p>
          </div>
        ) : (
          <p style={{fontFamily: "times new roman",fontWeight: "bold"}}>No Plan Selected.</p>
        )}
      </div>
      <button
  disabled={!selectedPlan}
  style={{
    margin: "10px",
    fontWeight: "bold", // Add this line to make the text bold
  }}
  onClick={() => {
    window.open(`${selectedPlan.Link}`, "_blank");
  }}
>
  Pay Now
</button>

    </div>
  );
}