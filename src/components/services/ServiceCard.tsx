import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { assetUrl } from '../../utils/assets';

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  badge: string;
  features: string[];
  imageSrc?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  path,
  icon: Icon,
  badge,
  features,
  imageSrc,
}) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group">
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden bg-swift-midnight">
          <img
            src={assetUrl(imageSrc)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-swift-midnight via-transparent to-transparent" />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-swift-accent border border-white/10 uppercase tracking-wider">
            {badge}
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {!imageSrc && (
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-swift-blue/15 text-swift-accent group-hover:bg-swift-blue group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-swift-accent border border-white/10 uppercase tracking-wider">
                {badge}
              </span>
            </div>
          )}

          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-swift-accent transition-colors">
            {title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>

          <ul className="space-y-2 pt-2 border-t border-white/5">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <Check size={14} className="text-swift-blue shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Link
            to={path}
            className="inline-flex items-center gap-2 text-sm font-semibold text-swift-accent group-hover:text-white transition-colors"
          >
            <span>Explore Dedicated Service</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
