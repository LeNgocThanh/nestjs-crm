import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, ChangePasswordDto } from './dto/users.dto';
import { Users } from './schema/users.schema';
import { GroupRolesService } from './users.service';
import { CreateGroupRolesDto, UpdateGroupRolesDto } from './dto/groupRoles.dto';
import { GroupRoles } from './schema/groupRoles.schema';
import { UserGroupsService } from './users.service';
import { CreateUserGroupDto, UpdateUserGroupDto } from './dto/userGroups.dto';
import { UserGroups } from './schema/userGroups.schema';
import { GroupsService } from './users.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/groups.dto';
import { Groups } from './schema/groups.schema';
import { GroupFunctionsService } from './users.service';
import { CreateGroupFunctionDto, UpdateGroupFunctionDto } from './dto/groupFunctions.dto';
import { GroupFunctions } from './schema/groupFunctions.schema';
import { FunctionsService } from './users.service';
import { CreateFunctionDto, UpdateFunctionDto } from './dto/functions.dto';
import { Functions } from './schema/functions.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Users> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Users> {
    return this.usersService.remove(id);
  }

  @Patch(':id/change-password')
  async changePassword(
    @Param('id') id: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    const { oldPassword, newPassword } = changePasswordDto;
    await this.usersService.changePassword(id, oldPassword, newPassword);
  }
}

@Controller('group-roles')
export class GroupRolesController {
  constructor(private readonly groupRolesService: GroupRolesService) {}

  @Post()
  async create(@Body() createGroupRolesDto: CreateGroupRolesDto): Promise<GroupRoles> {
    return this.groupRolesService.create(createGroupRolesDto);
  }

  @Get()
  async findAll(): Promise<GroupRoles[]> {
    return this.groupRolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GroupRoles> {
    return this.groupRolesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGroupRolesDto: UpdateGroupRolesDto): Promise<GroupRoles> {
    return this.groupRolesService.update(id, updateGroupRolesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<GroupRoles> {
    return this.groupRolesService.remove(id);
  }
}

@Controller('user-groups')
export class UserGroupsController {
  constructor(private readonly userGroupsService: UserGroupsService) {}

  @Post()
  async create(@Body() createUserGroupsDto: CreateUserGroupDto): Promise<UserGroups> {
    return this.userGroupsService.create(createUserGroupsDto);
  }

  @Get()
  async findAll(): Promise<UserGroups[]> {
    return this.userGroupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserGroups> {
    return this.userGroupsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserGroupsDto: UpdateUserGroupDto): Promise<UserGroups> {
    return this.userGroupsService.update(id, updateUserGroupsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserGroups> {
    return this.userGroupsService.remove(id);
  }
}

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto): Promise<Groups> {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  async findAll(): Promise<Groups[]> {
    return this.groupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Groups> {
    return this.groupsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto): Promise<Groups> {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Groups> {
    return this.groupsService.remove(id);
  }
}

@Controller('group-functions')
export class GroupFunctionsController {
  constructor(private readonly groupFunctionsService: GroupFunctionsService) {}

  @Post()
  async create(@Body() createGroupFunctionDto: CreateGroupFunctionDto): Promise<GroupFunctions> {
    return this.groupFunctionsService.create(createGroupFunctionDto);
  }

  @Get()
  async findAll(): Promise<GroupFunctions[]> {
    return this.groupFunctionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GroupFunctions> {
    return this.groupFunctionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGroupFunctionDto: UpdateGroupFunctionDto): Promise<GroupFunctions> {
    return this.groupFunctionsService.update(id, updateGroupFunctionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<GroupFunctions> {
    return this.groupFunctionsService.remove(id);
  }
}

@Controller('functions')
export class FunctionsController {
  constructor(private readonly functionsService: FunctionsService) {}

  @Post()
  async create(@Body() createFunctionDto: CreateFunctionDto): Promise<Functions> {
    return this.functionsService.create(createFunctionDto);
  }

  @Get()
  async findAll(): Promise<Functions[]> {
    return this.functionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Functions> {
    return this.functionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFunctionDto: UpdateFunctionDto): Promise<Functions> {
    return this.functionsService.update(id, updateFunctionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Functions> {
    return this.functionsService.remove(id);
  }
}