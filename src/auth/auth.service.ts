import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
