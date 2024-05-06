'use client'
import { useState } from 'react';
import firebase from './firebase'; // Adjust the path accordingly
import {database} from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
export default function Home() {
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data);
        setAlert('User created successfully!');
      })
      .catch((error) => {
        // Handle error
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          setAlert('Email is already registered.');
        } else {
          setAlert('An error occurred. Please try again.');
        }
      });
  };

  return (
    <>
      <html class="h-full bg-white">
        <body class="h-full">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign Up
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              {alert && (
                <div className="mt-4 text-red-500 text-sm text-center">{alert}</div>
              )}

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <button>Signup</button>
              </p>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
