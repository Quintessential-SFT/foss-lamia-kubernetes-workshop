import path from 'path';

export * from './interfaces';

export function getUserProtoPath(): string {
    return path.join(__dirname, '..', 'proto', 'users.proto');
}
