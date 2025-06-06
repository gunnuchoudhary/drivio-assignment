import React from 'react';

export default function ShimmerCard() {
  return (
    <div className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_25%] px-2 animate-pulse">
      <div className="border border-[#CBCBCB] rounded-2xl overflow-hidden bg-white">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          <div className="flex justify-between mt-4">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
