import React from "react";

export const SignInPage = () => {
  const handleClick = async () => {
    const res = await fetch(
      "https://notes-api-gamma.vercel.app/api/auth/login",
      {
        method: "POST",
      }
    );
    const resjson = await res.json();
    console.log(res);
    console.log(resjson);
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
    </div>
  );
};
