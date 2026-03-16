package com.mtk.employee_management.mapper;

import com.mtk.employee_management.dto.DepartmentDto;
import com.mtk.employee_management.entity.Department;
import org.springframework.stereotype.Component;

@Component
public class DepartmentMapper {

    public static DepartmentDto toDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getName(),
                department.getDescription());
    }

    public static Department toEntity(DepartmentDto departmentDto) {
        return new Department(
                departmentDto.getId(),
                departmentDto.getName(),
                departmentDto.getDescription());
    }

}
