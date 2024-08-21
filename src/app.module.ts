import { Module } from '@nestjs/common';
import { PhoneValidatorModule } from './phone-validator/phone-validator.module';

@Module({
  imports: [PhoneValidatorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
