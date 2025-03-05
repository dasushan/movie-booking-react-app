import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { account } from '../../lib/appwrite';
import { Input } from '../../components/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submit = async (data) => {
    console.log(data);
    setError(null);
    try {
      // Create user session
      const session = await account.createEmailPasswordSession(
        data.email,
        data.password
      );
      console.log('session', session);

      //Send email verification
      const verify = await account.createVerification(
        `${window.location.origin}/verify`
      );
      console.log('verify:', verify);
      reset();
      navigate('/')
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-50 mt-3 p-16 rounded-md shadow-lg">
      <div className="flex items-center justify-center text-[1.5rem] font-[700] h-[7rem] mb-2">
        <span className="inline-block hover:scale-105">Login</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="grid gap-6 mb-6 w-[80%] mx-auto">
          <div>
            <Input
              placeholder="Email"
              label="Email :"
              className={`${errors.email ? 'border-red-500' : ''}`}
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            {errors.email && (
              <p className="text-black text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              label="Password :"
              className={`${errors.password ? 'border-red-500' : ''}`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 10,
                  message: 'Password should be greater than 10 characters',
                },
              })}
            />
            {errors.password && (
              <p className="text-black text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <span className="text-sm">{error}</span>
          </div>
          <div className="flex items-center  justify-center  text-white   mt-3">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-red-500 w-[50%] px-6 py-4 rounded-3xl hover:bg-red-700 transition ease-in-out hover:shadow hover:scale-105"
            >
              {isSubmitting ? 'Loading' : 'Login'}
            </button>
          </div>
          <div
            className="text-sm text-center"
            onClick={() => navigate('/signup')}
          >
            <p className="font-sans">
              Don't have an account?{' '}
              <span className="text-blue-500 text-lg inline-block hover:font-medium cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
