import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <h1>Neighbuddy</h1>
      <nav className="flex flex-row gap-5 mt-5">
        <div>Privacy Policy</div>
        <div>Terms</div>
        <div>Pricing</div>
      </nav>
    </footer>
  );
}
