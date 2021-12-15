import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-1" name="title">{title}</h1>
      {/* <h3 title="header_nih" className="header">Cats</h3> */}
    </>
  );
}
