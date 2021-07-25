import Link from 'next/link'


const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-green-600 hover:text-green-500 dark:hover:text-green-500">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag