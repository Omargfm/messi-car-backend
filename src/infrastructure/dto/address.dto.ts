import { IsNotEmpty } from 'class-validator';

export class AddressDto {
  @IsNotEmpty()
  direction: string;

  constructor(partial: Partial<AddressDto>) {
    Object.assign(this, partial);
  }
}
