import { Injectable } from '@nestjs/common';
import { IUserResponse } from '@foss/grpc';

@Injectable()
export class UsersService {
    private users: IUserResponse[] = [{ username: 'John', email: 'lamisjohn@quintessential.gr', password: 'should be hashed', age: 16 }];

    getAllUsers() {
        return this.users;
    }

    addUser(user: IUserResponse) {
        this.users.push(user);
    }

    removeUser(index: number) {
        this.users.splice(index, 1);
    }
}
