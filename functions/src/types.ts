export interface InventoryItem {
  id?: string;
  basePrice: number;
  quantity: number;
}

export type InventoryItemUpdate = Record<
    keyof InventoryItem,
    string | number
>;

export interface HttpException {
  code: number;
  message: string;
  errors?: string[],
}

export type LogData = Record<string, string | number | null | undefined>;
