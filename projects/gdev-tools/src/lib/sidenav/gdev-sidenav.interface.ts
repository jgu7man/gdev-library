export interface GdevSidenavNode {
  name: string,
  routeId?: string | string[],
  route?: string,
  childs?: GdevSidenavNode[],
  disable?: boolean
}
