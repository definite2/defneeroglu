import { useEffect } from "react";
import { AlertTriangle, Check } from "react-feather";
const Alert = ({ show, setShow, message, title, success }) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  if (!show) {
    return null;
  }
  return (
    <div
      className="fixed z-10 top-1/4 inset-x-2 overflow-y-auto sm:inset-0"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-primary-light dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-primary-light dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div
                className={`m-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
                  success ? "bg-primary-100" : "bg-red-100"
                } sm:mx-0 sm:h-10 sm:w-10`}
              >
                {success ? (
                  <Check className="text-primary-500" />
                ) : (
                  <AlertTriangle className="text-red-500" />
                )}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-100">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
