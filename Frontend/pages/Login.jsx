import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import { useAuth } from '../context/auth.context';
import axios from 'axios';

const Login = () => {
  const { setToken, setShowLoginPopup, setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
    setBackendError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError('');
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', formData);
        if (response.data.success) {
          setToken(response.data.token);
          setUser(response.data.data);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.data));
          setShowLoginPopup(true);
          navigate('/');
        }
      } catch (error) {
        setBackendError(error.response?.data?.message || 'Invalid email or password.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-50/50 flex flex-col font-sans relative">
      
      {/* Top Contact Bar */}
      <div className="hidden lg:flex justify-between items-center text-[0.7rem] lg:text-sm text-gray-600 border-b border-blue-400/20 bg-white py-3 px-14 md:px-6 lg:px-8 xl:px-12 w-full absolute top-0 left-0 z-20">
        <div className="flex space-x-3 lg:space-x-6">
          <a href="https://www.google.com/maps/search/?api=1&query=123,+Chhatrapati+Sambhajinagar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <MapPin size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>123, Chhatrapati Sambhajinagar</span>
          </a>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Clock size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span suppressHydrationWarning>{currentTime}</span>
          </div>
        </div>
        <div className="flex space-x-3 lg:space-x-6">
          <a href="mailto:Sikkafinancialservices@gmail.com" className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <Mail size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>Sikkafinancialservices@gmail.com</span>
          </a>
          <a href="tel:+919511707784" className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <Phone size={14} className="text-blue-600 lg:w-4 lg:h-4" />
            <span>+91 9511707784</span>
          </a>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="absolute top-6 lg:top-16 left-6 z-10">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4 py-16 mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 w-full max-w-4xl overflow-hidden transform transition-all flex flex-col">
          
          {/* Header Image with Text Overlay */}
          <div className="w-full h-48 md:h-64 bg-blue-50 relative overflow-hidden hidden md:block">
            <img src="/header.jpg" alt="Header" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 md:pl-16 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-tight">Welcome Back</h2>
              <p className="text-gray-600 text-sm md:text-base font-medium">Sign in with your email and password.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left Column: Traditional Login */}
            <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
              {/* Background design elements */}
              <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-blue-50 rounded-full opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 shadow-md md:hidden">
                <User size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight md:hidden">Welcome Back</h2>
              <p className="text-gray-500 text-sm mb-8 md:hidden">Sign in with your email and password.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {backendError && (
                  <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">
                    {backendError}
                  </div>
                )}
                
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors bg-gray-50/50 text-gray-900 text-sm`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-500 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-blue-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-lg focus:outline-none focus:ring-2 transition-colors bg-gray-50/50 text-gray-900 text-sm`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600 focus:outline-none transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 mt-4"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Secure Login
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Alternative Logins */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50 flex flex-col justify-center relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-blue-100 rounded-full opacity-60 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alternative Sign In</h3>
              <p className="text-gray-500 text-sm mb-8">Quickly access your account using other methods.</p>

              <div className="space-y-4">
                <button className="w-full flex justify-center items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
                
                <button className="w-full flex justify-center items-center gap-3 bg-gray-900 hover:bg-black text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.58-.15 2.94.43 3.87 1.47-3.41 1.96-2.8 6.55.77 8.01-.88 2.37-2.31 4.74-3.3 5.49zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Continue with Apple
                </button>
                
                <div className="py-2 flex items-center justify-center space-x-4">
                  <span className="h-px bg-gray-200 w-full"></span>
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">or</span>
                  <span className="h-px bg-gray-200 w-full"></span>
                </div>

                <button type="button" onClick={() => navigate('/')} className="w-full flex justify-center items-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 cursor-pointer text-gray-700 font-medium py-3 px-4 rounded-lg transition-all shadow-sm">
                  <User size={18} className="text-gray-500" />
                  Continue as Guest
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer from existing site */}
      <Footer />
    </div>
  );
};

export default Login;
