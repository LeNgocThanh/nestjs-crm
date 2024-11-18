import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController, GroupRolesController, UserGroupsController, GroupsController, GroupFunctionsController, FunctionsController } from './users.controller';
import { UsersService, GroupRolesService, UserGroupsService, GroupsService, GroupFunctionsService, FunctionsService } from './users.service';
import { Users, UserSchema } from './schema/users.schema';
import { GroupRoles, GroupRolesSchema } from './schema/groupRoles.schema';
import { UserGroups, UserGroupsSchema } from './schema/userGroups.schema';
import { Groups, GroupsSchema } from './schema/groups.schema';
import { GroupFunctions, GroupFunctionsSchema } from './schema/groupFunctions.schema';
import { Functions, FunctionSchema } from './schema/functions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }, { name: GroupRoles.name, schema: GroupRolesSchema }, { name: UserGroups.name, schema: UserGroupsSchema }, { name: Groups.name, schema: GroupsSchema }, { name: GroupFunctions.name, schema: GroupFunctionsSchema }, { name: Functions.name, schema: FunctionSchema }])],
  controllers: [UsersController, GroupRolesController, UserGroupsController, GroupsController, GroupFunctionsController, FunctionsController],
  providers: [UsersService, GroupRolesService, UserGroupsService, GroupsService, GroupFunctionsService, FunctionsService],
})
export class UsersModule {}