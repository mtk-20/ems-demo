package com.mtk.employee_management.service.impl;

import com.mtk.employee_management.dto.DepartmentDto;
import com.mtk.employee_management.entity.Department;
import com.mtk.employee_management.mapper.DepartmentMapper;
import com.mtk.employee_management.repository.DepartmentRepo;
import com.mtk.employee_management.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService{

    private final DepartmentRepo repo;
    private final DepartmentMapper mapper;

    @Override
    public DepartmentDto createDepartment(DepartmentDto dto) {
        Department department = mapper.toEntity(dto);
        return mapper.toDto(repo.save(department));
    }
}
