import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  Handle: string;

  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsString()
  @IsNotEmpty()
  Description: string;

  @IsString()
  @IsNotEmpty()
  SKU: string;

  @IsNumber()
  @IsNotEmpty()
  Grams: number;

  @IsNumber()
  @IsNotEmpty()
  Stock: number;

  @IsNumber()
  @IsNotEmpty()
  Price: number;

  @IsNumber()
  @IsNotEmpty()
  ComparePrice: number;

  @IsString()
  @IsNotEmpty()
  Barcode: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
