import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly repo: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto, user: User) {
    // const slug = createPostDto.title.split(' ').join('_').toLowerCase();
    const post = new Post();
    post.userId = user.id;
    Object.assign(post, createPostDto);
    this.repo.create(post);
    return await this.repo.save(post);
  }

  // http://localhost:5000/post?sort=asc&title=pubg
  async findAll(query?: string) {
    const myQuery = this.repo
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.user', 'user');

    if (!(Object.keys(query).length === 0) && query.constructor === Object) {
      // Get the keys of query string
      const queryKeys = Object.keys(query);

      // check if title is present
      if (queryKeys.includes('title')) {
        myQuery.where('post.title LIKE :title', {
          title: `%${query['title']}%`,
        });
      }

      // check if sort key is present
      if (queryKeys.includes('sort')) {
        myQuery.orderBy('post.title', query['sort'].toUpperCase());
      }

      // check if category is present
      if (queryKeys.includes('category')) {
        myQuery.andWhere('category.name = :cat', { cat: query['category'] });
      }

      return await myQuery.getMany();
    } else {
      return await myQuery.getMany();
    }
  }

  async findOne(id: number) {
    const post = await this.repo.findOneBy({ id });
    if (!post) {
      throw new BadRequestException('Post Not Found');
    }
    return post;
  }

  async findBySlug(slug: string) {
    try {
      const post = await this.repo.findOneBy({ slug });
      return post;
    } catch (error) {
      throw new BadRequestException(`Post with slug ${slug} not found`);
    }
  }

  async update(slug: string, updatePostDto: UpdatePostDto) {
    const post = await this.repo.findOneBy({ slug });
    if (!post) {
      throw new BadRequestException('Post Not Found');
    }
    post.modifiedOn = new Date(Date.now());
    post.category = updatePostDto.category;

    Object.assign(post, updatePostDto);
    return this.repo.save(post);
  }

  async remove(id: number) {
    const post = await this.repo.findOneBy({ id });
    if (!post) {
      throw new BadRequestException('Post Not Found');
    }
    await this.repo.remove(post);
    return { success: true, post };
  }
}
