import { useContext } from "react";
import { ModalContext } from "../contex/ModalContex";

const Navbar: React.FC = () => {
  const { toggleAddUserModal } = useContext(ModalContext);
  return (
    <nav
      style={{
        background: "#662671",
      }}
      className="bg-white-800 shadow-md w-full fixed z-10 top-0"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center">
            <h2 className="text-white">
              <span className="text-white font-bold">Logo</span>
            </h2>
          </div>

          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div className="flex center items-center">
                <div className="flex justify-center mr-3">
                  <button
                    onClick={toggleAddUserModal}
                    className="hover:brightness-110 hover:animate-pulse font-normal py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                  >
                    AddUser
                  </button>
                </div>
                <div>
                  <button
                    className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className=" rounded-full h-8 w-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="9"
                          r="3"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/* <svg
                  className="ml-4 hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
