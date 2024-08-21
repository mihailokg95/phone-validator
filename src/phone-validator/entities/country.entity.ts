export class CountryConfig {
  country: string;
  code: string;
  startsWith: string[];
  length: { min: number; max: number };

  constructor(
    country: string,
    code: string,
    startsWith: string[],
    minLength: number,
    maxLength: number,
  ) {
    this.country = country;
    this.code = code;
    this.startsWith = startsWith;
    this.length = {
      min: minLength,
      max: maxLength,
    };
  }
}
