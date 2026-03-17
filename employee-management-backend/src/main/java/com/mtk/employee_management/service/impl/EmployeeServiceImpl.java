package com.mtk.employee_management.service.impl;

import com.mtk.employee_management.common.constant.ErrorCode;
import com.mtk.employee_management.common.exception.CommonException;
import com.mtk.employee_management.dto.EmployeeDto;
import com.mtk.employee_management.entity.Employee;
import com.mtk.employee_management.mapper.EmployeeMapper;
import com.mtk.employee_management.repository.EmployeeRepo;
import com.mtk.employee_management.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepo repo;
    private final EmployeeMapper mapper;

    @Override
    public EmployeeDto createEmployee(EmployeeDto dto) {
        Employee emp = mapper.toEntity(dto);
        return mapper.toDto(repo.save(emp));
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee emp = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Employee Not Found!"));
        return mapper.toDto(emp);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> emp = repo.findAll();
        return emp.stream().map(mapper::toDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto dto) {
        Employee emp = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Employee Not Found!"));
        emp.setFirstName(dto.getFirstName());
        emp.setLastName(dto.getLastName());
        emp.setEmail(dto.getEmail());
        return mapper.toDto(repo.save(emp));
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee emp = repo.findById(id).orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND, "Employee Not Found!"));
        repo.delete(emp);
    }
}
