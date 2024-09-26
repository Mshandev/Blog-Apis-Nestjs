import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'The First Name of User',
    example: 'First Name of User',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({
    description: 'The Last Name of User',
    example: 'Last Name of User',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({
    description: 'The Email of User',
    example: 'email@gmaol.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The Password of User',
    example: 'password12345',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'The Profile Picture of User',
    example: 'Profile Picture',
    required: false,
  })
  @IsString()
  @IsOptional()
  profilePic: string;
}
