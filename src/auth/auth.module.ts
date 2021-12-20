import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { async } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync(
      {
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('KEY_SECRET'),
          signOptions: { expiresIn: '60s' },
        }),
        inject: [ConfigService],
      },
      //   {
      //   secret: jwtConstants.secret,
      //   signOptions: { expiresIn: '60s' },
      // }
    ),
  ],
  exports: [AuthService],
})
export class AuthModule {}
