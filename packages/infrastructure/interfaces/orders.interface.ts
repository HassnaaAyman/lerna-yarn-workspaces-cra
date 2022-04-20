/** @format */

export type ProductsData = {
  productId?: string;
  productName?: string;
  quantity?: string;
  sku?: string;
  lineId?: string;
  variation?: string;
  sellingPrice?: string;
  egularPrice?: string;
  orderItemType?: string;
};

export type IPagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  has_more: boolean;
};
export interface OrdersData {
  orderId?: number;
  dropId?: number;
  region?: string;
  area?: string;
  shippingCompany?: string;
  status?: string;
  comment?: string;
  lastStatus?: string;
  creationDate?: string;
  dropShipperUserID?: string;
  dropShipperName?: string;
  dropShipperEmail?: string;
  dropShipperMobile?: string;
  consumerName?: string;
  consumerMobile1?: string;
  consumerMobile2?: string;
  address?: string;
  storeName?: string;
  shippingCost?: string;
  orderTotal?: string;
  products?: Array<ProductsData>;
  pagination: IPagination;
}
