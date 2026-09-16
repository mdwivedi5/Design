import React from 'react';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { topStyles } from '../data/dashboard';

export function TopStyles() {
  return (
    <section aria-labelledby="top-styles-title" className="flex flex-col rounded-panel border border-hairline bg-panel p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 id="top-styles-title" className="text-[15px] font-semibold tracking-tight text-ink">
          Top Styles
        </h2>
        <a
          href="#"
          className="text-[12px] font-semibold text-accent transition-colors duration-150 ease-out hover:text-accent-hover">
          
          View all
        </a>
      </div>

      <ul className="mt-3 divide-y divide-hairline">
        {topStyles.map((style) => {
          const positive = style.trend === 'up';
          const TrendIcon = positive ? TrendingUpIcon : TrendingDownIcon;
          return (
            <li key={style.id} className="flex items-center gap-3 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-hairline bg-raised text-[10px] font-bold text-ink-muted">
                {style.id.slice(4, 8)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-medium text-ink">{style.name}</span>
                <span className="block truncate text-[11px] text-ink-faint">{style.meta}</span>
              </span>
              <span
                className={`flex shrink-0 items-center gap-1 text-[11px] font-semibold ${
                positive ? 'text-good' : 'text-bad'}`
                }>
                
                <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {style.delta}
              </span>
            </li>);

        })}
      </ul>
    </section>);

}