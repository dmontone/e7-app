import { MapToDollar } from 'styled-components';
type GenericObject = { [k: string]: any }

export const mapToDollar = (o: GenericObject): MapToDollar<GenericObject> =>
  Object.keys(o).reduce<GenericObject>((n, k) => {
    n[`$${k}`] = o[k]
    return n
  }, {})