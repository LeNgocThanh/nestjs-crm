import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/users.schema';
import { CreateUserDto, UpdateUserDto, ChangePasswordDto } from './dto/users.dto';
import { GroupRoles } from './schema/groupRoles.schema';
import { CreateGroupRolesDto, UpdateGroupRolesDto } from './dto/groupRoles.dto';
import { UserGroups } from './schema/userGroups.schema';
import { CreateUserGroupDto, UpdateUserGroupDto } from './dto/userGroups.dto';
import { Groups } from './schema/groups.schema';
import { CreateGroupDto, UpdateGroupDto } from './dto/groups.dto';
import { GroupFunctions } from './schema/groupFunctions.schema';
import { CreateGroupFunctionDto, UpdateGroupFunctionDto } from './dto/groupFunctions.dto';
import { Functions } from './schema/functions.schema';
import { CreateFunctionDto, UpdateFunctionDto } from './dto/functions.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    const existingUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return existingUser;
  }

  async remove(id: string): Promise<Users> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }

  async changePassword(id: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      throw new BadRequestException('Old password is incorrect');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
  }
}

export class GroupRolesService {
    constructor(@InjectModel(GroupRoles.name) private groupRolesModel: Model<GroupRoles>) {}
  
    async create(createGroupRolesDto: CreateGroupRolesDto): Promise<GroupRoles> {
      const createdGroupRole = new this.groupRolesModel(createGroupRolesDto);
      return createdGroupRole.save();
    }
  
    async findAll(): Promise<GroupRoles[]> {
      return this.groupRolesModel.find().exec();
    }
  
    async findOne(id: string): Promise<GroupRoles> {
      const groupRole = await this.groupRolesModel.findById(id).exec();
      if (!groupRole) {
        throw new NotFoundException(`GroupRole with ID ${id} not found`);
      }
      return groupRole;
    }
  
    async update(id: string, updateGroupRolesDto: UpdateGroupRolesDto): Promise<GroupRoles> {
      const existingGroupRole = await this.groupRolesModel.findByIdAndUpdate(id, updateGroupRolesDto, { new: true }).exec();
      if (!existingGroupRole) {
        throw new NotFoundException(`GroupRole with ID ${id} not found`);
      }
      return existingGroupRole;
    }
  
    async remove(id: string): Promise<GroupRoles> {
      const deletedGroupRole = await this.groupRolesModel.findByIdAndDelete(id).exec();
      if (!deletedGroupRole) {
        throw new NotFoundException(`GroupRole with ID ${id} not found`);
      }
      return deletedGroupRole;
    }
  }

  export class UserGroupsService {
    constructor(@InjectModel(UserGroups.name) private userGroupsModel: Model<UserGroups>) {}
  
    async create(createUserGroupsDto: CreateUserGroupDto): Promise<UserGroups> {
      const createdUserGroup = new this.userGroupsModel(createUserGroupsDto);
      return createdUserGroup.save();
    }
  
    async findAll(): Promise<UserGroups[]> {
      return this.userGroupsModel.find().exec();
    }
  
    async findOne(id: string): Promise<UserGroups> {
      const userGroup = await this.userGroupsModel.findById(id).exec();
      if (!userGroup) {
        throw new NotFoundException(`UserGroup with ID ${id} not found`);
      }
      return userGroup;
    }
  
    async update(id: string, updateUserGroupsDto: UpdateUserGroupDto): Promise<UserGroups> {
      const existingUserGroup = await this.userGroupsModel.findByIdAndUpdate(id, updateUserGroupsDto, { new: true }).exec();
      if (!existingUserGroup) {
        throw new NotFoundException(`UserGroup with ID ${id} not found`);
      }
      return existingUserGroup;
    }
  
    async remove(id: string): Promise<UserGroups> {
      const deletedUserGroup = await this.userGroupsModel.findByIdAndDelete(id).exec();
      if (!deletedUserGroup) {
        throw new NotFoundException(`UserGroup with ID ${id} not found`);
      }
      return deletedUserGroup;
    }
  }

  export class GroupsService {
    constructor(@InjectModel(Groups.name) private groupsModel: Model<Groups>) {}
  
    async create(createGroupDto: CreateGroupDto): Promise<Groups> {
      const createdGroup = new this.groupsModel(createGroupDto);
      return createdGroup.save();
    }
  
    async findAll(): Promise<Groups[]> {
      return this.groupsModel.find().exec();
    }
  
    async findOne(id: string): Promise<Groups> {
      const group = await this.groupsModel.findById(id).exec();
      if (!group) {
        throw new NotFoundException(`Group with ID ${id} not found`);
      }
      return group;
    }
  
    async update(id: string, updateGroupDto: UpdateGroupDto): Promise<Groups> {
      const existingGroup = await this.groupsModel.findByIdAndUpdate(id, updateGroupDto, { new: true }).exec();
      if (!existingGroup) {
        throw new NotFoundException(`Group with ID ${id} not found`);
      }
      return existingGroup;
    }
  
    async remove(id: string): Promise<Groups> {
      const deletedGroup = await this.groupsModel.findByIdAndDelete(id).exec();
      if (!deletedGroup) {
        throw new NotFoundException(`Group with ID ${id} not found`);
      }
      return deletedGroup;
    }
  }

  export class GroupFunctionsService {
    constructor(@InjectModel(GroupFunctions.name) private groupFunctionsModel: Model<GroupFunctions>) {}
  
    async create(createGroupFunctionDto: CreateGroupFunctionDto): Promise<GroupFunctions> {
      const createdGroupFunction = new this.groupFunctionsModel(createGroupFunctionDto);
      return createdGroupFunction.save();
    }
  
    async findAll(): Promise<GroupFunctions[]> {
      return this.groupFunctionsModel.find().exec();
    }
  
    async findOne(id: string): Promise<GroupFunctions> {
      const groupFunction = await this.groupFunctionsModel.findById(id).exec();
      if (!groupFunction) {
        throw new NotFoundException(`GroupFunction with ID ${id} not found`);
      }
      return groupFunction;
    }
  
    async update(id: string, updateGroupFunctionDto: UpdateGroupFunctionDto): Promise<GroupFunctions> {
      const existingGroupFunction = await this.groupFunctionsModel.findByIdAndUpdate(id, updateGroupFunctionDto, { new: true }).exec();
      if (!existingGroupFunction) {
        throw new NotFoundException(`GroupFunction with ID ${id} not found`);
      }
      return existingGroupFunction;
    }
  
    async remove(id: string): Promise<GroupFunctions> {
      const deletedGroupFunction = await this.groupFunctionsModel.findByIdAndDelete(id).exec();
      if (!deletedGroupFunction) {
        throw new NotFoundException(`GroupFunction with ID ${id} not found`);
      }
      return deletedGroupFunction;
    }
  }

  export class FunctionsService {
    constructor(@InjectModel(Functions.name) private functionsModel: Model<Functions>) {}
  
    async create(createFunctionDto: CreateFunctionDto): Promise<Functions> {
      const createdFunction = new this.functionsModel(createFunctionDto);
      return createdFunction.save();
    }
  
    async findAll(): Promise<Functions[]> {
      return this.functionsModel.find().exec();
    }
  
    async findOne(id: string): Promise<Functions> {
      const func = await this.functionsModel.findById(id).exec();
      if (!func) {
        throw new NotFoundException(`Function with ID ${id} not found`);
      }
      return func;
    }
  
    async update(id: string, updateFunctionDto: UpdateFunctionDto): Promise<Functions> {
      const existingFunction = await this.functionsModel.findByIdAndUpdate(id, updateFunctionDto, { new: true }).exec();
      if (!existingFunction) {
        throw new NotFoundException(`Function with ID ${id} not found`);
      }
      return existingFunction;
    }
  
    async remove(id: string): Promise<Functions> {
      const deletedFunction = await this.functionsModel.findByIdAndDelete(id).exec();
      if (!deletedFunction) {
        throw new NotFoundException(`Function with ID ${id} not found`);
      }
      return deletedFunction;
    }
  }