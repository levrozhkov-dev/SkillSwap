import { IsOptional, IsString } from 'class-validator';

export class GetUsersFilterDto {
  @IsOptional()
  @IsString()
  gender?: string;
  @IsOptional()
  @IsString()
  learn?: string;
}
