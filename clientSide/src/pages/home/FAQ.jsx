import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h2 className="text-5xl text-primary font-bold">
        Frequently Asked Questions
      </h2>

      <div className="join join-vertical bg-base-100 max-w-2xl">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            1. What is WhereIsIt?
          </div>
          <div className="collapse-content text-sm">
            WhereIsIt is a platform designed to help you report lost items and connect with those who find them, making recovery simple and efficient.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            2. How does WhereIsIt help me find my lost item?
          </div>
          <div className="collapse-content text-sm">
            We provide a searchable database of lost and found items, allowing you to report your loss and match it with community finds for a quick recovery.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            3. Is WhereIsIt free to use?
          </div>
          <div className="collapse-content text-sm">
            Yes, it’s completely free. No fees or subscriptions—just a service to help you reunite with your belongings.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            4. Do I need to sign up to use the platform?
          </div>
          <div className="collapse-content text-sm">
            No sign-up is needed to browse, but creating a free account unlocks features like adding items and managing your recovery process.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            5. Can I connect with people who found my item?
          </div>
          <div className="collapse-content text-sm">
            Yes, our platform facilitates secure communication with finders to arrange the return of your lost belongings.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            6. What types of items can I report?
          </div>
          <div className="collapse-content text-sm">
            You can report anything from electronics and documents to pets and jewelry—WhereIsIt covers all lost item categories.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            7. Can I update the status of my lost item?
          </div>
          <div className="collapse-content text-sm">
            Yes, once your item is recovered, you can update its status to help keep our community database accurate and current.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            8. How often is WhereIsIt updated?
          </div>
          <div className="collapse-content text-sm">
            Our site is updated regularly with new reports and recoveries, ensuring you always have the latest information at your fingertips.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;