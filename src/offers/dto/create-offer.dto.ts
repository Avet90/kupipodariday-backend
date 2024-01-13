import { IsBoolean, IsNumber } from 'class-validator';

export class CreateOfferDto {
  @IsNumber()
  itemId: number;

  amount: number;

  @IsBoolean()
  hidden: boolean;
}
