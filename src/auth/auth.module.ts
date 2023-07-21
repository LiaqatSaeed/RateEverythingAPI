import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersService],
  controllers: [AuthController],
  providers: [AuthService], // The main idea of a provider is that it can be injected as a dependency. This dependency is resolved and passed to your controller's constructor
})
export class AuthModule {}
