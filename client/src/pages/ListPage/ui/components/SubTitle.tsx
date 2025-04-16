import React from "react";

export const SubTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <h2 className="list-subtitle">Active Item ID: {children}</h2>
);