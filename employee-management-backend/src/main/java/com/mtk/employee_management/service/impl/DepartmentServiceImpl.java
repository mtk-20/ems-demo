package com.mtk.employee_management.service.impl;

import com.mtk.employee_management.common.constant.ErrorCode;
import com.mtk.employee_management.common.exception.CommonException;
import com.mtk.employee_management.dto.DepartmentDto;
import com.mtk.employee_management.entity.Department;
import com.mtk.employee_management.mapper.DepartmentMapper;
import com.mtk.employee_management.repository.DepartmentRepo;
import com.mtk.employee_management.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public DepartmentDto getDepartmentById(Long id) {
        Department department = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Department Not Found!"));
        return mapper.toDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> department = repo.findAll();
        return department.stream().map(mapper::toDto).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long id, DepartmentDto dto) {
        Department department = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Department Not Found!"));
        department.setName(dto.getName());
        department.setDescription(dto.getDescription());
        return mapper.toDto(repo.save(department));
    }

    @Override
    public void deleteDepartment(Long id) {
        Department department = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Department Not Found!"));
        repo.delete(department);
    }
}
