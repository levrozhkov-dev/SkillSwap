import {
  IsObject,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';

export class GetUsersFilterDto {
  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  learn?: string;

  @IsOptional()
  @IsObject()
  categories?: Record<number, number[]>;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  cities?: number[];
}
