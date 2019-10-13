import { Observable } from 'rxjs';
import { IAddUserInput, IGetAllUsersInput, IDeleteUserInput } from '../messages/inputs';
import { IUsersResponse, IUserResponse } from '../messages/responses';

export interface IUserService {
    getAllUsers(data: IGetAllUsersInput): Observable<IUsersResponse>;
    addUser(data: IAddUserInput): Observable<IUserResponse>;
    deleteUser(data: IDeleteUserInput): Observable<IUsersResponse>;
}
