import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';

@Module({
  imports: [UsersModule, 
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions:{expiresIn: '60s'}
  })],
  controllers: [AuthController],
  providers: [AuthService], // The main idea of a provider is that it can be injected as a dependency. This dependency is resolved and passed to your controller's constructor
})
export class AuthModule {}
