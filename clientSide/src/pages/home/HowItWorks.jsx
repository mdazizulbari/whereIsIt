import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-base-200 flex flex-col items-center justify-center gap-5 rounded-4xl py-10">
      <h2 className="font-gummy text-primary text-4xl font-bold">
        How It Works
      </h2>

      <div className="join join-vertical bg-base-100 w-full max-w-2xl">
        <div className="collapse-arrow join-item border-base-300 collapse border">
          <input type="radio" name="hobbyhub-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            1. Report Your Lost Item
          </div>
          <div className="collapse-content text-primar text-sm">
            Easily submit details about your lost item, including a description
            and location, to start the recovery process.
          </div>
        </div>
        <div className="collapse-arrow join-item border-base-300 collapse border">
          <input type="radio" name="hobbyhub-accordion" />
          <div className="collapse-title font-semibold">
            2. Browse Found Items
          </div>
          <div className="collapse-content text-sm">
            Check our database of recently found items to see if yours has been
            reported by someone else in the community.
          </div>
        </div>
        <div className="collapse-arrow join-item border-base-300 collapse border">
          <input type="radio" name="hobbyhub-accordion" />
          <div className="collapse-title font-semibold">
            3. Connect With Finders
          </div>
          <div className="collapse-content text-sm">
            Contact individuals who have found items and coordinate to reclaim
            your belongings securely and efficiently.
          </div>
        </div>
        <div className="collapse-arrow join-item border-base-300 collapse border">
          <input type="radio" name="hobbyhub-accordion" />
          <div className="collapse-title font-semibold">
            4. Update Recovery Status
          </div>
          <div className="collapse-content text-sm">
            Mark your item as recovered once returned, helping keep our platform
            accurate and up-to-date.
          </div>
        </div>
        <div className="collapse-arrow join-item border-base-300 collapse border">
          <input type="radio" name="hobbyhub-accordion" />
          <div className="collapse-title font-semibold">5. Stay Informed</div>
          <div className="collapse-content text-sm">
            Receive notifications and tips on preventing loss, ensuring you’re
            always prepared and connected with our services.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
