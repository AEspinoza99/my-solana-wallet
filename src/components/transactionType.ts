export type Transaction = {
  id: string;
  type: "Received" | "Sent";
  amount: string;
  time: string;
  address: string;
};
