export type Trend = 'up' | 'down';

export interface Kpi {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  caption: string;
  tint: string;
  spark: {x: number;y: number;}[];
}

export interface ProductionPoint {
  label: string;
  planned: number;
  actual: number;
}

export interface PodPoint {
  pod: string;
  rft: number;
}

export type OrderStatus = 'On Track' | 'At Risk' | 'Delayed' | 'Shipped';

export interface ProductionOrder {
  id: string;
  buyer: string;
  buyerTint: string;
  style: string;
  due: string;
  status: OrderStatus;
  units: string;
}

export interface StyleRow {
  id: string;
  name: string;
  meta: string;
  delta: string;
  trend: Trend;
}

export interface DefectSource {
  name: string;
  value: number;
  color: string;
}