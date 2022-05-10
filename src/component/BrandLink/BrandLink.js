import React from "react";
import { useSearchParams, Link } from "react-router-dom";
export const BrandLink = ({ brand, children, ...props }) => {
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("brand") === brand;
  return <Link to={`/brand=${brand}`} {...props} />;
};
