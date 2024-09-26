import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title of the post',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'Content of the post',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: 'The ID of the category',
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  categoryId?: number; // Make this optional if not always needed

  @ApiProperty({
    description: 'The main image URL of the post',
    example: 'http://localhost:5000/post/pictures/latest_1727266737777.png',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  mainImageUrl: string;

  @IsOptional()
  category?: Category; // Optional category object
}
