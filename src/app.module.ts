import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";
import { Cliente } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'XX.XX.XX.XX',
      port: 1521,
      username: 'myuser',
      password: 'mypassword',
      sid: 'mysid',
      entities: [Cliente],
      synchronize: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
