import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer A2Dhlt1cUfrdwL8V66xraOh9PEiIuFRzQouU6UBIChZJ9I1V_VZ-AOAX2MWm7NcPZFM-lAN2S3fK69_-nWu_RisWoNnZfuT-T_BInucVyftiDY2AByMzTdKfLOyqXnYx",
  },
});
