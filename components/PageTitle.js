import { m } from 'framer-motion'

export const PageTitle = ({ text, textSuffix }) => {
    return (
        <m.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: 0.5,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                },
            }}
        >
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                {text} {textSuffix && <span className="font-light">{textSuffix}</span>}
            </h1>
        </m.div>
    )
}