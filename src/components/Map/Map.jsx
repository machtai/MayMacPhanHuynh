import React from "react";

const Location = () => {
  return (
    <section id="contact" className="pb-2">
    
      <div className="container py-6 mx-auto">
        
        <div className="md:flex justify-between items-center">
          <div className="w-full h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7832.669964118666!2d106.83330729926323!3d11.013473991352884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dc85451988eb%3A0x23aba32057915223!2zVUJORCB4w6MgVGjhuqFuaCBQaMO6!5e0!3m2!1svi!2s!4v1688009742142!5m2!1svi!2s"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Location;