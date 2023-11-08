import React from "react";

export default function Products() {
  return (
    <div className="h-screen bg-variation-3 pt-4">
      <div className="mx-auto max-w-4xl grid-cols-2 gap-4 grid-flow-row grid px-8">
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
        <div className="h-64 w-full max-w-md bg-variation-2 rounded-3xl"></div>
      </div>
    </div>
  );
}
