import { RolesBuilder } from 'nest-access-control';

export enum UserRoles {
  Admin = 'Admin',
  Reader = 'Reader',
}
export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(UserRoles.Reader)
  .readAny(['posts'])
  .grant(UserRoles.Admin)
  .extend(UserRoles.Reader)
  .createAny(['posts'])
  .updateAny(['posts'])
  .deleteAny(['posts']);

roles
  .grant(UserRoles.Reader)
  .readAny(['categories'])
  .grant(UserRoles.Admin)
  .extend(UserRoles.Reader)
  .createAny(['categories'])
  .updateAny(['categories'])
  .deleteAny(['categories']);
