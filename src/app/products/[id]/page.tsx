import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import ProductDetail from '@/components/ProductDetail'
import type { Metadata } from 'next'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found | AXA Professional',
    }
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [product.images.main],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
