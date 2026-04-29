import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4 max-[450px]:px-2 sm:px-6">{children}</div>
    </section>
  );
};

export default SectionWrapper;
