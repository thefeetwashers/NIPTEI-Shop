export default function DashboardOrders() {
  return (<section><div className="container"><h1>Dashboard — Orders</h1><div className="notice">No orders yet. Stripe is not connected, and no payment has been taken. When Stripe Connect is connected, the Profit Ledger will show per order: customer price, Stripe fee, supplier cost, shipping, refund reserve (6%), net profit.</div><p>Payment mode until then: manual approve-and-pay only.</p></div></section>);
}
