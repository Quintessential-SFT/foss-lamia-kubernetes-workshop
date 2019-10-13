import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getUserProtoPath, IUserService, IUsersResponse, IUserResponse } from '@foss/grpc';
import { IUser } from '../interfaces/IUser';

@Injectable()
export class UsersService implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
            package: 'users',
            protoPath: getUserProtoPath()
        }
    })
    client: ClientGrpc;

    private usersService: IUserService;

    onModuleInit() {
        this.usersService = this.client.getService<IUserService>('UsersService');
    }

    getAllUsers(): Observable<IUsersResponse> {
        return this.usersService.getAllUsers({ });
    }

    addUser(user: IUser): Observable<IUserResponse> {
        return this.usersService.addUser(user);
    }

    deleteUser(index: number): Observable<IUsersResponse> {
        return this.usersService.deleteUser({ index });
    }
}
