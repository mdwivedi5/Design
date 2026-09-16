import React from 'react';
import { BoxIcon, DollarSignIcon, PackageIcon, ShieldCheckIcon } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { KpiCard } from '../components/KpiCard';
import { ProductionOverview } from '../components/ProductionOverview';
import { PodAnalytics } from '../components/PodAnalytics';
import { OrdersTable } from '../components/OrdersTable';
import { TopStyles } from '../components/TopStyles';
import { DefectSources } from '../components/DefectSources';
import { RiskBanner } from '../components/RiskBanner';
import { kpis } from '../data/dashboard';

const kpiIcons = [PackageIcon, BoxIcon, ShieldCheckIcon, DollarSignIcon];

interface DashboardProps {
  riskState: 'clear' | 'active';
}

export function Dashboard({ riskState }: DashboardProps) {
  return (
    <div className="flex min-h-full w-full bg-canvas">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="flex-1 px-5 py-6 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-[26px] font-bold tracking-tight text-ink">Company Owner Dashboard</h1>
              <p className="mt-1 text-[13px] text-ink-muted">
                Full rights across Million — every module, pod, and cost line in one view.
              </p>
            </div>
            <span className="rounded-lg border border-accent-line bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
              Company Owner · 11 modules
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi, i) =>
            <KpiCard key={kpi.id} kpi={kpi} icon={kpiIcons[i]} />
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ProductionOverview />
            </div>
            <PodAnalytics />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
            <div className="lg:col-span-2 xl:col-span-6">
              <OrdersTable />
            </div>
            <div className="xl:col-span-3">
              <TopStyles />
            </div>
            <div className="xl:col-span-3">
              <DefectSources />
            </div>
          </div>

          <div className="mt-5">
            <RiskBanner state={riskState} />
          </div>
        </main>
      </div>
    </div>);

}