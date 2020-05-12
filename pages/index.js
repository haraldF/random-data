import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Little test that simply returns some random data. Usage: /api?size=nnnn{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
