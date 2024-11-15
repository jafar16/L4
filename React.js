import { useState } from 'react';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Login', email, password);
  };

  const handleSignUp = () => {
    console.log('Sign Up', name, email, password, confirmPassword);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-4">
          <button
            className={`text-lg font-bold mr-4 ${isLogin ? 'text-blue-500' : 'text-gray-400'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-lg font-bold ${isLogin ? 'text-gray-400' : 'text-blue-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <div className="animate-fade-in">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
              <ArrowRight className="w-4 h-4 text-white ml-2" />
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-400 rounded-lg p-2">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  className="w-full p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}
            >
              Sign Up
              <ArrowRight className="w-4 h-4 text-white ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
