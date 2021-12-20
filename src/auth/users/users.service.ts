import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create.Usert.dto';
import { Users, UsersDocument } from './Schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>,
  ) {}
  async findOne(username: string): Promise<any> {
    const user = await this.usersModel.findOne({ username });

    return {
      id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
    };
  }

  async registerUser(user: CreateUserDto) {
    const newUser = new this.usersModel(user);
    return await newUser.save();

    // return 'hello-User Service';
  }
}
