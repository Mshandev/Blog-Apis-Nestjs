import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // somewhere in your initialization file
  app.use(cookieParser());

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Blog Application APIs')
    .setDescription(
      'These apis are the part of blog application. These are the basic apis and used for testing and learning purposes. There are three entities [User ,Post ,Category] in this Application. [User] has One-to-Many relationship with [Post]. Also [Category] also have One-to-Many relationship with [Post]. I use JWT Authentication and Bcrypt for Password Hashing. There are two main roles [User,Admin]. Admin can create,edit,delete posts and categories, User can view posts etc.',
    )
    .setVersion('1.0')
    .addTag('Blogs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  await app.listen(5000);
}
bootstrap().then();
