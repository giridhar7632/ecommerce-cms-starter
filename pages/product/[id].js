import React from 'react'
import Layout from '../../components/layout'
import ProductLayout from '../../components/Product/ProductLayout'
import DeleteProduct from '../../components/Product/DeleteProduct'
import UpdateProduct from '../../components/Product/UpdateProduct'

function Product({ product }) {
  return (
    <div>
      <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
        <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
          <span className="mr-2 text-sm font-medium text-gray-500">
            Product:{' '}
          </span>
          {product?.name}
        </h1>
        <div className="flex items-center space-x-2">
          <UpdateProduct product={product} />
          <DeleteProduct />
        </div>
      </header>
      {product ? (
        <ProductLayout product={product} />
      ) : (
        <div className="w-full text-center text-2xl font-bold text-gray-300">
          No details
        </div>
      )}
    </div>
  )
}

export default Product

Product.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Products' }}>{page}</Layout>
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: true,
  }
}
