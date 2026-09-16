import type {
  DefectSource,
  Kpi,
  PodPoint,
  ProductionOrder,
  ProductionPoint,
  StyleRow } from
'../types/dashboard';

const spark = (values: number[]) => values.map((y, x) => ({ x, y }));

export const kpis: Kpi[] = [
{
  id: 'output',
  label: 'Units Shipped',
  value: '190,230',
  delta: '12.5%',
  trend: 'up',
  caption: 'vs last month',
  tint: '#7C5CFC',
  spark: spark([12, 18, 15, 22, 20, 28, 32, 30, 38])
},
{
  id: 'orders',
  label: 'Open Production Orders',
  value: '2,856',
  delta: '6.7%',
  trend: 'up',
  caption: 'vs last month',
  tint: '#3B82F6',
  spark: spark([20, 19, 24, 22, 27, 25, 30, 33, 36])
},
{
  id: 'rft',
  label: 'Right-First-Time Yield',
  value: '94.2%',
  delta: '1.8%',
  trend: 'down',
  caption: 'vs target 96%',
  tint: '#F59E0B',
  spark: spark([34, 33, 35, 31, 30, 28, 29, 26, 24])
},
{
  id: 'cogs',
  label: 'Landed COGS vs BOM',
  value: '$68,934',
  delta: '15.2%',
  trend: 'up',
  caption: 'under target BOM',
  tint: '#10B981',
  spark: spark([14, 17, 16, 21, 24, 23, 29, 31, 35])
}];


export const productionSeries: ProductionPoint[] = [
{ label: '10 Oct', planned: 42000, actual: 39800 },
{ label: '20 Oct', planned: 58000, actual: 55600 },
{ label: '30 Oct', planned: 76000, actual: 74100 },
{ label: '10 Nov', planned: 98000, actual: 92400 },
{ label: '20 Nov', planned: 128000, actual: 121000 },
{ label: '30 Nov', planned: 168000, actual: 152000 },
{ label: '10 Dec', planned: 214000, actual: 190230 }];


export const podSeries: PodPoint[] = [
{ pod: 'Pod 1', rft: 88 },
{ pod: 'Pod 2', rft: 93 },
{ pod: 'Pod 3', rft: 81 },
{ pod: 'Pod 4', rft: 95 },
{ pod: 'Pod 5', rft: 86 },
{ pod: 'Pod 6', rft: 97 }];


export const productionOrders: ProductionOrder[] = [
{
  id: 'PO-48210',
  buyer: 'Zara',
  buyerTint: '#3B82F6',
  style: 'Oversized Poplin Shirt',
  due: '12 Dec, 2026',
  status: 'On Track',
  units: '18,400'
},
{
  id: 'PO-48197',
  buyer: 'Uniqlo',
  buyerTint: '#F59E0B',
  style: 'Airism Crew Tee',
  due: '09 Dec, 2026',
  status: 'At Risk',
  units: '24,100'
},
{
  id: 'PO-48155',
  buyer: 'H&M',
  buyerTint: '#EF4444',
  style: 'Denim Wide Leg',
  due: '05 Dec, 2026',
  status: 'Delayed',
  units: '11,750'
},
{
  id: 'PO-48120',
  buyer: 'Mango',
  buyerTint: '#10B981',
  style: 'Knit Rib Cardigan',
  due: '01 Dec, 2026',
  status: 'Shipped',
  units: '9,320'
},
{
  id: 'PO-48098',
  buyer: 'Next',
  buyerTint: '#8B5CF6',
  style: 'Cargo Jogger',
  due: '28 Nov, 2026',
  status: 'Shipped',
  units: '15,060'
}];


export const topStyles: StyleRow[] = [
{ id: 'SKU-7742-BLK', name: 'Airism Crew Tee', meta: '24,100 units · Pod 4', delta: '12.5%', trend: 'up' },
{ id: 'SKU-6610-IND', name: 'Denim Wide Leg', meta: '18,400 units · Pod 2', delta: '8.4%', trend: 'up' },
{ id: 'SKU-5521-WHT', name: 'Oversized Poplin', meta: '15,060 units · Pod 6', delta: '6.7%', trend: 'up' },
{ id: 'SKU-4409-OAT', name: 'Knit Rib Cardigan', meta: '9,320 units · Pod 1', delta: '4.3%', trend: 'down' }];


export const defectSources: DefectSource[] = [
{ name: 'Stitching', value: 46, color: '#7C5CFC' },
{ name: 'Fabric', value: 27, color: '#10B981' },
{ name: 'Trims', value: 17, color: '#3B82F6' },
{ name: 'Finishing', value: 10, color: '#F59E0B' }];