export const convertMarkedStringToArray = (rawString: string = '') =>
  rawString.split('#$ ').slice(1);

export const parseStringWithNewlines = (rawString: string = '') =>
  rawString.replace(/\\n/g, '\n');
