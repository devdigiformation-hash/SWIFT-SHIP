import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-swift-dark flex items-center justify-center px-4 py-20">
      <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-lg text-center space-y-6 border border-white/10 shadow-glass">
        <div className="text-7xl font-mono font-extrabold text-swift-blue">404</div>
        <div className="space-y-2">
          <h1 className="text-2xl font-display font-bold text-white">Route Not Found</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The consignment path or page you requested does not exist on our British network map.
          </p>
        </div>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-swift-blue hover:bg-blue-600 text-white font-medium text-xs rounded-xl transition-all shadow-glow-blue flex items-center gap-2"
          >
            <Home size={15} />
            <span>Return to Journey</span>
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 glass-panel hover:bg-white/10 text-slate-200 text-xs font-medium rounded-xl transition-all"
          >
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
};
