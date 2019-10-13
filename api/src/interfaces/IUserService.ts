import { Observable } from 'rxjs';
import { IUser } from './IUser';
import { IGetAllUsersInput } from './IGetAllUsersInput';

export interface IUserService {
    getAllUsers(data: IGetAllUsersInput): Observable<IUser[]>;
}
