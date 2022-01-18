import { FC } from 'react'
import { CardWithIcon } from './CardWithIcon'

const articles: Array<{
  title: string
  description: string
}> = [
  {
    title: 'Moderne',
    description: 'Un site internet adapté avec son temps',
  },
  {
    title: 'Design sur mesure',
    description:
      "Révelez votre identité au travers d'une charte propre à votre entreprise",
  },
  {
    title: 'Sécurisez votre site',
    description: 'Vos visiteurs navigueront en toute confiance',
  },
]

const LandingArguments: FC = () => (
  <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {articles.map(({ title, description }, index) => (
      <CardWithIcon key={index} title={title} description={description} />
    ))}
  </div>
)

export default LandingArguments
