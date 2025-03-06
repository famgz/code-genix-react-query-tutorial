import Products from '@/components/products';

export default function ProductsPage() {
  return (
    <div className='flex flex-col space-y-4 flex-1'>
      <h2 className='text-2xl font-bold'>Products</h2>
      <Products />
    </div>
  );
}
