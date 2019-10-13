import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { IUsersResponse, IUserResponse, IAddUserInput, IDeleteUserInput } from '@foss/grpc';

@GrpcService()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @GrpcMethod('UsersService', 'GetAllUsers')
    getAllUsers(): IUsersResponse {
        const users = this.usersService.getAllUsers();
        return { users };
    }

    @GrpcMethod('UsersService', 'AddUser')
    addUser(user: IAddUserInput) {
        this.usersService.addUser(user);
        return user;
    }

    @GrpcMethod('UsersService', 'DeleteUser')
    deleteUser(data: IDeleteUserInput) {
        this.usersService.removeUser(data.index);
        const users = this.usersService.getAllUsers();
        return { users };
    }
}
