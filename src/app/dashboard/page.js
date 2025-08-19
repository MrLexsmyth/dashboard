"use client";

import Image from 'next/image';
import React from 'react';
import Bar from "../../../components/Bar"

export default function DashboardPage() {
  return (
   <div className="font-[Euclid Circular B] mt-4 mb-8">
 
  <h1 className="ml-4 sm:ml-[125px] text-[18px] sm:text-[20px] font-semibold tracking-[-0.6px]">
    Welcome, Ahmed
  </h1>

  <div className="w-full sm:w-[1350px] h-auto sm:h-[345px] mx-auto mt-5 flex flex-col lg:flex-row items-center justify-center gap-4 p-4">
    <div className="w-full lg:w-[859px] h-auto sm:h-[345px] bg-gray-100 rounded-lg">
   
      <div className="flex justify-between items-center p-4 flex-wrap gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[16px] sm:text-[20px]">Sales Overview</h3>
          <h3 className="text-xs sm:text-[12px] text-[#606060]">
            Showing overview Jan 2022 - Sep 2022
          </h3>
        </div>
        <h2 className="px-4 py-2 sm:px-[58px] sm:py-[12px] border border-[#D6D6D6] rounded-full text-sm whitespace-nowrap">
          View Transactions
        </h2>
      </div>

   
      <div className="flex justify-center sm:justify-end items-center gap-6 sm:gap-14 border-b border-gray-300 px-4 py-2 text-sm">
        <h2>1 Week</h2>
        <h2>1 Month</h2>
        <h2>1 Year</h2>
      </div>

      
      <div className="flex flex-col lg:flex-row w-full justify-between items-center p-2 gap-6">
        <div className="w-full lg:w-1/2">
          <Bar />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          
          <div className="border p-4 border-gray-300 rounded-lg">
            <h1 className="text-[#4545FE] font-semibold text-lg sm:text-[19px]">₦120,000,000.00</h1>
            <div className="flex gap-1 items-center mt-2 text-xs">
              <p className="font-medium">Total Inflow</p>
                <Image src="/up.jpg" alt="Up arrow" width={14} height={14} />
              <p className="font-normal">2.5%</p>
            </div>
          </div>
          <div className="border p-4 border-gray-300 rounded-lg">
            <h1 className="text-[#12B76A] font-semibold text-lg sm:text-[19px]">₦50,000,000.00</h1>
            <div className="flex gap-1 items-center mt-2 text-xs">
              <p className="font-medium">MMR</p>
               <Image src="/up.jpg" alt="Up arrow" width={14} height={14} />
              <p className="font-normal">2.5%</p>
            </div>
          </div>
          <div className="border p-4 border-gray-300 rounded-lg">
            <h1 className="text-[#14B8A6] font-semibold text-lg sm:text-[19px]">₦200,000,000.00</h1>
            <div className="flex gap-1 items-center mt-2 text-xs">
              <p className="font-medium">Commission Rev</p>
               <Image src="/downred.jpg" alt="Up arrow" width={14} height={14} />
              <p className="font-normal">2.5%</p>
            </div>
          </div>
          <div className="border p-4 border-gray-300 rounded-lg">
            <h1 className="text-[#F04438] font-semibold text-lg sm:text-[19px]">₦100,000,000.00</h1>
            <div className="flex gap-1 items-center mt-2 text-xs">
              <p className="font-medium">GMV</p>
               <Image src="/downgren.jpg" alt="Up arrow" width={14} height={14} />
              <p className="font-normal">2.5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-between gap-6 w-full lg:w-auto h-[345px]">
      <div className="rounded-lg w-full sm:w-[400px] h-[168px] border border-gray-100">
        <div className='flex justify-between bg-[#f9fafb] p-3'> 
          <div className='flex items-center gap-2'> 
          <Image src="/Group.jpg" alt="Dashboard Icon" width={24} height={24} />
           <h2 className="font-medium text-[14px] leading-[100%] tracking-[0]">Listings Overview</h2>
           </div> 
           <h3 className=" flex gap-1 items-center font-medium text-[12px] leading-[100%] tracking-[0] text-right text-[#4545FE]">View all <span> <Image src="/greater.jpg" alt="Dashboard Icon" width={6} height={6} /> </span> </h3> </div>
            <div className='flex justify-around items-center p-2 mt-4'>
              
               <div className='flex flex-col items-center gap-2'>
                 <h3 className=" font-medium text-[14px] leading-[100%] tracking-[0]">Total</h3> 
                 <h1 className=" font-semibold text-[24px] leading-[38px] tracking-[0]">1.8k</h1>
                  </div> <div className='flex flex-col items-center gap-2'> 
                    <h3 className=" font-medium text-[14px] leading-[100%] tracking-[0]">Active</h3>
                    
                     <h1 className=" font-semibold text-[24px] leading-[38px] tracking-[0]">80</h1> </div>
                      <div className='flex flex-col items-center gap-2'> 
                        <h3 className="font-medium text-[14px] leading-[100%] tracking-[0]">Archived</h3>
                         <h1 className=" font-semibold text-[24px] leading-[38px] tracking-[0]"> 1k</h1>
                          </div>
                           </div>
      </div>
      <div className="rounded-lg w-full sm:w-[400px] h-[168px]  border border-gray-100">
      
        <div className='flex justify-between bg-[#f9fafb] p-3'>
           <div className='flex items-center gap-2'> <Image src="/profile.jpg" alt="Dashboard Icon" width={24} height={24} />
            <h2 className="font-medium text-[14px] leading-[100%] tracking-[0]">User Overview</h2>
             </div> 
             <h3 className=" flex gap-1 items-center font-medium text-[12px] leading-[100%] tracking-[0] text-right text-[#4545FE]">View all <span> <Image src="/greater.jpg" alt="Dashboard Icon" width={6} height={6} /> </span> </h3> 
             </div> 
             <div className='flex justify-around items-center p-2 mt-4'>
               <div className='flex flex-col items-center gap-2'> 
                <h3 className=" font-medium text-[14px] leading-[100%] tracking-[0]">Total</h3>
                
                 <h1 className="font-semibold text-[24px] leading-[38px] tracking-[0]">20.7k</h1>
                  </div> 
                  <div className='flex flex-col items-center gap-2'>
                     <h3 className=" font-medium text-[14px] leading-[100%] tracking-[0]">Riders</h3>
                      <h1 className="font-semibold text-[24px] leading-[38px] tracking-[0]">8.5k</h1> 
                      </div>
                       <div className='flex flex-col items-center gap-2'>
                         <h3 className=" font-medium text-[14px] leading-[100%] tracking-[0]">Subscribers</h3>
                         
                          <h1 className="font-semibold text-[24px] leading-[38px] tracking-[0]"> 7.5k</h1>
                           </div>
                            </div>
                             </div> 
                             </div>
     
  </div>


  <div className="ml-0 sm:ml-[125px] w-full sm:w-[1270px] mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
    <Image src="/house1.jpg" alt="House 1" width={415} height={286} className="rounded-[12px] object-cover w-full sm:w-[418px] h-[200px] sm:h-[286px]" />
    <Image src="/house2.jpg" alt="House 2" width={415} height={286} className="rounded-[12px] object-cover w-full sm:w-[418px] h-[200px] sm:h-[286px]" />
    <Image src="/house1.jpg" alt="House 3" width={415} height={286} className="rounded-[12px] object-cover w-full sm:w-[418px] h-[200px] sm:h-[286px]" />
  </div>
</div>

);
}
