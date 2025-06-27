import React from "react";
function TestimonialsCard({ item }) {


  return (
    <>
      <div>
        <div
          className="bg-white rounded-2xl min-h-68 shadow-lg p-6 max-w-72  flex flex-col items-center text-center border-t-4 border-orange-400"
          itemScope
          itemType="https://schema.org/Review"
          aria-label={`Testimonial from ${name}`}
        >
          <div className="mb-4">
            <p className="text-gray-700 text-lg italic" itemProp="reviewBody">
              {item.statement}
            </p>
          </div>
          <div className="mt-4">
            <span
              className="font-semibold text-blue-700 text-base"
              itemProp="author"
            >
              {item.name}
            </span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default TestimonialsCard;
