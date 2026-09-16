import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { defectSources } from '../data/dashboard';

export function DefectSources() {
  return (
    <section
      aria-labelledby="defect-sources-title"
      className="flex flex-col rounded-panel border border-hairline bg-panel p-5">
      
      <h2 id="defect-sources-title" className="text-[15px] font-semibold tracking-tight text-ink">
        Defect Sources
      </h2>

      <div className="relative mx-auto mt-3 h-[150px] w-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={defectSources}
              dataKey="value"
              innerRadius={50}
              outerRadius={72}
              paddingAngle={2}
              stroke="none"
              isAnimationActive={false}>
              
              {defectSources.map((source) =>
              <Cell key={source.name} fill={source.color} />
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="text-[20px] font-semibold leading-none text-ink">46%</p>
            <p className="mt-1 text-[10px] text-ink-faint">Stitching</p>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {defectSources.map((source) =>
        <li key={source.name} className="flex items-center gap-2 text-[12px]">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: source.color }} aria-hidden="true" />
            <span className="flex-1 truncate text-ink-muted">{source.name}</span>
            <span className="font-semibold text-ink">{source.value}%</span>
          </li>
        )}
      </ul>
    </section>);

}