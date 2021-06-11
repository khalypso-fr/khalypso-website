export enum ROUTE {
  HOME = '/',
  SUBSCRIPTIONS = '/subscriptions',
}

export enum SUBSCRIPTIONS_ROUTE {
  BASIC = 'basic',
}

type TArgs =
  | { path: ROUTE.HOME }
  | { path: ROUTE.SUBSCRIPTIONS }
  | { path: SUBSCRIPTIONS_ROUTE.BASIC }
