import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Handle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  SKU: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  Grams: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  Stock: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  Price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  ComparePrice: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Barcode: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
