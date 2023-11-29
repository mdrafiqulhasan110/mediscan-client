import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);
  const [strength, setstrength] = useState(false);
  const [length, setlength] = useState(false);
  const [character, setcharacter] = useState(false);
  const [special, setspecial] = useState(false);
  const [match, setmatch] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageURL = e.target.image.value;
    const email = e.target.email.value;
    const bloodGroup = e.target.bloodGroup.value;
    const district = e.target.district.value;
    const upazila = e.target.upazila.value;

    const pass = e.target.pass.value;
    const pass2 = e.target.pass2.value;

    const newUser = { name, imageURL, email, bloodGroup, district, upazila };

    if (pass != pass2) {
      setmatch(false);
    }
    if (pass == pass2) {
      setmatch(true);
    }

    if (length && character && special && match) {
      createUser(email, pass)
        .then((result) => {
          console.log(result.user);
          updateProfile(result.user, {
            displayName: name,
            photoURL: imageURL,
          });
          toast.success("User Registration Successful");
          axios
            .post("http://localhost:5000/user", newUser)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          logOut();
          navigate("/signin");
        })
        .catch((error) => {
          toast.error(error.code.slice(5, error.code.length));
        });
    }
  };

  const passwordCheck = (e) => {
    setlength(false);
    setcharacter(false);
    setspecial(false);
    setstrength(false);
    const pass = e.target.value;
    console.log(pass);
    if (pass.length > 0) {
      setstrength(true);
    }
    if (pass.length >= 6) {
      setlength(true);
    }
    if (/[A-Z]/.test(pass)) {
      setcharacter(true);
    }
    if (/[\W_]/.test(pass)) {
      setspecial(true);
    }
  };
  return (
    <div className='flex flex-row-reverse text-white w-full max-w-sm mx-auto overflow-hidde rounded-lg shadow-lg bg-gray-800 lg:max-w-4xl border border-primary'>
      <div
        className='hidden bg-contain bg-center rounded-r-lg bg-white bg-no-repeat lg:block lg:w-1/2'
        style={{ backgroundImage: "url('/doctor.png')" }}
      ></div>

      <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
        <div className='flex justify-center mx-auto'>
          <Link
            to={"/"}
            className='flex items-center'
          >
            <img
              className='h-6'
              src='../favicon.png'
              alt=''
            />
            <h2 className='text-3xl font-bold'>
              <span className='text-primary  '>Medi</span>Scan
            </h2>
          </Link>
        </div>

        <p className='mt-3 text-xl text-center text-gray-600 dark:text-gray-200'>Welcome</p>

        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>

          <p className='text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline'>Register Here</p>

          <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div className='mt-4'>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='text'
              name='image'
              placeholder='Image URL'
            />
          </div>

          <div className='flex gap-2'>
            <div className='mt-4 w-full'>
              <input
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                name='name'
                placeholder='Name'
                required
              />
            </div>
            <div className='mt-4 w-full'>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='bloodGroup'
                defaultValue={""}
              >
                <option
                  disabled
                  value=''
                >
                  Blood Group
                </option>
                <option value='a+'>A+</option>
                <option value='a-'>A-</option>
                <option value='b+'>B+</option>
                <option value='b-'>B-</option>
                <option value='ab+'>AB+</option>
                <option value='ab-'>AB-</option>
                <option value='o+'>O+</option>
                <option value='o-'>O-</option>
              </select>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='mt-4 w-full'>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='district'
                defaultValue={""}
              >
                <option
                  disabled
                  value=''
                >
                  Select District
                </option>
                <option value='fd'>Select da</option>
              </select>
            </div>
            <div className='mt-4 w-full'>
              <select
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                required
                name='upazila'
                defaultValue={""}
              >
                <option
                  disabled
                  value=''
                >
                  Select Upazila
                </option>
                <option value='d'>a </option>
              </select>
            </div>
          </div>
          <div className='mt-4'>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
              name='pass'
              placeholder='Password'
              required
              onChange={passwordCheck}
            />
          </div>
          {strength && (
            <div className='text-left mb-4'>
              <p>{length ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 6 characters.</p>
              <p>{character ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 1 capital letter.</p>
              <p>{special ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 1 special character.</p>
            </div>
          )}
          <div className='mt-4'>
            <input
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
              name='pass2'
              placeholder='Confirm Password'
              required
            />
            {!match && <p>Password Not Matched</p>}
          </div>

          <div className='mt-6'>
            <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>Sign Up</button>
          </div>
        </form>

        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>

          <Link
            to={"/signin"}
            className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
          >
            or sign in
          </Link>

          <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4'></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
