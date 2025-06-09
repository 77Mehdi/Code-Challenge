import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";

function PemintPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className='px-4 py-10 max-w-6xl mx-auto border-t border-gray-700 pb-4'>
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-300 lg:text-3xl">Where will the skip be placed?</h1>
        <p className="text-gray-500 mt-2 text-xl">
          This helps us determine if you need a permit for your skip
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button
          onClick={() => setSelected("private")}
          className={`p-6 rounded-lg border-2 transition-all text-left ${
            selected === "private"
              ? "border-[#0037C1] bg-[#0037C1]/10"
              : "border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C]"
          }`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-full bg-[#1C1C1C] border border-[#2A2A2A]">
              <FiHome className="w-6 h-6 text-[#0037C1]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Private Property</h3>
              <p className="text-gray-400">Driveway or private land</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            No permit required when placed on your private property
          </p>
        </button>

        <button
          onClick={() => setSelected("public")}
          className={`p-6 rounded-lg border-2 transition-all text-left ${
            selected === "public"
              ? "border-[#0037C1] bg-[#0037C1]/10"
              : "border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C]"
          }`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-full bg-[#1C1C1C] border border-[#2A2A2A]">
              <FaTruck className="w-6 h-6 text-[#0037C1]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Public Road</h3>
              <p className="text-gray-400">Council or public property</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Permit required for placement on public roads
          </p>
        </button>
      </div>

      {selected === "public" && (
        <div className="mb-10 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-6 text-gray-300">
          <h2 className="text-xl font-semibold mb-2">Public Road Permit Required</h2>
          <p className="text-gray-400">
            Since you've selected a public road, a permit from the council is required.
            We'll guide you through the process in the next steps.
          </p>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700">
          Back
        </button>
        <button className="px-6 py-2 border border-[#0037C1] bg-[#0037C1] text-white rounded-md hover:bg-[#002fa8]">
          Continue
        </button>
      </div>
    </div>
  );
}

export default PemintPage;
