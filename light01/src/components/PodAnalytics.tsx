import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChevronDownIcon, SlidersHorizontalIcon } from 'lucide-react';
import { podSeries } from '../data/dashboard';

export function PodAnalytics() {
  const best = Math.max(...podSeries.map((p) => p.rft));

  return (
    <section aria-labelledby="pod-analytics-title" className="rounded-panel border border-hairline bg-panel p-5">
      <div className="flex items-start justify-between gap-3">
        <h2 id="pod-analytics-title" className="text-[15px] font-semibold tracking-tight text-ink">
          Pod Quality
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-raised px-2.5 py-1.5 text-[12px] font-medium text-ink-muted transition-colors duration-150 ease-out hover:text-ink">
            
            Last 6 shifts
            <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Filter pods"
            className="rounded-lg border border-hairline bg-raised p-1.5 text-ink-muted transition-colors duration-150 ease-out hover:text-ink">
            
            <SlidersHorizontalIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dl className="mt-4 flex items-end gap-8">
        <div>
          <dt className="text-[11px] text-ink-muted">Avg RFT yield</dt>
          <dd className="mt-0.5 flex items-baseline gap-2">
            <span className="text-[22px] font-semibold tracking-tight text-ink">90.0%</span>
            <span className="rounded bg-[#ECFDF5] px-1.5 py-0.5 text-[11px] font-semibold text-good">+2.4%</span>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] text-ink-muted">Rework cost / unit</dt>
          <dd className="mt-0.5 flex items-baseline gap-2">
            <span className="text-[22px] font-semibold tracking-tight text-ink">$0.42</span>
            <span className="rounded bg-[#FEF2F2] px-1.5 py-0.5 text-[11px] font-semibold text-bad">+6.1%</span>
          </dd>
        </div>
      </dl>

      <div className="mt-4 h-[176px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={podSeries} margin={{ top: 8, right: 4, bottom: 0, left: -20 }} barCategoryGap={18}>
            <CartesianGrid stroke="#EFEFF6" vertical={false} />
            <XAxis
              dataKey="pod"
              tickLine={false}
              axisLine={{ stroke: '#ECECF4' }}
              tick={{ fontSize: 11, fill: '#9A9FB5' }} />
            
            <YAxis
              domain={[60, 100]}
              tickFormatter={(v: number) => `${v}%`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: '#9A9FB5' }} />
            
            <Tooltip
              cursor={{ fill: 'rgba(124,92,252,0.06)' }}
              contentStyle={{
                background: '#FFFFFF',
                border: '1px solid #ECECF4',
                borderRadius: 10,
                fontSize: 12,
                color: '#1C1A2E',
                boxShadow: '0 8px 24px rgba(28,26,46,0.08)'
              }}
              formatter={(value: number) => [`${value}% RFT`, 'Yield']} />
            
            <Bar dataKey="rft" radius={[4, 4, 0, 0]}>
              {podSeries.map((p) =>
              <Cell key={p.pod} fill={p.rft === best ? '#7C5CFC' : '#E5E0FE'} />
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>);

}