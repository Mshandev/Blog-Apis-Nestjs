import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDTO {
  @ApiProperty({
    description: 'The Email of User',
    example: 'user@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The Password of User',
    example: 'password12345',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
