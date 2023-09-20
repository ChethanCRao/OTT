import React, { useState } from "react";
import './SubscriptionForm.css';
import { Link } from 'react-router-dom';

export default function Subcription() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 199,
      features: ["480p Video Quality"], 
      Link: "https://buy.stripe.com/test_fZe8yA0wt5ZV1uo5ko",
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
      <b className="watchflix" style={{fontSize: "25px",marginLeft: "15px",marginTop: "10px"}}>
        <span style={{color: "white"}}>Watch</span>
        <span className="flix">Flix</span>
      </b>
      <div className="sign-up-parent">
        <Link to="/SignUpForm" className="sign-up" style={{textDecoration: "none",color: "white"}}>
        <b>Sign up</b>
      </Link>
          <img className="bx-search-icon" alt="" src="/bxbxsearch.svg" />
          <img
            className="claritybell-outline-badged-icon100"
            alt=""
            src="/claritybelloutlinebadged.svg"
          />
        </div> 
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
      <button className="btn80"
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