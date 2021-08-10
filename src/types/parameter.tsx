import { eParameterType } from "../utils";

export type TParameter = {
  id: number;
  name: string;
  description: string;
  unitId: number;
  unitName?: string;
  type: eParameterType;
  rangeStart: number;
  rangeEnd: number;
};
