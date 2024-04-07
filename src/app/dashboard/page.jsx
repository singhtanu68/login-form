import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center px-6 bt-4 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="mt-6 text-bold leading-none sm:text-2xl tracking-tight text-slate-900 dark:text-white">
            Welcome on the dashboard
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
