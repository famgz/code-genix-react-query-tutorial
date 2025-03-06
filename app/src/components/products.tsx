import { Button } from '@/components/ui/button';
import { useProduct, useProducts } from '@/services/queries';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const productsQuery = useProducts();
  const productQuery = useProduct(selectedProductId);

  return (
    <>
      <div className='grid sm:grid-cols-3 gap-2'>
        {productsQuery.data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((product) => (
              <Button
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className='py-6'
                variant={'outline'}>
                <div className='text-xs font-semibold size-7 rounded-full bg-accent flex items-center justify-center'>
                  {product.id}
                </div>
                {product.name}
              </Button>
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        <Button
          onClick={() => productsQuery.fetchNextPage()}
          disabled={
            productsQuery.isFetchingNextPage || !productsQuery.hasNextPage
          }>
          {productsQuery.isFetchingNextPage
            ? 'Loading more...'
            : productsQuery.hasNextPage
            ? 'Load more'
            : 'Nothing more to load'}
        </Button>
      </div>
      <div className='flex gap-2'>
        <span>Selected product:</span>
        <span>{JSON.stringify(productQuery.data)}</span>
      </div>
    </>
  );
}
