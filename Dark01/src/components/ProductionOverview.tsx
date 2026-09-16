import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChevronDownIcon, InfoIcon } from 'lucide-react';
import { productionSeries } from '../data/dashboard';

const formatUnits = (value: number) => value === 0 ? '0' : `${Math.round(value / 1000)}K`;

export function ProductionOverview() {
  return (
    <section
      aria-labelledby="production-overview-title"
      className="rounded-panel border border-hairline bg-panel p-5">
      
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5">
            <h2 id="production-overview-title" className="text-[17px] font-semibold tracking-tight text-ink">
              Production Output
            </h2>
            <InfoIcon className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
          </div>
          <p className="mt-1 text-[12px] text-ink-muted">
            Planned cut plan vs actual sewn output across all pods
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3 text-[11px] text-ink-muted">
            <li className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Actual output
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C6C8D8]" aria-hidden="true" />
              Planned
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-raised px-2.5 py-1.5 text-[12px] font-medium text-ink-muted transition-colors duration-150 ease-out hover:text-ink">
            
            Monthly
            <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-5 h-[248px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productionSeries} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
            <defs>
              <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5CFC" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#7C5CFC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#EFEFF6" vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={{ stroke: '#ECECF4' }}
              tick={{ fontSize: 11, fill: '#9A9FB5' }} />
            
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={formatUnits}
              tick={{ fontSize: 11, fill: '#9A9FB5' }} />
            
            <Tooltip
              cursor={{ stroke: '#C6C8D8', strokeDasharray: '4 4' }}
              contentStyle={{
                background: '#FFFFFF',
                border: '1px solid #ECECF4',
                borderRadius: 10,
                fontSize: 12,
                color: '#1C1A2E',
                boxShadow: '0 8px 24px rgba(28,26,46,0.08)'
              }}
              labelStyle={{ color: '#6B7089', marginBottom: 4 }}
              formatter={(value: number, name) => [
              `${value.toLocaleString()} units`,
              name === 'actual' ? 'Actual output' : 'Planned']
              } />
            
            <Area
              type="monotone"
              dataKey="planned"
              stroke="#C6C8D8"
              strokeWidth={2}
              fill="transparent"
              dot={false} />
            
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#7C5CFC"
              strokeWidth={2.5}
              fill="url(#actualFill)"
              dot={false}
              activeDot={{ r: 4, fill: '#7C5CFC', stroke: '#FFFFFF', strokeWidth: 2 }} />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>);

}