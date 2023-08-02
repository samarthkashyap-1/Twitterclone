export default function SearchbarWid(){
    return (
      <div className="sm:m-auto ">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white bg-[#202327]"
          ></label>
          <div className="relative box-border">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none   ">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full sm:w-64 sm:h-8 placeholder:text-gray-500 box-border focus:outline-none focus:bg-black focus:ring-1 ring-blue-500 p-3 mt-1.5 pl-14 text-sm bg-[#202327] text-gray-900 placeholder:text-base rounded-full outline-blue-500  dark:placeholder-gray-400 dark:text-white  "
              placeholder="Search Twitter"
              required
            />
          </div>
        </form>
      </div>
    );
}
