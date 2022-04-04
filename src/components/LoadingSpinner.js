import React from "react";
import { Spinner } from "react-bootstrap";
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Spinner animation="border" />
    </div>
  );
}
