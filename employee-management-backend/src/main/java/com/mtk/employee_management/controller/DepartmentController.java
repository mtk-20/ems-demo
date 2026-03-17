package com.mtk.employee_management.controller;

import com.mtk.employee_management.dto.DepartmentDto;
import com.mtk.employee_management.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService service;

    @PostMapping("/create")
    public ResponseEntity<DepartmentDto> handleCreateDepartment(@Valid @RequestBody DepartmentDto dto) {
        DepartmentDto dept = service.createDepartment(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dept);
    }
}
