/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateSalesMetricsDashboardRequest {
  /** The name of the dashboard to create */
  dashboardName: string;
  /** The currency of the deals to include in the dashboard */
  dealCurrency: string;
  /** The HubSpot ID of the account to create the dashboard for */
  hubspotId: string;
}
