import { Injectable } from '@nestjs/common';
import { CountryConfig } from './entities/country.entity';
import { phoneConfig } from './countries.config';

@Injectable()
export class PhoneValidatorService {
  validatePhoneNumbers(phoneNumbers: string[]): any {
    const validNumbers = {};
    const invalidNumbers = [];

    for (const number of phoneNumbers) {
      const cleanedNumber = number.replace(/\s+/g, '');
      const countryConfig = this.getCountryConfig(cleanedNumber);

      if (countryConfig && this.isValidNumber(cleanedNumber, countryConfig)) {
        if (!validNumbers[countryConfig.country]) {
          validNumbers[countryConfig.country] = [];
        }
        validNumbers[countryConfig.country].push(cleanedNumber);
      } else {
        invalidNumbers.push(cleanedNumber);
      }
    }
    return { validNumbers, invalidNumbers };
  }

  private getCountryConfig(number: string): CountryConfig | null {
    return phoneConfig.find((config) => number.startsWith(config.code)) || null;
  }

  private isValidNumber(number: string, config: CountryConfig): boolean {
    const localNumber = number.slice(config.code.length);

    if (!config.startsWith.some((prefix) => localNumber.startsWith(prefix))) {
      return false;
    }

    const length = localNumber.length;
    return length >= config.length.min && length <= config.length.max;
  }
}
