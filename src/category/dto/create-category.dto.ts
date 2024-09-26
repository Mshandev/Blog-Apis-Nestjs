import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'The name of Category',
    example: 'Name of Category',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @ApiProperty({
    description: 'The description of Category',
    example: 'Description of Category',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
