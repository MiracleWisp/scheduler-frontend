import {TuiTime} from "@taiga-ui/cdk";

export function convertOffsetTimeToString(offsetTime: string): string {
  return TuiTime.fromString(offsetTime).shift({minutes: -new Date().getTimezoneOffset()}).toString("HH:MM");
}

export function convertStringToOffsetTime(string: string): string {
  return TuiTime.fromString(string).shift({minutes: new Date().getTimezoneOffset()}).toString('HH:MM:SS.MSS') + 'Z';

}
