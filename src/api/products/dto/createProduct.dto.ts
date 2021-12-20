import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  index: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  @IsOptional()
  create: Date;
}
