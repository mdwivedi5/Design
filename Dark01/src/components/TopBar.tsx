import React from 'react';
import { BellIcon, MenuIcon, PlusIcon, SearchIcon, UserPlusIcon } from 'lucide-react';

const teammates = [
{ initials: 'SR', tint: '#7C5CFC' },
{ initials: 'KP', tint: '#3B82F6' },
{ initials: 'AB', tint: '#10B981' }];


export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-hairline bg-panel/90 px-5 py-3 backdrop-blur md:px-8">
      <button
        type="button"
        aria-label="Open navigation"
        className="rounded-md p-1.5 text-ink-muted transition-colors duration-150 ease-out hover:bg-raised hover:text-ink lg:hidden">
        
        <MenuIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <label className="flex h-9 max-w-md flex-1 items-center gap-2 rounded-lg border border-hairline bg-raised px-3">
        <SearchIcon className="h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search orders, styles, pods..."
          className="w-full bg-transparent text-[13px] text-ink placeholder:text-ink-faint focus:outline-none" />
        
        <span className="hidden shrink-0 rounded border border-hairline bg-panel px-1.5 py-0.5 text-[10px] text-ink-faint sm:block">
          ⌘K
        </span>
      </label>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg border border-hairline bg-panel p-2 text-ink-muted transition-colors duration-150 ease-out hover:text-ink">
          
          <BellIcon className="h-4 w-4" aria-hidden="true" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        </button>

        <div className="hidden items-center sm:flex" aria-label="Team on shift">
          {teammates.map(({ initials, tint }, i) =>
          <span
            key={initials}
            className="grid h-8 w-8 place-items-center rounded-full border-2 border-panel text-[11px] font-semibold text-white"
            style={{ backgroundColor: tint, marginLeft: i === 0 ? 0 : -8 }}>
            
              {initials}
            </span>
          )}
          <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-panel bg-raised text-[11px] font-semibold text-ink-muted">
            +6
          </span>
        </div>

        <button
          type="button"
          aria-label="Invite teammate"
          className="hidden rounded-lg border border-hairline bg-panel p-2 text-ink-muted transition-colors duration-150 ease-out hover:text-ink md:block">
          
          <UserPlusIcon className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-accent px-3 text-[13px] font-semibold text-white transition-colors duration-150 ease-out hover:bg-accent-hover">
          
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
          Add Widget
        </button>
      </div>
    </header>);

}