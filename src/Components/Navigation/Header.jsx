import { Link, NavLink } from "react-router-dom";
import { TbAdjustmentsHeart } from "react-icons/tb";
import MenuItems from "./MenuItems";

const Header = ({ children }) => {
  const user = false;

  return (
    <div className='drawer'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='w-full navbar  border-b-primary border-b-4 mb-6'>
          <div className='w-full flex justify-between mx-auto max-w-[1400px] px-2'>
            <div>
              <div className='flex-none lg:hidden'>
                <label
                  htmlFor='my-drawer-3'
                  aria-label='open sidebar'
                >
                  <TbAdjustmentsHeart className='text-2xl cursor-pointer' />
                </label>
              </div>
              <div className='hidden lg:block'>
                <Link
                  to={"./"}
                  className='flex items-center'
                >
                  <img
                    className='h-12'
                    src='../favicon.png'
                    alt=''
                  />
                  <h2 className='text-3xl font-bold'>
                    <span className='text-primary  '>Medi</span>Scan
                  </h2>
                </Link>
              </div>
            </div>
            <div className=' flex lg:justify-between justify-end'>
              <div className='px-2 mx-2 lg:hidden'>
                <Link
                  to={"./"}
                  className='flex items-center'
                >
                  <img
                    className='h-6'
                    src='../favicon.png'
                    alt=''
                  />
                  <h2 className='text-xl font-bold'>
                    <span className='text-primary  '>Medi</span>Scan
                  </h2>
                </Link>
              </div>
              <ul className='hidden lg:flex gap-2 menu menu-horizontal'>
                {/* Navbar menu content here */}
                <MenuItems></MenuItems>
              </ul>
            </div>
            {user ? (
              <>
                <div
                  data-tip={user.displayName}
                  className='tooltip tooltip-left dropdown dropdown-end border rounded-full w-10 border-primary '
                >
                  <label
                    tabIndex={0}
                    className=' dark:border-white'
                  >
                    <img
                      className='w-10 rounded-full cursor-pointer'
                      src={user?.photoURL ? user.photoURL : "https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png"}
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <p className='hover:text-white'>
                        Hello, <span className='underline text-blue-500'>{user.displayName}</span>
                      </p>
                    </li>
                    <li>
                      {/* <p onClick={() => logOut()}>Logout</p> */}
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <button className='p-2 rounded-lg font-semibold   text-primary border border-primary bg-secondary hover:border-secondary hover:bg-primary hover:text-secondary '>
                <NavLink to={"signin"}>Appointment</NavLink>
              </button>
            )}
          </div>
        </div>
        <div className='w-full max-w-[1400px] px-2 mx-auto'>
          {/* Page content here */}
          {children}
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200'>
          {/* Sidebar content here */}
          <MenuItems></MenuItems>
        </ul>
      </div>
    </div>
  );
};

export default Header;
