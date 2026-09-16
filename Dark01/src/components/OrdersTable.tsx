import React from 'react';
import { ArrowRightIcon, MoreVerticalIcon } from 'lucide-react';
import { productionOrders } from '../data/dashboard';
import type { OrderStatus } from '../types/dashboard';

const statusStyles: Record<OrderStatus, string> = {
  'On Track': 'bg-[#ECFDF5] text-[#047857]',
  'At Risk': 'bg-[#FFFBEB] text-[#B45309]',
  Delayed: 'bg-[#FEF2F2] text-[#B91C1C]',
  Shipped: 'bg-[#EFF6FF] text-[#1D4ED8]'
};

export function OrdersTable() {
  return (
    <section
      aria-labelledby="orders-title"
      className="flex flex-col rounded-panel border border-hairline bg-panel">
      
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <h2 id="orders-title" className="text-[15px] font-semibold tracking-tight text-ink">
          Production Orders
        </h2>
        <span className="text-[11px] text-ink-faint">Updated 4 min ago</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-y border-hairline bg-raised">
              {['Buyer', 'Style', 'Due', 'Status', 'Units', ''].map((head, i) =>
              <th
                key={head || 'actions'}
                scope="col"
                className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-ink-faint ${
                i === 4 ? 'text-right' : ''}`
                }>
                
                  {head}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {productionOrders.map((order) =>
            <tr key={order.id} className="border-b border-hairline last:border-0">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[11px] font-bold text-white"
                    style={{ backgroundColor: order.buyerTint }}>
                    
                      {order.buyer.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[13px] font-medium text-ink">{order.buyer}</span>
                      <span className="block text-[11px] text-ink-faint">{order.id}</span>
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-[13px] text-ink-muted">{order.style}</td>
                <td className="whitespace-nowrap px-5 py-3 text-[13px] text-ink-muted">{order.due}</td>
                <td className="px-5 py-3">
                  <span
                  className={`inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-semibold ${statusStyles[order.status]}`}>
                  
                    {order.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-right text-[13px] font-semibold text-ink">
                  {order.units}
                </td>
                <td className="px-3 py-3">
                  <button
                  type="button"
                  aria-label={`Actions for ${order.id}`}
                  className="rounded-md p-1 text-ink-faint transition-colors duration-150 ease-out hover:bg-raised hover:text-ink">
                  
                    <MoreVerticalIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-auto px-5 py-3">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent transition-colors duration-150 ease-out hover:text-accent-hover">
          
          View all production orders
          <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>);

}