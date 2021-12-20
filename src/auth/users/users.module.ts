import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './Schema/users.schema';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { UsersController } from './users.controller';
@Module({
  imports: [
    MongooseModule.forFeatureAsync(
      [
        {
          name: Users.name,
          // schema: UserSchema,
          useFactory: () => {
            const schema = UsersSchema;
            schema.pre('save', async function (done) {
              if (this.isModified('password')) {
                // const saltOrRounds = 10;
                // const password_key = 'random_password';
                const salt = await bcrypt.genSalt();
                const password = await bcrypt.hash(this.get('password'), salt);
                this.set('password', password);
              }
              done();
            });
            return schema;
          },
        },
      ],
      'auth',
    ),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
