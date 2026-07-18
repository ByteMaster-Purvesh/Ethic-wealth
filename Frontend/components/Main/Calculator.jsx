import React, { useState, useEffect, useRef } from 'react';
import { Calculator as CalcIcon, DollarSign, Clock, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(5);
  
  // Hardcoded revenue generation ratio (e.g., 15% per year)
  const ANNUAL_REVENUE_RATIO = 0.15; 
  const isFirstRender = useRef(true);

  // Trigger celebration effect when user changes inputs
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      // Only fire confetti if values are valid/non-zero
      if (amount > 0 && duration > 0) {
        triggerConfetti();
      }
    }, 600); // Debounce to prevent spam while sliding

    return () => clearTimeout(timeoutId);
  }, [amount, duration]);

  const triggerConfetti = () => {
    const colors = ['#3b82f6', '#60a5fa', '#2563eb', '#ffffff', '#fbbf24', '#f59e0b']; // Added gold/yellow for extra pop
    const fire = (particleRatio, opts) => {
      confetti({
        origin: { y: 0.7 },
        particleCount: Math.floor(250 * particleRatio),
        colors: colors,
        zIndex: 100,
        disableForReducedMotion: true,
        ...opts
      });
    };

    // Realistic multi-layered burst effect
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const calculateRevenue = () => {
    // Simple return calculation: Amount + (Amount * Ratio * Years)
    const profit = amount * ANNUAL_REVENUE_RATIO * duration;
    const total = amount + profit;
    return { profit, total };
  };

  const { profit, total } = calculateRevenue();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-white py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <CalcIcon size={16} />
            <span>Investment Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Calculate Your <span className="text-blue-600 relative inline-block">Returns
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Estimate how much your wealth can grow by investing with our proven success strategies.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 overflow-hidden max-w-4xl mx-auto border border-gray-100 flex flex-col md:flex-row hover:shadow-3xl hover:-translate-y-1 transition-all duration-500"
        >
          {/* Inputs Section */}
          <div className="p-8 md:p-12 w-full md:w-1/2 bg-white flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-8">Investment Details</h3>
            
            <div className="space-y-10">
              {/* Amount Input */}
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-600 mb-3 group-focus-within:text-blue-600 transition-colors">
                  <DollarSign size={16} className="text-blue-500 mr-2" />
                  Investment Amount (₹)
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 font-semibold text-lg outline-none"
                    min="0"
                  />
                </div>
                <input 
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-5 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Duration Input */}
              <div className="group">
                <label className="flex items-center text-sm font-semibold text-gray-600 mb-3 group-focus-within:text-blue-600 transition-colors">
                  <Clock size={16} className="text-blue-500 mr-2" />
                  Duration (Years)
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 font-semibold text-lg outline-none"
                    min="1"
                    max="50"
                  />
                </div>
                <input 
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full mt-5 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="p-8 md:p-12 w-full md:w-1/2 bg-blue-600 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Animated Background Blobs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl"
            ></motion.div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-blue-100 mb-8 flex items-center opacity-90">
                <TrendingUp size={20} className="mr-2" />
                Projected Returns
              </h3>

              <div className="space-y-8">
                <div>
                  <p className="text-blue-200 text-sm mb-2 font-medium">Total Estimated Revenue</p>
                  <AnimatePresence mode="popLayout">
                    <motion.p 
                      key={total}
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm"
                    >
                      {formatCurrency(total)}
                    </motion.p>
                  </AnimatePresence>
                </div>
                
                <div className="h-px w-full bg-blue-500/50"></div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-200 text-sm mb-1 font-medium">Invested Amount</p>
                    <AnimatePresence mode="popLayout">
                      <motion.p 
                        key={amount}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-semibold"
                      >
                        {formatCurrency(amount)}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-200 text-sm mb-1 font-medium">Total Profit</p>
                    <AnimatePresence mode="popLayout">
                      <motion.p 
                        key={profit}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-xl font-semibold text-green-300"
                      >
                        +{formatCurrency(profit)}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <div className="bg-blue-700/30 border border-blue-500/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-blue-100 opacity-90">
                      *Based on an estimated annual success ratio of <span className="font-bold">{ANNUAL_REVENUE_RATIO * 100}%</span>. Actual returns may vary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
