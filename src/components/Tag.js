import Link from 'next/link'


const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-green-800 hover:text-green-600 dark:hover:text-green-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag