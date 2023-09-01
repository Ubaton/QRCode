import React from "react";
import AuthDetails from "../data/AuthDetails";

const plan = [
  {
    YourPlan: "Free Plan",
    title: "You current plan",
    header: "Free plan",
    paragraph: "Get started with our Free Plan and enjoy basic features.",
    list: [
      "Feature 1: Limited downloads",
      "Feature 2: Standard customer support",
      "Feature 3: Basic usage analytics",
    ],
  },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-md p-8">
        <h1 className="text-3xl font-bold text-center">Your Profile</h1>
        <div className="flex items-center justify-center">
          <AuthDetails />
        </div>
        <div className="bg-gray-400 text-center text-gray-300 p-2 rounded-md">
          {plan.map((p) => (
            <div key={p.YourPlan}>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1">
                  <span className="text-medium text-2xl font-semibold">
                    {p.title}
                  </span>
                  <span className="text-xl">{p.header}</span>
                  <div className="bg-gray-300 rounded-md p-2">
                    <span className="text-gray-500 text-sm">{p.paragraph}</span>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-6 text-gray-500 mb-4 text-left">
                      {plan[0].list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
