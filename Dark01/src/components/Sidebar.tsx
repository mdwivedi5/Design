import React from 'react';
import {
  ActivityIcon,
  BellIcon,
  BoxIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  HomeIcon,
  LayersIcon,
  LayoutGridIcon,
  MonitorIcon,
  ScissorsIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WorkflowIcon } from
'lucide-react';

const quickNav = [
{ label: 'Dashboard', icon: LayoutGridIcon, active: true },
{ label: 'Ask the Pi', icon: SparklesIcon, active: false },
{ label: 'QC Approval', icon: ShieldCheckIcon, active: false },
{ label: 'Floor Monitor', icon: MonitorIcon, active: false }];


const primaryNav = [
{ label: 'Team Home', icon: HomeIcon, active: false },
{ label: 'Dashboard', icon: LayoutGridIcon, active: true },
{ label: 'Ask the Pi', icon: SparklesIcon, active: false },
{ label: 'Notification Inbox', icon: BellIcon, active: false },
{ label: 'Floor Monitor', icon: MonitorIcon, active: false }];


const opsNav = [
{ label: 'Day Ops', icon: ActivityIcon },
{ label: 'Operations', icon: BoxIcon },
{ label: 'Sampling', icon: LayersIcon },
{ label: 'Production Flow', icon: WorkflowIcon },
{ label: 'Quality & Lifecycle', icon: ShieldCheckIcon },
{ label: 'Pod Management', icon: ScissorsIcon }];


function Selector({ mark, label, value, tint }: {mark: string;label: string;value: string;tint: string;}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2.5 rounded-lg border border-hairline bg-raised px-2.5 py-2 text-left transition-colors duration-150 ease-out hover:border-accent-line">
      
      <span
        className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-[11px] font-semibold text-white"
        style={{ backgroundColor: tint }}>
        
        {mark}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[10px] uppercase tracking-wide text-ink-faint">{label}</span>
        <span className="block truncate text-[13px] font-semibold text-ink">{value}</span>
      </span>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
    </button>);

}

export function Sidebar() {
  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-hairline bg-panel lg:flex">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent">
            <ScissorsIcon className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[15px] font-bold leading-tight tracking-tight text-ink">ApparelPi</span>
            <span className="block text-[11px] text-ink-faint">Factory Intelligence</span>
          </span>
        </div>
        <button
          type="button"
          aria-label="Collapse sidebar"
          className="rounded-md p-1 text-ink-faint transition-colors duration-150 ease-out hover:bg-raised hover:text-ink">
          
          <ChevronsLeftIcon className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="space-y-2 px-3">
        <Selector mark="M" label="Factory / Tenant" value="Million" tint="#10B981" />
        <Selector mark="M" label="Million" value="All Brands" tint="#7C5CFC" />
      </div>

      <div className="px-3 pt-3">
        <label className="flex items-center gap-2 rounded-lg border border-hairline bg-raised px-2.5 py-2">
          <SearchIcon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
          <input
            type="search"
            placeholder="AI Search..."
            className="w-full bg-transparent text-[13px] text-ink placeholder:text-ink-faint focus:outline-none" />
          
          <span className="rounded bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold text-accent">AI</span>
        </label>
      </div>

      <nav aria-label="Main navigation" className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
        <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Quick nav</p>
        <div className="grid grid-cols-2 gap-2">
          {quickNav.map(({ label, icon: Icon, active }) =>
          <button
            key={label}
            type="button"
            className={`flex flex-col items-center gap-1.5 rounded-lg border px-2 py-2.5 text-[11px] font-medium transition-colors duration-150 ease-out ${
            active ?
            'border-accent-line bg-accent-soft text-accent' :
            'border-hairline bg-raised text-ink-muted hover:border-accent-line hover:text-ink'}`
            }>
            
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="truncate">{label}</span>
            </button>
          )}
        </div>

        <ul className="mt-5 space-y-0.5">
          {primaryNav.map(({ label, icon: Icon, active }) =>
          <li key={label}>
              <a
              href="#"
              aria-current={active ? 'page' : undefined}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-150 ease-out ${
              active ? 'bg-accent-soft text-accent' : 'text-ink-muted hover:bg-raised hover:text-ink'}`
              }>
              
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="flex-1 truncate">{label}</span>
                {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
              </a>
            </li>
          )}
        </ul>

        <p className="px-1 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Modules
        </p>
        <ul className="space-y-0.5">
          {opsNav.map(({ label, icon: Icon }) =>
          <li key={label}>
              <a
              href="#"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium text-ink-muted transition-colors duration-150 ease-out hover:bg-raised hover:text-ink">
              
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="flex-1 truncate">{label}</span>
                <ChevronRightIcon className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
      </nav>

      <div className="border-t border-hairline p-3">
        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-lg border border-hairline bg-raised px-2.5 py-2 text-left transition-colors duration-150 ease-out hover:border-accent-line">
          
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-[12px] font-bold text-white">
            M
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-semibold text-ink">MD Wivedi</span>
            <span className="block truncate text-[11px] text-ink-faint">Company Owner</span>
          </span>
          <SettingsIcon className="h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
        </button>
      </div>
    </aside>);

}