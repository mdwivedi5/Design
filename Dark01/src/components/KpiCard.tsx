import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import type { Kpi } from '../types/dashboard';

interface KpiCardProps {
  kpi: Kpi;
  icon: React.ComponentType<{className?: string;}>;
}

export function KpiCard({ kpi, icon: Icon }: KpiCardProps) {
  const positive = kpi.trend === 'up';
  const TrendIcon = positive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <article className="flex flex-col rounded-panel border border-hairline bg-panel p-4">
      <div className="flex items-start gap-3">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
          style={{ backgroundColor: `${kpi.tint}1f`, color: kpi.tint }}>
          
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[12px] font-medium text-ink-muted">{kpi.label}</h3>
          <p className="mt-0.5 text-[22px] font-semibold leading-tight tracking-tight text-ink">{kpi.value}</p>
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-3 pt-3">
        <p className="flex items-center gap-1 text-[11px]">
          <TrendIcon className={`h-3.5 w-3.5 ${positive ? 'text-good' : 'text-bad'}`} aria-hidden="true" />
          <span className={`font-semibold ${positive ? 'text-good' : 'text-bad'}`}>{kpi.delta}</span>
          <span className="text-ink-faint">{kpi.caption}</span>
        </p>
        <div className="h-9 w-20 shrink-0" aria-hidden="true">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={kpi.spark} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={`spark-${kpi.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={kpi.tint} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={kpi.tint} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="y"
                stroke={kpi.tint}
                strokeWidth={1.75}
                fill={`url(#spark-${kpi.id})`}
                isAnimationActive={false} />
              
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </article>);

}