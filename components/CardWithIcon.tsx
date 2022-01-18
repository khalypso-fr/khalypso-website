import { FC } from 'react'

export const CardWithIcon: FC<{
  title: string
  description: string
}> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-2xl text-center">{title}</h5>
      <p className="text-lg text-center text-gray-300">{description}</p>
    </div>
  )
}
