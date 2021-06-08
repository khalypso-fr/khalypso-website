class Route {
  public readonly pageName: string
  public readonly path: string
  private readonly fromPage: Route | undefined

  constructor({
    pageName,
    path,
    fromPage,
  }: {
    readonly pageName: string
    readonly path: string
    readonly fromPage?: Route
  }) {
    this.pageName = pageName
    this.path = path
    this.fromPage = fromPage
  }

  public newChildPage({
    pageName,
    path,
  }: {
    pageName: string
    path: string
  }): Route {
    return new Route({ pageName, path, fromPage: this })
  }

  public static from({
    pageName,
    path,
  }: {
    pageName: string
    path: string
  }): Route {
    return new Route({ pageName, path })
  }

  public get fullPath(): string {
    return `${this.fromPage ? this.fromPage.fullPath : ''}${this.path}`
  }
}

const HomeRoute = Route.from({ pageName: 'Accueil', path: '/' })
const SubscriptionRoute = Route.from({
  pageName: 'Abonnements',
  path: '/subscriptions',
})
const BasicSubscriptionRoute = SubscriptionRoute.newChildPage({
  pageName: 'Abonnements - Basique',
  path: '/basic',
})

export default {
  home: { route: HomeRoute },
  subscription: {
    route: SubscriptionRoute,
    subRoutes: { basic: BasicSubscriptionRoute },
  },
}
