import toast from "react-hot-toast";

export const errorManager = (status: number, message?: string) => {
  if (status === 400 || status === 413 || status === 420) {
    toast.error(`${message}`);
  } else if (status === 429 && !message?.includes("reached your limit")) {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex justify-center border border-red-700 `}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 me-1">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="#ED4337"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.364 5.636a9 9 0 11-12.728 0m12.728 0A9 9 0 0111.25 3m.5 4v4m0 4h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium" style={{ color: "#ED4337" }}>
                  Too Many Requests
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  You are sending too many requests. Please try again later.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => toast.dismiss(t.id)}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        duration: 60000,
        position: "top-center",
      }
    );
  } else if (status === 401) {
    toast.error(`Please login first`);
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 2000);
  } else if (status === 403) {
    toast.error(`You don't have permission to access this page`);
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 2000);
  } else if (status === 404) {
    toast.error(`404 Not Found`);
  } else if (status >= 500) {
    toast.error(`Internal Server Error`);
  }
};
