import fetch from 'node-fetch';
import Home from './home';

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/all-product", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
   

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function AdminAllProducts() {

  const allAdminProducts = await getAllAdminProducts()

  return <Home data={allAdminProducts && allAdminProducts.data} />
}