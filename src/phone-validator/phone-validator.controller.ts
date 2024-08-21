import { Body, Controller, Post } from '@nestjs/common';
import { PhoneValidatorService } from './phone-validator.service';
import { ValidateNumbersDto } from './dto/validate-numbers.dto';

@Controller('phone-validator')
export class PhoneValidatorController {
  constructor(private readonly correctNumbersService: PhoneValidatorService) {}

  @Post()
  create(@Body() numbers: ValidateNumbersDto) {
    return this.correctNumbersService.validatePhoneNumbers(numbers.numbers);
  }
}
