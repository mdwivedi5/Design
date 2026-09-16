import React from 'react';
import { AlertTriangleIcon, ArrowRightIcon, CheckCircle2Icon } from 'lucide-react';

interface RiskBannerProps {
  state: 'clear' | 'active';
}

export function RiskBanner({ state }: RiskBannerProps) {
  const clear = state === 'clear';
  const Icon = clear ? CheckCircle2Icon : AlertTriangleIcon;

  return (
    <section
      aria-labelledby="risk-banner-title"
      className={`flex flex-wrap items-center gap-4 rounded-panel border px-5 py-4 ${
      clear ? 'border-[#BBF7D0] bg-[#F0FDF6]' : 'border-accent-line bg-accent-soft'}`
      }>
      
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${clear ? 'bg-[#D1FAE5]' : 'bg-white'}`}>
        
        <Icon className={`h-4 w-4 ${clear ? 'text-good' : 'text-accent'}`} aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1">
        <h2 id="risk-banner-title" className="text-[14px] font-semibold text-ink">
          {clear ? 'Cross-module risk intelligence: all clear' : 'Cross-module risk intelligence: 3 active risks'}
        </h2>
        <p className="mt-0.5 text-[12px] text-ink-muted">
          {clear ?
          'All pods staffed, costs within BOM targets, RFT trends stable.' :
          'Understaffed pods · BOM cost overruns · RFT decline — live cross-module view.'}
        </p>
      </div>

      <a
        href="#"
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-semibold transition-colors duration-150 ease-out ${
        clear ?
        'border border-[#BBF7D0] bg-white text-good hover:bg-[#ECFDF5]' :
        'bg-accent text-white hover:bg-accent-hover'}`
        }>
        
        View report
        <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </section>);

}