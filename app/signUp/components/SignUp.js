// components/SignUp.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/api';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');


    try {
      await signUp({
        email: formData.email,
      });
      setSuccess('Registration successful! Please check your email to activate your account.');
      
      // Redirect to activation message page
      setTimeout(() => {
        router.push('/activation-message');
      }, 3000);
    } catch (error) {
      console.error("Full Axios Error:", error);

      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No Response Received:", error.request);
      } else {
        console.error("Error in Request Setup:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-96 p-6 shadow-2xl bg-white rounded-[30px]">
        <h1 className="text-3xl block text-center font-semibold">Sign Up</h1>
        <hr className="mt-3" />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">Email</label>
            <input
              type="email"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-purple-800 bg-purple-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-purple-800 font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
